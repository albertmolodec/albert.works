/* Based on https://blog.sapegin.me/til/react/generating-typescript-react-components-from-svg-icons-using-svgr/. */

import { parse } from "node:path";
import Bun from "bun";

import svgr from "@svgr/core";

function getComponentName(iconPath: string) {
  const name = parse(iconPath).name;
  const capitalizedName = name[0].charAt(0).toUpperCase() + name.slice(1);
  return `Svg${capitalizedName}`;
}

const icons = new Bun.Glob(`*.svg`);

for await (const iconPath of icons.scan({
  cwd: "src/assets/icons",
  absolute: true,
})) {
  const svgCode = await Bun.file(iconPath).text();
  const { name: fileName } = parse(iconPath);

  const componentCode = svgr.transform.sync(
    svgCode,
    {
      template: (variables, context) =>
        context.tpl`export const ${variables.componentName} = props => ${variables.jsx};`,
      plugins: [
        "@svgr/plugin-svgo",
        "@svgr/plugin-jsx",
        "@svgr/plugin-prettier",
      ],
      icon: true,
      svgProps: { fill: "currentColor" },
    },
    { componentName: getComponentName(iconPath) }
  );

  await Bun.write(`src/components/icons/${fileName}.tsx`, componentCode);
}
