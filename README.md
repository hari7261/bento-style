# bento-style

Production-ready Bento Grid React component library with Tailwind CSS.

[![npm version](https://img.shields.io/npm/v/bento-style.svg)](https://www.npmjs.com/package/bento-style)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`bento-style` gives React teams a set of polished Bento layout components plus low-level `Grid` and `Card` primitives. It is TypeScript-first, tree-shakeable, and designed for Tailwind CSS projects.

## Features

- 6 production-ready Bento layouts: `BentoGridA` through `BentoGridF`
- Typed React components and exported prop types
- Composable `Grid` and `Card` primitives
- Tailwind-friendly class names with override-friendly `className` props
- Compiled CSS export for reusable `.bento-card`, `.bento-tag`, and helper styles
- Package checks for type safety, tests, build output, and npm publish quality

## Installation

```bash
npm install bento-style
```

Install the peer dependencies if your app does not already have them:

```bash
npm install react react-dom tailwindcss
```

## Required CSS

Import the package stylesheet once in your app entry file.

```tsx
import 'bento-style/style.css';
```

For example, in Next.js App Router, add it to `app/layout.tsx`. In Vite, add it to `src/main.tsx`.

## Tailwind CSS Setup

Add the package output to your Tailwind content list so Tailwind sees the utility classes used by the components.

```js
/** @type {import('tailwindcss').Config} */
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

## Quick Start

```tsx
import 'bento-style/style.css';
import { BentoGridA, Card } from 'bento-style';

export function App() {
  return (
    <main className="min-h-screen bg-black p-6">
      <BentoGridA className="mx-auto max-w-6xl" />

      <section className="mx-auto mt-8 max-w-6xl">
        <Card variant="bento" header={<h2 className="text-xl font-bold">Custom card</h2>}>
          <p className="text-gray-400">Compose primitives with your own content.</p>
        </Card>
      </section>
    </main>
  );
}
```

## Components

```tsx
import {
  BentoGridA,
  BentoGridB,
  BentoGridC,
  BentoGridD,
  BentoGridE,
  BentoGridF,
  Grid,
  Card,
} from 'bento-style';
```

- `BentoGridA`: course/product hero layout
- `BentoGridB`: dashboard/product feature layout
- `BentoGridC`: finance/SaaS layout
- `BentoGridD`: portfolio profile layout
- `BentoGridE`: services and works gallery layout
- `BentoGridF`: developer expertise layout
- `Grid`: responsive grid primitive
- `Card`: flexible card primitive with `default`, `bordered`, `elevated`, `ghost`, `glass`, and `bento` variants

## Primitive Examples

```tsx
import { Grid, Card } from 'bento-style';

export function CustomBento() {
  return (
    <Grid cols={{ sm: 1, md: 2, lg: 4 }} gap={6} className="p-6">
      <Card variant="bento" className="lg:col-span-2">
        <h3 className="text-2xl font-bold">Wide feature</h3>
        <p className="text-gray-400">Use spans and Tailwind utilities freely.</p>
      </Card>

      <Card variant="glass" hover>
        <h3 className="font-bold">Interactive card</h3>
      </Card>
    </Grid>
  );
}
```

## TypeScript

```tsx
import type {
  BentoGridAProps,
  BentoGridFProps,
  CardProps,
  GridProps,
} from 'bento-style';
```

The package also exports `cn` and `ClassValue` for teams that want the same Tailwind class merge behavior.

## Developer Guide

For local development, testing, publishing, GitHub release steps, and integration notes, see [DEVELOPER_GUIDE.md](DEVELOPER_GUIDE.md).

## Scripts

```bash
npm run typecheck
npm run test
npm run build
npm run lint:package
npm run pack:check
npm run check
```

`npm run check` is the full release gate and should pass before every npm or GitHub release.

## Browser Support

- Chrome latest
- Firefox latest
- Safari latest
- Edge latest

## License

MIT. See [LICENSE](LICENSE).

## Support

Open issues at https://github.com/hari7261/bento-style/issues.
