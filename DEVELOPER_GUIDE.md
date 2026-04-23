# bento-style Developer Guide

This guide explains how to use, develop, test, release, and publish `bento-style`.

## What This Package Provides

`bento-style` is a React component library for Bento-style layouts. It exports:

- `BentoGridA` through `BentoGridF` for ready-made layouts
- `Grid` for custom responsive grid composition
- `Card` for reusable card shells and variants
- `cn` for merging Tailwind class names
- TypeScript prop types for all public components
- `bento-style/style.css` for compiled component helper styles

## Consumer Setup

Install the package and peer dependencies.

```bash
npm install bento-style
npm install react react-dom tailwindcss
```

Import the stylesheet once in the app entry.

```tsx
import 'bento-style/style.css';
```

Add the package to `tailwind.config.js`.

```js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/bento-style/dist/**/*.{js,mjs}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Use a ready-made layout.

```tsx
import { BentoGridF } from 'bento-style';

export function PortfolioSection() {
  return <BentoGridF className="mx-auto max-w-6xl" />;
}
```

Compose your own layout with primitives.

```tsx
import { Grid, Card } from 'bento-style';

export function ProductBento() {
  return (
    <Grid cols={{ sm: 1, md: 2, lg: 4 }} gap={6}>
      <Card variant="bento" className="lg:col-span-2">
        <h3 className="text-2xl font-bold">Launch faster</h3>
        <p className="text-gray-400">Build custom Bento sections with primitives.</p>
      </Card>
      <Card variant="glass" hover>
        <h3 className="font-bold">Typed and flexible</h3>
      </Card>
    </Grid>
  );
}
```

## Local Development

Use Node.js 18 or newer.

```bash
npm install
npm run dev
```

Common commands:

- `npm run typecheck`: validates TypeScript
- `npm run test`: runs Vitest tests
- `npm run build`: creates `dist`
- `npm run lint:package`: validates package exports with `publint`
- `npm run pack:check`: previews npm tarball contents
- `npm run check`: runs the full release gate

## Project Structure

- `src/index.ts`: public export surface
- `src/components`: ready-made Bento grid components
- `src/primitives`: lower-level `Grid` and `Card`
- `src/utils`: shared helpers
- `src/index.css`: package stylesheet source
- `tests`: component tests
- `dist`: generated package output

## Adding A New Component

1. Add the component under `src/components`.
2. Export the component and prop type from `src/index.ts`.
3. Add or update tests in `tests/components.test.tsx`.
4. Document the component in `README.md`.
5. Run `npm run check`.

## Release Checklist

Run these checks before publishing.

```bash
npm run check
npm view bento-style version dist-tags --json
git status --short --branch
```

Confirm the package version is higher than the current npm `latest` version.

```bash
npm version patch
```

Use `minor` or `major` instead of `patch` when the release includes new features or breaking changes.

## Publishing To npm

Make sure you are logged in.

```bash
npm whoami
```

If that fails, log in first.

```bash
npm login
```

Publish the package.

```bash
npm publish --access public
```

Verify the published version.

```bash
npm view bento-style version dist-tags --json
```

## Publishing To GitHub

Commit, tag, and push the release.

```bash
git add .
git commit -m "Release v2.0.0"
git tag v2.0.0
git push origin main
git push origin v2.0.0
```

Create a GitHub release from the pushed tag.

```bash
gh release create v2.0.0 --title "bento-style v2.0.0" --notes "Release v2.0.0 with six Bento layouts, CSS export, and developer documentation."
```

## Troubleshooting

- If styles are missing, confirm `import 'bento-style/style.css'` is present.
- If Tailwind utilities are missing, confirm `./node_modules/bento-style/dist/**/*.{js,mjs}` is in `content`.
- If `npm publish` fails with `401`, run `npm login`.
- If `npm publish` says the version already exists, bump `package.json` with `npm version patch`, `minor`, or `major`.
- If GitHub push fails, run `gh auth status` and confirm the account has repository write access.
