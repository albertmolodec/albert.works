/* Based on https://blog.sapegin.me/til/react/generating-typescript-react-components-from-svg-icons-using-svgr/. */
import path from "node:path";
import Bun from "bun";
import svgr from "@svgr/core";

const icons = new Bun.Glob(`*.svg`).scan({
  cwd: "src/assets/icons",
  absolute: true,
});

for await (const iconPath of icons) {
  const svgCode = await Bun.file(iconPath).text();
  const fileName = path.parse(iconPath).name;

  const componentName =
    "Svg" + fileName[0].charAt(0).toUpperCase() + fileName.slice(1);

  const componentCode = svgr.transform.sync(
    svgCode,
    {
      template: (variables, context) =>
        context.tpl`import type { SVGProps } from "react";export const ${variables.componentName} = (props: SVGProps<SVGSVGElement>) => ${variables.jsx};`,
      plugins: [
        "@svgr/plugin-svgo",
        "@svgr/plugin-jsx",
        "@svgr/plugin-prettier",
      ],
      icon: true,
      svgProps: { fill: "currentColor" },
      typescript: true,
    },
    { componentName: componentName }
  );

  await Bun.write(`src/components/icons/${fileName}.tsx`, componentCode);
}
