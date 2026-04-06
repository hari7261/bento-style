# bento-style

Production-ready Bento Grid React component library with Tailwind CSS.

[![npm version](https://img.shields.io/npm/v/bento-style.svg)](https://www.npmjs.com/package/bento-style)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, TypeScript-first component library providing beautiful Bento Grid layouts for React applications. Tree-shakeable, fully typed, and designed to work seamlessly with Tailwind CSS.

## Features

✨ **5 Production-Ready Bento Grids** – Minimal, Spotlight, Glassmorphic, Masonry, and Hero layouts
🎨 **Tailwind-Friendly** – Built with Tailwind CSS utilities
📦 **Tree-Shakeable** – Import only what you need
🔷 **TypeScript** – Fully typed with TypeScript
🧩 **Composable Primitives** – Grid and Card components for custom layouts
⚡ **Zero Config** – Works out of the box
🎯 **Override-Friendly** – Easy to customize with className prop

## Installation

```bash
npm install bento-style
```

```bash
yarn add bento-style
```

```bash
pnpm add bento-style
```

### Peer Dependencies

This library requires the following peer dependencies:

```bash
npm install react react-dom tailwindcss
```

## Tailwind CSS Setup

Add the library path to your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/bento-style/dist/**/*.{js,mjs}', // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Quick Start

```tsx
import { BentoGridA, Card } from 'bento-style';

function App() {
  return (
    <BentoGridA>
      <Card>
        <h3>Feature 1</h3>
        <p>Description goes here</p>
      </Card>
      <Card>
        <h3>Feature 2</h3>
        <p>Description goes here</p>
      </Card>
      <Card>
        <h3>Feature 3</h3>
        <p>Description goes here</p>
      </Card>
    </BentoGridA>
  );
}
```

## Components

### BentoGridA - Minimal Clean Layout

A clean, minimal 3-column responsive grid with equal-sized cards.

```tsx
import { BentoGridA, Card } from 'bento-style';

<BentoGridA>
  <Card header={<h3>Title</h3>}>
    <p>Content goes here</p>
  </Card>
  <Card>
    <h3>Feature 2</h3>
    <p>Another card</p>
  </Card>
  <Card footer={<button>Action</button>}>
    <p>Card with footer</p>
  </Card>
</BentoGridA>
```

### BentoGridB - Spotlight Hover Effect

Dynamic grid with spotlight hover effects that highlight cards on interaction.

```tsx
import { BentoGridB } from 'bento-style';

<BentoGridB>
  <div className="p-6">
    <h3 className="text-xl font-bold">Interactive Card 1</h3>
    <p>Hover to see the spotlight effect</p>
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold">Interactive Card 2</h3>
    <p>Beautiful hover animations</p>
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold">Interactive Card 3</h3>
    <p>Engaging user experience</p>
  </div>
</BentoGridB>
```

### BentoGridC - Glassmorphic Layout

Modern glassmorphic design with frosted glass effect and backdrop blur.

```tsx
import { BentoGridC } from 'bento-style';

<BentoGridC>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-900">Glass Card 1</h3>
    <p className="text-gray-600">Beautiful glassmorphic design</p>
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-900">Glass Card 2</h3>
    <p className="text-gray-600">Frosted glass effect</p>
  </div>
</BentoGridC>
```

### BentoGridD - Masonry-Style Layout

Pinterest-style masonry layout with asymmetric card sizes.

```tsx
import { BentoGridD } from 'bento-style';

<BentoGridD>
  <div className="p-6 h-48">
    <h3 className="text-xl font-bold">Short Card</h3>
    <p>Compact content</p>
  </div>
  <div className="p-6 h-64">
    <h3 className="text-xl font-bold">Medium Card</h3>
    <p>More content here</p>
  </div>
  <div className="p-6 h-96">
    <h3 className="text-xl font-bold">Tall Card</h3>
    <p>Even more content for variety</p>
  </div>
</BentoGridD>
```

### BentoGridE - Hero-Style Layout

Asymmetric grid with a large hero area (2x2) and smaller supporting cards.

```tsx
import { BentoGridE } from 'bento-style';

<BentoGridE>
  <div className="p-8 flex items-center justify-center">
    <h1 className="text-4xl font-bold">Hero Content</h1>
  </div>
  <div className="p-4">
    <h3>Feature 1</h3>
    <p>Supporting content</p>
  </div>
  <div className="p-4">
    <h3>Feature 2</h3>
    <p>Supporting content</p>
  </div>
  <div className="p-4">
    <h3>Feature 3</h3>
    <p>Supporting content</p>
  </div>
  <div className="p-4">
    <h3>Feature 4</h3>
    <p>Supporting content</p>
  </div>
</BentoGridE>
```

## Primitives

### Grid Component

Headless grid component with layout logic only.

```tsx
import { Grid } from 'bento-style';

// Simple grid
<Grid cols={3} gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>

// Responsive grid
<Grid cols={{ sm: 1, md: 2, lg: 4 }} gap={6}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Grid>
```

**Props:**
- `cols` - Number of columns or responsive object `{ sm?, md?, lg? }`
- `gap` - Gap size (number in rem units or string)
- `className` - Additional CSS classes
- All standard HTML div props

### Card Component

Flexible card component with slots for header, media, content, and footer.

```tsx
import { Card } from 'bento-style';

<Card
  header={<h3 className="font-bold">Card Title</h3>}
  media={<img src="image.jpg" alt="Card" />}
  footer={<button>Learn More</button>}
>
  <p>Card content goes here</p>
</Card>
```

**Props:**
- `header` - Content for the header slot
- `media` - Content for the media slot (e.g., images)
- `children` - Main content area
- `footer` - Content for the footer slot
- `className` - Additional CSS classes
- All standard HTML div props

## Customization

### Overriding Styles

All components accept a `className` prop for easy customization:

```tsx
<BentoGridA className="gap-8 max-w-6xl mx-auto">
  <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0">
    <h3>Custom Styled Card</h3>
  </Card>
</BentoGridA>
```

### Custom Grid Layouts

Use the `Grid` primitive to create your own layouts:

```tsx
import { Grid, Card } from 'bento-style';

<Grid cols={{ sm: 1, md: 2, lg: 4 }} gap={6} className="my-8">
  <Card className="md:col-span-2">
    <h3>Wide Card</h3>
  </Card>
  <Card>
    <h3>Regular Card</h3>
  </Card>
  <Card>
    <h3>Regular Card</h3>
  </Card>
</Grid>
```

### Extending Components

Create your own variants by composing primitives:

```tsx
import { Grid, Card } from 'bento-style';

function MyCustomBento({ children }) {
  return (
    <Grid cols={3} gap={4} className="p-4 bg-gray-50 rounded-xl">
      {React.Children.map(children, (child) => (
        <Card className="hover:scale-105 transition-transform">
          {child}
        </Card>
      ))}
    </Grid>
  );
}
```

## TypeScript Support

Full TypeScript support with exported types:

```tsx
import type { GridProps, CardProps, BentoGridAProps } from 'bento-style';

const MyGrid: React.FC<GridProps> = (props) => {
  return <Grid {...props} />;
};
```

## API Reference

### Utility Functions

#### `cn(...inputs: ClassValue[])`

Utility function for merging Tailwind CSS classes using `clsx` and `tailwind-merge`.

```tsx
import { cn } from 'bento-style';

<div className={cn('base-class', someCondition && 'conditional-class', className)} />
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT © [bento-style](LICENSE)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/hari7261/bento-style/issues).
