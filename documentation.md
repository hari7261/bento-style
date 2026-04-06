# bento-style Documentation

## Introduction

`bento-style` is a React component library providing production-ready Bento grid layouts and card primitives built on Tailwind CSS. It offers five pre-configured grid layouts (minimal, spotlight, glassmorphic, masonry, and hero) and low-level primitives for building custom Bento grids. All components are TypeScript-first, tree-shakeable, and designed for composition.

---

## Installation

```bash
npm install bento-style
```

### Peer Dependencies

This library requires:

```json
{
  "react": ">=18",
  "react-dom": ">=18",
  "tailwindcss": ">=3"
}
```

Install them if not already present:

```bash
npm install react react-dom tailwindcss
```

### Tailwind CSS Configuration

**Critical**: Add the library path to your `tailwind.config.js` content array to ensure styles are included in your build:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/bento-style/dist/**/*.{js,mjs}', // Required
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Without this configuration, component styles will not be generated, resulting in unstyled components.

### CSS Pipeline Setup

If using a custom build setup, ensure PostCSS is configured to process Tailwind directives. Most modern frameworks (Next.js, Vite, Create React App) handle this automatically.

**Example `postcss.config.js`:**

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## Quick Start

Minimal working example:

```tsx
import { BentoGridA, Card } from 'bento-style';

function App() {
  return (
    <div className="p-8">
      <BentoGridA>
        <Card header={<h3 className="font-bold">Feature 1</h3>}>
          <p>Clean, minimal card with header slot</p>
        </Card>
        <Card>
          <h3 className="font-bold">Feature 2</h3>
          <p>Card with inline content</p>
        </Card>
        <Card footer={<button className="text-blue-600">Learn More</button>}>
          <p>Card with footer action</p>
        </Card>
      </BentoGridA>
    </div>
  );
}
```

### Using className Overrides

All components accept `className` for Tailwind utility overrides:

```tsx
<BentoGridA className="gap-8 max-w-6xl mx-auto">
  <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0">
    <h3>Custom styled card</h3>
  </Card>
</BentoGridA>
```

### Best Practices for Layout Sizing

- Use container utilities (`max-w-*`, `mx-auto`) on the grid for responsive width control
- Avoid fixed heights on cards unless required (masonry/hero layouts handle this)
- Use `aspect-*` utilities for consistent card proportions
- Test on mobile viewports—all grids collapse to single column on small screens

---

## Components Overview

### BentoGridA — Minimal Clean Layout

**What it is:** A responsive 3-column grid with equal-sized cards. The default Bento layout.

**Behavior:**
- Responsive breakpoints: 1 column (mobile) → 2 columns (md) → 3 columns (lg)
- Auto-rows with equal sizing
- 1rem gap (customizable via `className`)

**Code Example:**

```tsx
import { BentoGridA, Card } from 'bento-style';

<BentoGridA>
  <Card header={<h3>Title</h3>}>
    <p>Content</p>
  </Card>
  <Card media={<img src="/image.jpg" alt="Media" />}>
    <p>Card with media slot</p>
  </Card>
  <Card footer={<button>Action</button>}>
    <p>Card with footer</p>
  </Card>
</BentoGridA>
```

**When to use:**
- Dashboard layouts with uniform cards
- Feature showcases where all items have equal visual weight
- Content grids (blogs, products, team members)

**When not to use:**
- Hierarchical layouts requiring visual emphasis (use BentoGridE instead)
- Dynamic content with varying heights (use BentoGridD masonry)

**Performance considerations:**
- Minimal CSS overhead (no animations, no GPU effects)
- Safe for large card counts (50+ cards)
- No layout reflow issues

**Known constraints:**
- Cards have equal visual weight (no spanning support)
- Child order determines placement (row-by-row left-to-right)

---

### BentoGridB — Spotlight Hover Effect

**What it is:** Interactive grid with spotlight hover effects. Cards scale and glow on interaction.

**Behavior:**
- Same responsive breakpoints as BentoGridA (1 → 2 → 3)
- Hover: 5% scale-up, shadow elevation, blue ring, gradient overlay
- Smooth 300ms transitions
- GPU-accelerated transforms

**Code Example:**

```tsx
import { BentoGridB } from 'bento-style';

<BentoGridB>
  <div className="p-6">
    <h3 className="text-xl font-bold">Interactive Card</h3>
    <p>Hover to see spotlight effect</p>
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold">Another Card</h3>
    <p>Dynamic gradient reveals on hover</p>
  </div>
</BentoGridB>
```

**When to use:**
- Marketing pages where interactivity signals clickability
- Feature grids for SaaS products
- Engaging CTAs or navigation elements

**When not to use:**
- Dense information displays (spotlight draws excessive attention)
- Accessibility-first designs (hover-only interactions exclude non-pointer users)
- High card counts (simultaneous animations degrade performance)

**Performance considerations:**
- **GPU cost:** Transform and shadow animations trigger compositing. Expect minor jank on low-end devices with 20+ cards.
- **Mitigation:** Reduce card count or disable effects on mobile via `hover:` prefix removal.
- Gradient overlays use opacity transitions (low cost).

**Known constraints:**
- Wraps children in styled divs—cannot use with components expecting specific DOM structure.
- Hover-only interaction pattern (no keyboard/focus equivalent by default).

---

### BentoGridC — Glassmorphic Layout

**What it is:** Modern glass-effect cards with backdrop blur and translucent backgrounds.

**Behavior:**
- Same responsive breakpoints (1 → 2 → 3)
- Backdrop blur (`backdrop-blur-md`) applied to all cards
- Semi-transparent white background (`bg-white/40`)
- Hover increases opacity and shadow depth

**Code Example:**

```tsx
import { BentoGridC } from 'bento-style';

<div className="relative bg-gradient-to-br from-purple-500 to-pink-500 p-8">
  <BentoGridC>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900">Glass Card 1</h3>
      <p className="text-gray-700">Frosted glass aesthetic</p>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900">Glass Card 2</h3>
      <p className="text-gray-700">Works best on colored backgrounds</p>
    </div>
  </BentoGridC>
</div>
```

**When to use:**
- Contemporary marketing pages with vibrant backgrounds
- Overlaying content on images/videos
- Modern SaaS landing pages

**When not to use:**
- Accessibility-critical applications (low contrast risk on certain backgrounds)
- High-density text content (blur reduces readability)
- Safari < 15.4 or Firefox < 103 (backdrop-filter support limited)

**Performance considerations:**
- **Backdrop blur cost:** High GPU load on low-end devices. Each blurred element creates a new stacking context and applies expensive filter effects.
- **Mitigation:** Limit card count (< 12 recommended) or conditionally disable blur on mobile:
  ```tsx
  <BentoGridC className="[&>*]:md:backdrop-blur-md [&>*]:backdrop-blur-none">
  ```
- Test on target devices—blur can cause 30-60 FPS drops on older hardware.

**Known constraints:**
- Requires a non-white background behind the grid for visual effect (glass is transparent).
- Text must have sufficient contrast against background.

---

### BentoGridD — Masonry Layout

**What it is:** CSS column-based masonry layout. Cards flow vertically, filling columns based on content height (Pinterest-style).

**Behavior:**
- Uses CSS `columns` property (1 → 2 → 3)
- Cards flow top-to-bottom within columns
- Supports variable-height content naturally
- `break-inside-avoid` prevents cards from splitting across columns

**Code Example:**

```tsx
import { BentoGridD } from 'bento-style';

<BentoGridD>
  <div className="p-6 h-48">
    <h3 className="text-xl font-bold">Short Card</h3>
    <p>Minimal content</p>
  </div>
  <div className="p-6 h-64">
    <h3 className="text-xl font-bold">Medium Card</h3>
    <p>More content here with additional text</p>
  </div>
  <div className="p-6 h-96">
    <h3 className="text-xl font-bold">Tall Card</h3>
    <p>Extensive content requiring vertical space</p>
    <ul>
      <li>Feature 1</li>
      <li>Feature 2</li>
    </ul>
  </div>
</BentoGridD>
```

**When to use:**
- Mixed-content grids (blog posts, image galleries, product listings)
- Dynamic content where heights vary unpredictably
- Pinterest-style visual layouts

**When not to use:**
- Strict ordering requirements (masonry fills vertically, not horizontally)
- Uniform-height content (use BentoGridA for better control)
- Drag-and-drop reordering (column layout complicates DOM manipulation)

**Performance considerations:**
- **Masonry layout reflow:** CSS columns recalculate on every resize. Avoid nesting masonry grids.
- Adding/removing cards triggers full column rebalancing (can cause jank with 30+ cards).
- Images without `width`/`height` attributes cause layout thrashing.

**Known constraints:**
- **Child order dependency:** Cards fill column 1 top-to-bottom, then column 2, etc. Visual order ≠ DOM order.
- **Horizontal gaps inconsistent:** Cards within a column have vertical spacing, but cross-column alignment is unpredictable.
- **No row-based spanning:** Cannot make a card span multiple columns.

---

### BentoGridE — Hero Layout

**What it is:** Asymmetric grid with a large 2x2 hero area (first child) and standard 1x1 supporting cards.

**Behavior:**
- Responsive: 1 column (mobile) → 4-column grid (md+)
- First child spans 2 columns × 2 rows
- Subsequent children are 1×1
- Auto-rows of 200px height (customizable)

**Code Example:**

```tsx
import { BentoGridE } from 'bento-style';

<BentoGridE>
  {/* First child = hero (2x2) */}
  <div className="p-8 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
    <div>
      <h1 className="text-4xl font-bold mb-4">Hero Title</h1>
      <p className="text-lg">Primary call-to-action content</p>
    </div>
  </div>

  {/* Remaining children = 1x1 cards */}
  <div className="p-4">
    <h3 className="font-bold">Feature 1</h3>
    <p>Supporting content</p>
  </div>
  <div className="p-4">
    <h3 className="font-bold">Feature 2</h3>
    <p>Supporting content</p>
  </div>
  <div className="p-4">
    <h3 className="font-bold">Feature 3</h3>
    <p>Supporting content</p>
  </div>
</BentoGridE>
```

**When to use:**
- Landing pages with a primary focus area + supporting features
- Marketing hero sections
- Dashboards with a main chart/metric + smaller widgets

**When not to use:**
- Multiple hero areas (only first child gets 2×2 treatment)
- Equal-weight content (use BentoGridA instead)

**Performance considerations:**
- Fixed 200px row height may cause content overflow if not managed.
- No performance concerns beyond standard grid layout.

**Known constraints:**
- **Child-order dependency:** First child **must** be the hero. Swapping order changes layout.
- **Auto layout restrictions:** Hero is always 2×2, no configuration to change hero size or position.
- On mobile (< md breakpoint), hero loses special sizing (all cards stack vertically).

---

## Primitives

### Grid — Layout-Only Primitive

Headless grid component providing only layout logic. No styling applied.

**Props:**

| Prop        | Type                                         | Default | Description                                    |
|-------------|----------------------------------------------|---------|------------------------------------------------|
| `cols`      | `number \| { sm?, md?, lg? }`                | `3`     | Column count or responsive object              |
| `gap`       | `number \| string`                           | `4`     | Gap size (number = 0.25rem units, string = CSS value) |
| `className` | `string`                                     | —       | Tailwind utilities                             |
| `children`  | `React.ReactNode`                            | —       | Grid items                                     |

**Example:**

```tsx
import { Grid } from 'bento-style';

// Simple fixed grid
<Grid cols={4} gap={6}>
  <div className="bg-gray-100 p-4">Item 1</div>
  <div className="bg-gray-100 p-4">Item 2</div>
  <div className="bg-gray-100 p-4">Item 3</div>
  <div className="bg-gray-100 p-4">Item 4</div>
</Grid>

// Responsive grid
<Grid cols={{ sm: 1, md: 2, lg: 4 }} gap={8}>
  <div>Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols</div>
</Grid>
```

### When to Use Grid Instead of Styled Grids

- You need full control over card styling (no default borders/shadows).
- Building a custom Bento variant not covered by A-E.
- Integrating with existing design system components.

### Extending Grid to Create New Bento Layouts

```tsx
import { Grid } from 'bento-style';

function MyCustomBento({ children, ...props }) {
  return (
    <Grid
      cols={{ sm: 1, md: 3, lg: 5 }}
      gap={6}
      className="bg-gray-50 p-6 rounded-2xl"
      {...props}
    >
      {children}
    </Grid>
  );
}
```

---

### Card — Slot-Based Primitive

Structured card component with predefined slots: `header`, `media`, `children` (content), `footer`.

**Props:**

| Prop        | Type               | Description                                  |
|-------------|--------------------|----------------------------------------------|
| `header`    | `React.ReactNode`  | Content rendered in header slot with border  |
| `media`     | `React.ReactNode`  | Media content (images/video) without padding |
| `children`  | `React.ReactNode`  | Main content area with padding               |
| `footer`    | `React.ReactNode`  | Footer slot for actions/metadata             |
| `className` | `string`           | Override default styles                      |

**Example:**

```tsx
import { Card } from 'bento-style';

<Card
  header={
    <div className="flex items-center justify-between">
      <h3 className="font-bold">Profile</h3>
      <span className="text-sm text-gray-500">Active</span>
    </div>
  }
  media={
    <img
      src="/avatar.jpg"
      alt="User avatar"
      className="w-full h-48 object-cover"
    />
  }
  footer={
    <div className="flex gap-2">
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Edit</button>
      <button className="px-4 py-2 border border-gray-300 rounded">Delete</button>
    </div>
  }
>
  <p className="text-gray-600">User bio and additional information</p>
</Card>
```

### Slot Usage Patterns

All slots are optional. Use only what you need:

```tsx
// Content only
<Card>
  <p>Simple card with just content</p>
</Card>

// Header + content
<Card header={<h3>Title</h3>}>
  <p>Content</p>
</Card>

// Media + footer
<Card
  media={<img src="/image.jpg" />}
  footer={<button>View</button>}
/>
```

### Tailwind Override Conventions

The `className` prop uses `cn()` (clsx + tailwind-merge), allowing later classes to override earlier ones:

```tsx
// Default: white bg, gray border
<Card />

// Override background, keep border
<Card className="bg-gradient-to-br from-purple-500 to-pink-500" />

// Remove border completely
<Card className="border-0" />

// Override padding in content area
<Card className="[&>div:nth-child(2)]:p-8">
  <p>Content with custom padding</p>
</Card>
```

---

## Customization

### 6.1 Styling Using `className`

All components expose a `className` prop merged via `cn()` (clsx + tailwind-merge):

```tsx
import { BentoGridA, Card } from 'bento-style';

<BentoGridA className="gap-8 max-w-7xl mx-auto py-12">
  <Card className="bg-blue-50 border-blue-200 hover:shadow-xl transition-shadow">
    <h3>Custom styled card</h3>
  </Card>
</BentoGridA>
```

**How `cn()` + `tailwind-merge` works:**
- Combines multiple class strings using `clsx`
- Resolves conflicts using `tailwind-merge` (later classes override earlier ones)

Example:

```tsx
import { cn } from 'bento-style';

// Result: "bg-blue-500" (red is overridden)
cn('bg-red-500', 'bg-blue-500');

// Result: "p-4 bg-blue-500" (padding kept, bg overridden)
cn('p-4 bg-red-500', 'bg-blue-500');
```

### Examples of Overridden Grid Behavior

```tsx
// Change grid columns
<BentoGridA className="md:grid-cols-4 lg:grid-cols-5">
  {/* Now displays 4 cols on tablet, 5 on desktop */}
</BentoGridA>

// Increase gap
<BentoGridA className="gap-12">
  {/* 3rem gap instead of default 1rem */}
</BentoGridA>

// Add max-width container
<BentoGridA className="max-w-6xl mx-auto px-4">
  {/* Centered grid with padding */}
</BentoGridA>
```

---

### 6.2 Inline Style Overrides

For dynamic values not representable in Tailwind utilities:

**Custom `gridTemplateColumns`:**

```tsx
<Grid
  style={{ gridTemplateColumns: '200px 1fr 1fr 200px' }}
  className="gap-4"
>
  <div>Sidebar</div>
  <div>Content</div>
  <div>Content</div>
  <div>Sidebar</div>
</Grid>
```

**Custom row spans:**

```tsx
<div className="grid grid-cols-3 gap-4">
  <div className="col-span-2 row-span-2">
    Large item
  </div>
  <div>Small item</div>
  <div>Small item</div>
  <div>Small item</div>
</div>
```

**Dynamic gap values:**

```tsx
<Grid gap="2.5rem">
  {/* Custom gap not in Tailwind scale */}
</Grid>
```

---

### 6.3 Creating Custom Bento Layouts

**Composing primitives:**

```tsx
import { Grid, Card } from 'bento-style';

function CustomBentoF({ children }) {
  return (
    <Grid
      cols={{ sm: 1, md: 2, lg: 6 }}
      gap={4}
      className="auto-rows-[180px]"
    >
      {React.Children.map(children, (child, idx) => {
        // First child: 3x2, second: 2x2, rest: 1x1
        const span = idx === 0
          ? 'md:col-span-3 md:row-span-2'
          : idx === 1
          ? 'md:col-span-2 md:row-span-2'
          : 'md:col-span-1';

        return (
          <Card className={span}>
            {child}
          </Card>
        );
      })}
    </Grid>
  );
}
```

**Recommended file architecture for custom layouts:**

```
src/
├── components/
│   ├── bento/
│   │   ├── CustomBentoF.tsx
│   │   ├── CustomBentoG.tsx
│   │   └── index.ts
│   └── ...
```

Export custom layouts from a central file for reusability:

```tsx
// src/components/bento/index.ts
export { CustomBentoF } from './CustomBentoF';
export { CustomBentoG } from './CustomBentoG';
```

---

## Accessibility

### Keyboard Interactions

- **Grid components:** No inherent keyboard interactions (rely on child focusability).
- **Card component:** Not focusable by default. Add `tabIndex={0}` if card itself should receive focus:
  ```tsx
  <Card tabIndex={0} className="focus:ring-2 focus:ring-blue-500">
    <p>Focusable card</p>
  </Card>
  ```

### Focus States

Always add visible focus states for interactive elements:

```tsx
<Card className="focus-within:ring-2 focus-within:ring-blue-500">
  <button className="focus:outline-none focus:ring-2 focus:ring-blue-600">
    Interactive element
  </button>
</Card>
```

### Hover-Based Components + Accessibility Warnings

**BentoGridB (Spotlight) and BentoGridC (Glassmorphic)** use hover effects that are inaccessible to:
- Keyboard-only users
- Screen reader users
- Touch device users (no persistent hover state)

**Mitigation strategies:**

1. **Add focus states matching hover states:**

```tsx
<BentoGridB>
  <div className="focus-within:shadow-2xl focus-within:scale-105">
    <a href="/feature" className="block p-6 focus:outline-none">
      Content
    </a>
  </div>
</BentoGridB>
```

2. **Ensure interactivity is not hover-dependent:**
   - If hover reveals critical content, ensure it's visible by default or via focus.
   - Use `aria-label` for context if hover changes meaning.

3. **Test with keyboard:**
   - Tab through all interactive elements.
   - Verify focus indicators are visible.
   - Ensure all actions are achievable without a mouse.

### Alternative Non-Hover Behavior

For critical interactive elements, use click/focus instead of hover:

```tsx
function AccessibleCard() {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <Card
      className={cn(
        'transition-all',
        isActive && 'shadow-2xl scale-105'
      )}
      onClick={() => setIsActive(!isActive)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      tabIndex={0}
    >
      <p>Click or focus to activate</p>
    </Card>
  );
}
```

---

## Performance Notes

### Spotlight Effect GPU Advice

**BentoGridB** uses `transform: scale()` and `box-shadow` on hover. Each card creates a new compositing layer when hovered.

- **Recommended card limit:** 20-30 cards maximum.
- **On low-end devices:** Disable animations via media query:
  ```tsx
  <BentoGridB className="motion-reduce:hover:scale-100">
  ```
- **Profiling:** Use Chrome DevTools > Performance > Enable "Paint flashing" to visualize repaints.

### Backdrop Blur Cost

**BentoGridC** applies `backdrop-filter: blur()` to every card.

- **GPU overhead:** Each blurred element requires a full-screen texture copy.
- **Recommended card limit:** 8-12 cards maximum.
- **Disable on mobile:**
  ```tsx
  <BentoGridC className="[&>*]:backdrop-blur-none md:[&>*]:backdrop-blur-md">
  ```
- **Alternative:** Use semi-transparent backgrounds without blur:
  ```tsx
  <BentoGridC className="[&>*]:backdrop-blur-none [&>*]:bg-white/80">
  ```

### Masonry Layout Reflow Notes

**BentoGridD** recalculates column layout on:
- Window resize
- Card addition/removal
- Image loading (if dimensions not specified)

**Mitigation:**
- Always specify `width` and `height` on `<img>` tags to prevent layout shift.
- Debounce resize events if dynamically adding cards.
- Avoid nesting masonry grids (exponential reflow cost).

### Avoiding CLS (Cumulative Layout Shift)

1. **Specify image dimensions:**
   ```tsx
   <img src="/image.jpg" width={400} height={300} alt="..." />
   ```

2. **Use aspect-ratio for responsive images:**
   ```tsx
   <div className="aspect-video">
     <img src="/image.jpg" className="w-full h-full object-cover" />
   </div>
   ```

3. **Set min-height on cards with async content:**
   ```tsx
   <Card className="min-h-[200px]">
     {/* Content loads here */}
   </Card>
   ```

4. **Avoid auto-sizing fonts:** Use fixed `text-*` utilities, not viewport-based units.

### Recommendations for Heavy Card Content

- **Lazy load images:** Use `loading="lazy"` on images below the fold.
- **Virtualize large lists:** For 50+ cards, use `react-window` or `react-virtual`:
  ```tsx
  import { FixedSizeGrid } from 'react-window';

  <FixedSizeGrid
    columnCount={3}
    columnWidth={300}
    height={600}
    rowCount={Math.ceil(items.length / 3)}
    rowHeight={200}
    width={1000}
  >
    {({ columnIndex, rowIndex, style }) => (
      <div style={style}>
        <Card>{items[rowIndex * 3 + columnIndex]}</Card>
      </div>
    )}
  </FixedSizeGrid>
  ```

- **Code-split heavy components:** Dynamic import cards with large dependencies:
  ```tsx
  const HeavyCard = React.lazy(() => import('./HeavyCard'));

  <React.Suspense fallback={<div className="h-48 bg-gray-100 animate-pulse" />}>
    <HeavyCard />
  </React.Suspense>
  ```

---

## Versioning & Semver

### How Breaking Layout Changes Are Handled

This library follows semantic versioning (semver):

- **Major version (X.0.0):** Breaking layout changes (e.g., changing default column counts, removing components, altering card DOM structure).
- **Minor version (0.X.0):** New components, new props, backward-compatible features.
- **Patch version (0.0.X):** Bug fixes, performance improvements, documentation updates.

**Examples of breaking changes:**
- Changing BentoGridA from 3 columns to 4 columns by default.
- Removing a slot from Card component (e.g., removing `media` prop).
- Changing default gap from `1rem` to `0.5rem`.

**Examples of non-breaking changes:**
- Adding a new BentoGridF component.
- Adding an optional `variant` prop to Card.
- Improving hover animation performance in BentoGridB.

### Strategy for Maintaining Layout Stability

1. **Default styles are locked per major version.** If you rely on default column counts or gaps, they will not change in minor/patch releases.

2. **Always use explicit overrides for production layouts:**
   ```tsx
   // Bad (relies on defaults)
   <BentoGridA>

   // Good (explicit configuration)
   <BentoGridA className="md:grid-cols-3 lg:grid-cols-4 gap-6">
   ```

3. **Test upgrades in staging:** Run visual regression tests after upgrading to catch unintended layout shifts.

4. **Pin major versions in production:**
   ```json
   {
     "dependencies": {
       "bento-style": "^1.0.0" // Allows 1.x.x, blocks 2.0.0
     }
   }
   ```

---

## Contributing

### Running Package Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hari7261/bento-style.git
   cd bento-style
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development build:**
   ```bash
   npm run dev
   ```
   This watches for file changes and rebuilds the library automatically.

4. **Link locally for testing in another project:**
   ```bash
   npm link

   # In your test project
   npm link bento-style
   ```

### Building the Library

Run the build script to generate production-ready bundles:

```bash
npm run build
```

Output in `dist/`:
- `index.js` — CommonJS build
- `index.mjs` — ESM build
- `index.d.ts` — TypeScript definitions

### Folder Structure

```
bento-style/
├── src/
│   ├── components/       # Pre-built Bento grids (A-E)
│   │   ├── BentoGridA.tsx
│   │   ├── BentoGridB.tsx
│   │   ├── BentoGridC.tsx
│   │   ├── BentoGridD.tsx
│   │   └── BentoGridE.tsx
│   ├── primitives/       # Headless Grid and Card components
│   │   ├── Grid.tsx
│   │   └── Card.tsx
│   ├── utils/            # Utility functions (cn)
│   │   └── cn.ts
│   └── index.ts          # Main export file
├── dist/                 # Build output (generated)
├── package.json
├── tsconfig.json
├── tsup.config.ts        # Build configuration
└── tailwind.config.js    # Tailwind config for library
```

### Coding Style Expectations

- **TypeScript:** All components must be fully typed. Use `React.forwardRef` for DOM components.
- **Tailwind utilities only:** No custom CSS files. Use `className` for all styling.
- **Functional components:** Use function components with hooks, not class components.
- **Prop naming:** Follow React conventions (`className`, `children`, `onClick`, etc.).
- **Export types:** Always export prop interfaces (e.g., `export type GridProps`).
- **Comments:** Use TSDoc comments for exported components:
  ```tsx
  /**
   * BentoGridA - Minimal Clean Bento Layout
   *
   * @example
   * ```tsx
   * <BentoGridA>
   *   <Card>Content</Card>
   * </BentoGridA>
   * ```
   */
  ```

**Linting:** Follow the existing ESLint configuration (if added in future versions).

---

## License

MIT © bento-style

---

## Support

For issues, questions, or feature requests, please open an issue on GitHub:
https://github.com/hari7261/bento-style/issues
