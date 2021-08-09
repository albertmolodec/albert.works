# My personal site

Code, texts, projects and so on.

## Local development

Install dependencies.

```bash
npm i
```

Install [Vercel CLI](https://vercel.com/cli).

```bash
npm i -g vercel
```

Login to Vercel and pull environment variables.

```bash
vercel env pull
```

Start local dev server.

```bash
vercel dev
```

## Environment variables

| Key                    |               Value               |           Where to set            |
| ---------------------- | :-------------------------------: | :-------------------------------: |
| **`AIRTABLE_API_KEY`** |                ...                |    Vercel (Prod, Preview, Dev)    |
|     **`NPM_RC`**       |                ...                |       Vercel (Prod, Preview)      |

### NPM_RC

1. Edit `~/.npmrc`:

```properties
//registry.npmjs.org/:_authToken=TOKEN_FOR_NPM
@albertmolodec:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=TOKEN_FOR_GITHUB_PACKAGES
```

2. Add content of `~/.npmrc` to Vercel:

```sh
vercel env add plain NPM_RC production < ~/.npmrc
```

3. Check **Preview** in Vercel Dashboard.
