# bento-style Troubleshooting Guide

This guide covers 50 real-world issues you may encounter when using bento-style, with detailed explanations and solutions.

---

## Installation & Setup Issues

### 1. Components Render Without Styles

**Problem:** Components render but have no styling—cards appear as plain divs without borders, backgrounds, or layout.

**Cause:** Tailwind CSS is not processing the library's classes. The library path is missing from `tailwind.config.js` content array, so Tailwind purges all bento-style classes during build.

**Fix:** Add the library path to your Tailwind configuration:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/bento-style/dist/**/*.{js,mjs}', // Add this line
  ],
  // ...
};
```

Restart your development server after changing Tailwind config.

---

### 2. TypeScript Module Not Found Error

**Problem:** Import statement shows TypeScript error: `Cannot find module 'bento-style' or its corresponding type declarations`.

**Cause:** The package is installed but TypeScript cannot resolve the module. This occurs when `node_modules` is not in the TypeScript search path or the package's `types` field is missing.

**Fix:** Ensure the package is installed and restart your TypeScript server:

```bash
npm install bento-style
# If using VS Code, restart TS server: Cmd+Shift+P > "TypeScript: Restart TS Server"
```

If the issue persists, check `tsconfig.json` includes `node_modules`:

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "baseUrl": ".",
    "paths": {}
  }
}
```

---

### 3. Peer Dependency Warnings on Install

**Problem:** npm displays peer dependency warnings during installation:

```
npm WARN bento-style@1.0.0 requires a peer of react@>=18 but none is installed.
```

**Cause:** React, React DOM, or Tailwind CSS are not installed in your project. bento-style requires these as peer dependencies.

**Fix:** Install the missing peer dependencies:

```bash
npm install react@^18 react-dom@^18 tailwindcss@^3
```

These warnings do not prevent the package from working if the dependencies are already present in your project.

---

### 4. Build Fails with "Cannot Resolve tailwind-merge"

**Problem:** Build fails with error: `Module not found: Can't resolve 'tailwind-merge'`.

**Cause:** The package's dependencies are not installed. This occurs if you manually copied files instead of installing via npm, or if `node_modules` was corrupted.

**Fix:** Reinstall the package and its dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
```

Alternatively, explicitly install the missing dependency:

```bash
npm install tailwind-merge clsx
```

---

### 5. Styles Disappear After Production Build

**Problem:** Components work in development but lose all styles in production build.

**Cause:** Tailwind's JIT mode is purging bento-style classes. Your production build tool (Vite, Next.js, etc.) is not including the library path in content scanning.

**Fix:** Verify the library path is in `tailwind.config.js` and restart your build:

```js
content: [
  './src/**/*.{js,ts,jsx,tsx}',
  './node_modules/bento-style/dist/**/*.{js,mjs}',
],
```

For Next.js, ensure this is in the root `tailwind.config.js`, not in a subdirectory.

---

## Component Behavior Issues

### 6. BentoGridA Cards Not Responsive

**Problem:** Cards remain in 3 columns on mobile instead of collapsing to 1 column.

**Cause:** Custom `className` with explicit column counts overrides the responsive defaults. The responsive classes (`sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) are overridden by a more specific class.

**Fix:** Remove conflicting column classes or use responsive overrides:

```tsx
// Bad - overrides responsiveness
<BentoGridA className="grid-cols-3">

// Good - maintains responsiveness
<BentoGridA className="lg:grid-cols-4">

// Good - custom responsive breakpoints
<BentoGridA className="grid-cols-1 md:grid-cols-2 xl:grid-cols-5">
```

---

### 7. BentoGridB Spotlight Effect Not Working

**Problem:** Hover over BentoGridB cards does not trigger the spotlight gradient or scale effect.

**Cause:** The `:hover` pseudo-class is disabled by Tailwind's `hover:` variant not being enabled, or the parent container has `pointer-events: none`.

**Fix:**

1. Check if a parent element disables pointer events:
   ```tsx
   // Bad
   <div className="pointer-events-none">
     <BentoGridB>...</BentoGridB>
   </div>

   // Good
   <div>
     <BentoGridB>...</BentoGridB>
   </div>
   ```

2. Ensure Tailwind hover variant is enabled (default in Tailwind 3+).

3. Test in a different browser—Safari < 15 has issues with gradient transitions.

---

### 8. BentoGridC Background Not Blurred

**Problem:** Glassmorphic cards do not show backdrop blur effect—cards are translucent but without the frosted glass look.

**Cause:** The browser does not support `backdrop-filter` (Firefox < 103, Safari < 15.4) or the card does not have content behind it to blur.

**Fix:**

1. Place BentoGridC on top of a colored or image background:
   ```tsx
   <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-8">
     <BentoGridC>
       {/* Cards now blur the gradient behind them */}
     </BentoGridC>
   </div>
   ```

2. Add a fallback for unsupported browsers:
   ```tsx
   <BentoGridC className="[&>*]:bg-white/80 [&>*]:backdrop-blur-md [&>*]:supports-[backdrop-filter]:bg-white/40">
   ```

---

### 9. BentoGridD Masonry Layout Has Gaps

**Problem:** Masonry grid has inconsistent horizontal gaps—some cards align, others do not.

**Cause:** CSS columns distribute items vertically within each column. Horizontal alignment is not guaranteed with `columns` layout. This is expected behavior for CSS-based masonry.

**Fix:**

1. Accept the asymmetry (it's a feature of masonry).

2. Use a JavaScript masonry library for pixel-perfect alignment:
   ```bash
   npm install react-masonry-css
   ```

3. Switch to a different grid (BentoGridA for uniform layout).

---

### 10. BentoGridD Cards Breaking Across Columns

**Problem:** Card content splits mid-element across two columns.

**Cause:** The `break-inside-avoid` class is overridden or not supported by the browser (rare).

**Fix:** Ensure no conflicting classes:

```tsx
// Bad - removes break-inside protection
<BentoGridD className="[&>*]:break-inside-auto">

// Good - preserves default behavior
<BentoGridD>
```

For large cards, increase minimum card height to force full-column usage:

```tsx
<div className="min-h-[400px]">
  {/* Large content */}
</div>
```

---

### 11. BentoGridE Hero Not Spanning 2x2

**Problem:** First child in BentoGridE is the same size as other cards, not 2×2.

**Cause:** Custom `className` on the child overrides the `col-span-2 row-span-2` classes, or the grid is viewed on mobile where all cards stack.

**Fix:**

1. Check viewport—hero sizing only applies at `md` breakpoint and above:
   ```tsx
   // Hero is 1x1 on mobile, 2x2 on desktop
   <BentoGridE>
     <div>Hero (2x2 on desktop)</div>
   </BentoGridE>
   ```

2. Ensure child does not override span classes:
   ```tsx
   // Bad - child cancels span
   <BentoGridE>
     <div className="col-span-1">Hero</div>
   </BentoGridE>

   // Good
   <BentoGridE>
     <div>Hero</div>
   </BentoGridE>
   ```

---

### 12. Grid Component Not Rendering Responsive Columns

**Problem:** `Grid` component with responsive `cols` prop renders only the `sm` column count at all breakpoints.

**Cause:** Tailwind's `grid-cols-*` utilities are not being generated for the specified column counts. Tailwind only generates utilities used in your code.

**Fix:** The `Grid` component dynamically applies responsive classes. Ensure your Tailwind config includes the library path:

```js
content: ['./node_modules/bento-style/dist/**/*.{js,mjs}'],
```

Or use inline styles for dynamic columns:

```tsx
<Grid
  style={{
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  }}
>
```

---

### 13. Card Component Slots Not Rendering

**Problem:** Card's `header`, `media`, or `footer` props are passed but do not appear in the DOM.

**Cause:** The props contain falsy values (`null`, `undefined`, `false`) which are intentionally skipped by the component.

**Fix:** Ensure slot props contain valid React nodes:

```tsx
// Bad - undefined is not rendered
<Card header={undefined}>

// Good - render actual content
<Card header={<h3>Title</h3>}>

// Good - conditional rendering
<Card header={showHeader ? <h3>Title</h3> : null}>
```

---

### 14. Card Padding Not Matching Design

**Problem:** Card content has unexpected padding—too much or too little.

**Cause:** The Card component applies default `px-4 py-3` padding to `children`, `header`, and `footer` slots. Custom padding requires overriding these classes.

**Fix:** Override padding with `className`:

```tsx
// Remove all padding
<Card className="[&>div]:p-0">
  <p>No padding</p>
</Card>

// Custom padding
<Card className="[&>div]:p-6">
  <p>More padding</p>
</Card>

// Different padding per slot
<Card
  className="[&>div:first-child]:p-2 [&>div:last-child]:p-8"
  header={<h3>Small padding</h3>}
  footer={<button>Large padding</button>}
>
```

---

### 15. Nested Grids Breaking Layout

**Problem:** Nesting a bento grid inside another grid causes layout collapse or overflow.

**Cause:** Nested grids inherit conflicting `display: grid` properties. Inner grid tries to participate in outer grid's cell layout.

**Fix:** Wrap nested grid in a container:

```tsx
<BentoGridA>
  <Card>
    <div> {/* Wrapper breaks grid inheritance */}
      <BentoGridA>
        {/* Nested grid */}
      </BentoGridA>
    </div>
  </Card>
</BentoGridA>
```

---

## Styling & Customization Issues

### 16. className Overrides Not Working

**Problem:** Custom `className` does not override default component styles.

**Cause:** CSS specificity conflict. Your utility class has lower specificity than the default classes, or you're using a class that doesn't override the target property.

**Fix:** Use `tailwind-merge`'s conflict resolution by ensuring later classes override:

```tsx
// Bad - both classes present, border-gray-200 has same specificity
<Card className="border-blue-500 border-gray-200">

// Good - only border-blue-500 applied due to cn() merge
<Card className="border-blue-500">
```

For highly specific overrides, use arbitrary values:

```tsx
<Card className="border-[3px] border-[#ff0000]">
```

---

### 17. Gradient Backgrounds Not Showing

**Problem:** Applied gradient via `className` but card displays solid color or white.

**Cause:** Default `bg-white` class from Card component overrides your gradient.

**Fix:** Override the background explicitly:

```tsx
// Bad - bg-white wins due to source order
<Card className="bg-gradient-to-br from-blue-500 to-purple-500">

// Good - override white background
<Card className="bg-gradient-to-br from-blue-500 to-purple-500 [&]:bg-gradient-to-br">

// Better - remove bg-white entirely
<Card className="bg-gradient-to-br from-blue-500 to-purple-500" style={{ background: undefined }}>
```

Or use Grid + custom div instead of Card for full control.

---

### 18. Custom Gap Values Not Applying

**Problem:** Setting custom `gap` prop on Grid component has no effect.

**Cause:** A `className` with explicit gap overrides the prop value.

**Fix:** Remove conflicting gap classes:

```tsx
// Bad - className gap overrides prop
<Grid gap={8} className="gap-4">

// Good - prop applied
<Grid gap={8}>

// Good - use className only
<Grid className="gap-12">
```

---

### 19. Dark Mode Styles Not Working

**Problem:** Dark mode utilities (`dark:bg-gray-800`) do not apply when system theme changes.

**Cause:** Tailwind dark mode is not enabled or is set to `class` strategy but your app uses `media` strategy (or vice versa).

**Fix:** Configure Tailwind dark mode in `tailwind.config.js`:

```js
module.exports = {
  darkMode: 'media', // or 'class'
  // ...
};
```

For `class` strategy, add `dark` class to root element:

```tsx
// In your root component
<html className={isDark ? 'dark' : ''}>
```

---

### 20. Hover Effects Not Working on Touch Devices

**Problem:** BentoGridB spotlight effect does not trigger on mobile taps.

**Cause:** Hover pseudo-class does not activate on touch devices. Touch triggers a momentary hover that immediately disappears.

**Fix:** Add active/focus states for touch:

```tsx
<BentoGridB className="[&>*]:active:scale-105 [&>*]:active:shadow-2xl">
```

Or use a click handler for toggle behavior:

```tsx
function TouchFriendlyGrid({ children }) {
  const [activeIndex, setActiveIndex] = React.useState(null);

  return (
    <BentoGridB>
      {React.Children.map(children, (child, idx) => (
        <div
          onClick={() => setActiveIndex(idx)}
          className={activeIndex === idx ? 'scale-105 shadow-2xl' : ''}
        >
          {child}
        </div>
      ))}
    </BentoGridB>
  );
}
```

---

### 21. Custom Fonts Not Rendering

**Problem:** Custom font family applied via `className` does not render.

**Cause:** Font is not loaded or Tailwind does not have the font family in its config.

**Fix:** Add font to Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        custom: ['MyFont', 'sans-serif'],
      },
    },
  },
};
```

Use in components:

```tsx
<Card className="font-custom">
  <p>Text in custom font</p>
</Card>
```

Ensure font is loaded via `@font-face` or next/font.

---

### 22. Animations Stuttering on Low-End Devices

**Problem:** BentoGridB hover animations are janky on older phones/tablets.

**Cause:** GPU cannot handle simultaneous transforms and shadows on multiple cards. Each hover creates a compositing layer.

**Fix:** Disable animations on low-end devices:

```tsx
// Use motion-reduce media query
<BentoGridB className="motion-reduce:[&>*]:hover:scale-100 motion-reduce:[&>*]:hover:shadow-sm">
```

Or detect device performance:

```tsx
const isLowEnd = navigator.hardwareConcurrency <= 2;

<BentoGridB className={isLowEnd ? 'hover:scale-100' : ''}>
```

---

### 23. Z-Index Issues with Spotlight Overlay

**Problem:** Spotlight gradient overlay in BentoGridB appears above card content, obscuring text.

**Cause:** The gradient has higher `z-index` than content, or content lacks a stacking context.

**Fix:** The component applies `relative z-10` to children. Ensure you're not overriding:

```tsx
// Bad - removes z-index from content
<BentoGridB>
  <div className="z-0">Content hidden behind gradient</div>
</BentoGridB>

// Good - preserve z-index
<BentoGridB>
  <div className="relative z-10">Content visible</div>
</BentoGridB>
```

Or increase content z-index:

```tsx
<BentoGridB className="[&>*>div:last-child]:z-20">
```

---

### 24. Border Radius Not Consistent

**Problem:** Some cards have rounded corners, others are square, despite using the same component.

**Cause:** `overflow-hidden` is required for `rounded-*` to work on children. If a child has `overflow-visible`, corners are not clipped.

**Fix:** Ensure parent has `overflow-hidden`:

```tsx
<Card className="rounded-xl overflow-hidden">
  <img src="/image.jpg" className="w-full" />
</Card>
```

For custom radius on specific cards:

```tsx
<BentoGridA>
  <Card className="rounded-none">Square card</Card>
  <Card className="rounded-3xl">Extra rounded card</Card>
</BentoGridA>
```

---

### 25. Custom Colors Not Matching Tailwind Palette

**Problem:** Applied a custom color class (`bg-brand-500`) but it does not render.

**Cause:** The color is not in your Tailwind config's extended palette.

**Fix:** Add custom colors to Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#3b82f6',
          600: '#2563eb',
        },
      },
    },
  },
};
```

Or use arbitrary values:

```tsx
<Card className="bg-[#3b82f6]">
```

---

## Performance Issues

### 26. Page Loads Slowly with Many Cards

**Problem:** Page takes 5+ seconds to load when rendering 50+ cards.

**Cause:** All cards render immediately, loading images and processing styles synchronously.

**Fix:** Lazy load images:

```tsx
<Card>
  <img src="/image.jpg" loading="lazy" />
</Card>
```

Use virtualization for large lists:

```bash
npm install react-window
```

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

---

### 27. Scroll Performance Degraded

**Problem:** Scrolling feels sluggish with bento grids on the page.

**Cause:** Backdrop blur (BentoGridC) or hover effects (BentoGridB) trigger constant repaints during scroll.

**Fix:** Disable effects during scroll:

```tsx
const [isScrolling, setIsScrolling] = React.useState(false);

React.useEffect(() => {
  let timeout;
  const handleScroll = () => {
    setIsScrolling(true);
    clearTimeout(timeout);
    timeout = setTimeout(() => setIsScrolling(false), 150);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

<BentoGridC className={isScrolling ? '[&>*]:backdrop-blur-none' : ''}>
```

---

### 28. Masonry Grid Reflows on Every Resize

**Problem:** BentoGridD recalculates layout continuously during window resize, causing jank.

**Cause:** CSS columns re-balance on every pixel change. This is inherent to `columns` layout.

**Fix:** Debounce resize events:

```tsx
const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

React.useEffect(() => {
  const handleResize = debounce(() => {
    setWindowWidth(window.innerWidth);
  }, 200);

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

Or use a JavaScript masonry library for better performance.

---

### 29. High Memory Usage with Many Images

**Problem:** Browser memory usage exceeds 500MB with image-heavy grids.

**Cause:** All images load simultaneously without dimension constraints, and large files are not optimized.

**Fix:**

1. Optimize images (use WebP, compress to < 100KB).
2. Set explicit dimensions:
   ```tsx
   <img src="/image.jpg" width={400} height={300} loading="lazy" />
   ```
3. Use responsive images:
   ```tsx
   <img
     srcSet="/small.jpg 400w, /large.jpg 800w"
     sizes="(max-width: 768px) 100vw, 400px"
   />
   ```

---

### 30. CPU Spikes During Hover

**Problem:** CPU usage spikes to 80%+ when hovering over BentoGridB cards.

**Cause:** Shadow and gradient animations trigger style recalculation and repaint on every frame.

**Fix:** Reduce animation complexity:

```tsx
// Bad - multiple expensive properties animating
<BentoGridB className="[&>*]:transition-all">

// Good - animate transform and opacity only
<BentoGridB className="[&>*]:transition-transform [&>*]:transition-opacity">
```

Use `will-change` for smoother animations:

```tsx
<BentoGridB className="[&>*]:will-change-transform">
```

⚠️ Do not overuse `will-change`—it increases memory usage.

---

### 31. Layout Shift (CLS) on Image Load

**Problem:** Cards jump/resize when images load, causing poor user experience.

**Cause:** Image dimensions are not specified, so the browser cannot reserve space before the image loads.

**Fix:** Always specify dimensions:

```tsx
<img src="/image.jpg" width={400} height={300} alt="..." />
```

Or use aspect-ratio:

```tsx
<div className="aspect-video w-full">
  <img src="/image.jpg" className="w-full h-full object-cover" />
</div>
```

---

### 32. BentoGridC Causes Frame Drops

**Problem:** Animations drop to 20-30 FPS when BentoGridC is visible.

**Cause:** Backdrop blur is extremely GPU-intensive. Each blurred card requires a full render pass.

**Fix:** Reduce card count (< 10) or disable blur:

```tsx
// Disable blur on low-end devices
<BentoGridC className="[&>*]:backdrop-blur-none supports-[backdrop-filter]:[&>*]:backdrop-blur-md">
```

Or use a static background:

```tsx
<BentoGridC className="[&>*]:backdrop-blur-none [&>*]:bg-white/90">
```

---

## TypeScript & Type Issues

### 33. Type Error: Property Does Not Exist on GridProps

**Problem:** TypeScript error when passing custom props to Grid: `Property 'customProp' does not exist on type 'GridProps'`.

**Cause:** GridProps extends `HTMLAttributes<HTMLDivElement>`, but TypeScript is strict about additional props.

**Fix:** Use type assertion or extend the type:

```tsx
// Type assertion
<Grid {...{ customProp: 'value' } as any}>

// Extend GridProps
import { GridProps } from 'bento-style';

interface CustomGridProps extends GridProps {
  customProp: string;
}

function CustomGrid({ customProp, ...props }: CustomGridProps) {
  return <Grid {...props} />;
}
```

---

### 34. forwardRef Type Error

**Problem:** TypeScript error when using `ref` with bento components: `Type 'RefObject<HTMLDivElement>' is not assignable to type 'Ref<HTMLDivElement> | undefined'`.

**Cause:** Ref type mismatch between React.forwardRef and component usage.

**Fix:** Explicitly type the ref:

```tsx
const ref = React.useRef<HTMLDivElement>(null);

<BentoGridA ref={ref}>
```

---

### 35. Children Type Error with Card

**Problem:** TypeScript error: `Type 'Element[]' is not assignable to type 'ReactNode'`.

**Cause:** Strict TypeScript settings require explicit children types.

**Fix:** CardProps accepts `ReactNode` by default. Ensure you're importing from React:

```tsx
import React from 'react';
import { Card } from 'bento-style';

<Card>
  {['Item 1', 'Item 2'].map((item) => (
    <div key={item}>{item}</div>
  ))}
</Card>
```

---

### 36. Cannot Import cn Function

**Problem:** Import error: `Module '"bento-style"' has no exported member 'cn'`.

**Cause:** Outdated package version or incorrect import path.

**Fix:** Update package and verify import:

```bash
npm update bento-style
```

```tsx
import { cn } from 'bento-style';
```

If still failing, check package.json version—`cn` is available in 1.0.0+.

---

## Responsive Design Issues

### 37. Grid Not Responsive Below 768px

**Problem:** Grid remains multi-column on mobile screens narrower than 768px.

**Cause:** Custom breakpoints override default responsive behavior, or the viewport meta tag is missing.

**Fix:** Ensure viewport meta tag in HTML:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Check for conflicting responsive classes:

```tsx
// Bad - forces 3 columns at all sizes
<BentoGridA className="grid-cols-3">

// Good - responsive
<BentoGridA>
```

---

### 38. Cards Overflow Container on Mobile

**Problem:** Cards extend beyond screen width on mobile, causing horizontal scroll.

**Cause:** Fixed widths or padding exceeds viewport width.

**Fix:** Remove fixed widths and add container padding:

```tsx
<div className="px-4"> {/* Container padding */}
  <BentoGridA>
    <Card className="w-full"> {/* Full width, not fixed */}
      Content
    </Card>
  </BentoGridA>
</div>
```

---

### 39. Breakpoints Not Matching Design System

**Problem:** Grid changes columns at 768px but design requires 640px.

**Cause:** Tailwind's default `md` breakpoint is 768px.

**Fix:** Customize Tailwind breakpoints:

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '640px', // Custom breakpoint
      lg: '1024px',
    },
  },
};
```

Or use custom responsive utilities:

```tsx
<BentoGridA className="sm:grid-cols-1 custom-md:grid-cols-2">
```

---

### 40. Text Overflowing Cards on Mobile

**Problem:** Long words or URLs break card layout on narrow screens.

**Cause:** No word-breaking rules applied to text content.

**Fix:** Add word-breaking utilities:

```tsx
<Card className="break-words">
  <p className="overflow-wrap-anywhere">
    https://very-long-url-that-might-overflow.com
  </p>
</Card>
```

Or use text truncation:

```tsx
<p className="truncate">Very long text that will be cut off...</p>
```

---

## Accessibility Issues

### 41. Screen Reader Does Not Announce Cards

**Problem:** Screen readers skip over card content or announce generic "div" elements.

**Cause:** Cards lack semantic HTML or ARIA labels.

**Fix:** Use semantic elements and ARIA:

```tsx
<Card as="article" aria-labelledby="card-title">
  <h3 id="card-title">Card Title</h3>
  <p>Card content</p>
</Card>
```

Or add role and label:

```tsx
<Card role="article" aria-label="Feature card">
  <p>Content</p>
</Card>
```

---

### 42. Focus Indicator Not Visible

**Problem:** Keyboard users cannot see which card is focused.

**Cause:** Default focus outline is removed by CSS reset or global styles.

**Fix:** Add explicit focus styles:

```tsx
<Card
  tabIndex={0}
  className="focus:ring-2 focus:ring-blue-500 focus:outline-none"
>
  <button>Interact</button>
</Card>
```

Never use `outline-none` without a replacement focus indicator.

---

### 43. Interactive Cards Not Keyboard Accessible

**Problem:** Clicking a card triggers an action, but keyboard users cannot activate it.

**Cause:** Click handler is on a non-interactive element without keyboard support.

**Fix:** Add keyboard event handlers:

```tsx
<Card
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }}
  role="button"
>
  <p>Interactive card</p>
</Card>
```

Or wrap in a button/link:

```tsx
<Card>
  <a href="/details" className="block p-4">
    <p>Card content</p>
  </a>
</Card>
```

---

### 44. Color Contrast Too Low

**Problem:** Text on glassmorphic cards (BentoGridC) fails WCAG AA contrast requirements.

**Cause:** Semi-transparent white backgrounds reduce contrast against colorful backgrounds.

**Fix:** Increase opacity or use darker text:

```tsx
<BentoGridC className="[&>*]:bg-white/80"> {/* More opaque */}
  <div className="p-6">
    <h3 className="text-gray-900 font-bold">Better contrast</h3>
  </div>
</BentoGridC>
```

Test with browser devtools contrast checker.

---

### 45. Hover-Only Information Not Accessible

**Problem:** BentoGridB reveals content on hover that is unavailable to keyboard/screen reader users.

**Cause:** Content visibility depends on `:hover` pseudo-class.

**Fix:** Use focus as well as hover:

```tsx
<BentoGridB className="[&>*]:focus-within:shadow-2xl [&>*]:focus-within:scale-105">
  <div tabIndex={0}>
    <p>Accessible on focus and hover</p>
  </div>
</BentoGridB>
```

Or make content always visible:

```tsx
<BentoGridB>
  <div>
    <p className="opacity-70 group-hover:opacity-100 group-focus:opacity-100">
      Content fades in
    </p>
  </div>
</BentoGridB>
```

---

## Integration Issues

### 46. Conflicts with CSS Modules

**Problem:** When using CSS Modules, bento-style classes do not apply.

**Cause:** CSS Modules scope class names, preventing Tailwind utilities from matching.

**Fix:** Use global CSS for Tailwind:

```css
/* global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import in root component:

```tsx
import './global.css';
```

Do not import Tailwind directives in CSS Module files.

---

### 47. Next.js Server Component Error

**Problem:** Next.js error: `You're importing a component that needs useState. It only works in a Client Component but none of its parents are marked with "use client"`.

**Cause:** bento-style components use React hooks internally. They must be used in client components.

**Fix:** Add `"use client"` directive to consuming component:

```tsx
'use client';

import { BentoGridA } from 'bento-style';

export default function MyPage() {
  return <BentoGridA>...</BentoGridA>;
}
```

Or use a client wrapper:

```tsx
// ClientGrid.tsx
'use client';
import { BentoGridA } from 'bento-style';
export default BentoGridA;

// page.tsx (server component)
import ClientGrid from './ClientGrid';

export default function Page() {
  return <ClientGrid>...</ClientGrid>;
}
```

---

### 48. Conflicts with Other CSS Frameworks

**Problem:** Using bento-style with Bootstrap/Material-UI causes style conflicts.

**Cause:** Global styles from other frameworks override Tailwind utilities.

**Fix:** Scope other frameworks or use Tailwind's prefix option:

```js
// tailwind.config.js
module.exports = {
  prefix: 'tw-',
  // ...
};
```

Then use prefixed classes:

```tsx
<BentoGridA className="tw-gap-8">
```

⚠️ This requires rebuilding the library with the prefix.

---

### 49. Storybook Not Showing Styles

**Problem:** bento-style components render without styles in Storybook.

**Cause:** Storybook's Webpack config does not include Tailwind CSS processing.

**Fix:** Add Tailwind to Storybook:

1. Install PostCSS addon:
   ```bash
   npm install @storybook/addon-postcss
   ```

2. Configure `.storybook/main.js`:
   ```js
   module.exports = {
     addons: ['@storybook/addon-postcss'],
   };
   ```

3. Create `.storybook/preview.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. Import in `.storybook/preview.js`:
   ```js
   import './preview.css';
   ```

---

### 50. ESLint Warns About Missing Dependencies

**Problem:** ESLint warning: `React Hook useEffect has a missing dependency: 'children'. Either include it or remove the dependency array.`

**Cause:** Your custom wrapper uses hooks incorrectly, not an issue with bento-style itself.

**Fix:** Add the missing dependency:

```tsx
React.useEffect(() => {
  // Some effect
}, [children]); // Add children to deps
```

Or use `// eslint-disable-next-line react-hooks/exhaustive-deps` if the warning is a false positive (use sparingly).

---

## Additional Resources

- **GitHub Issues:** https://github.com/hari7261/bento-style/issues
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
- **React forwardRef:** https://react.dev/reference/react/forwardRef

For issues not covered here, please open a GitHub issue with:
1. Minimal reproduction (CodeSandbox preferred)
2. Expected vs. actual behavior
3. Browser/environment details
