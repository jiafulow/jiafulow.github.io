---
title: 'CSS Grid vs Flexbox: When to Use What (Finally Explained)'
description: 'Stop overthinking layout choices. Learn when to reach for Grid, when to use Flexbox, and when either works fine.'
pubDate: 'Sep 15 2025'
category: 'CSS'
tags: ['css', 'frontend', 'layout', 'design', 'tutorial']
---

I spent years confused about when to use Grid vs Flexbox. Then it clicked: **Grid for 2D, Flexbox for 1D**. But that's oversimplified. Let's dig deeper.

## The One-Liner

- **Flexbox:** One direction (row OR column)
- **Grid:** Two directions (rows AND columns)

But real layouts are messier than theory, so here's my practical decision tree.

## Use Flexbox When...

### 1. You Have a Row or Column of Things

```css
/* Navigation bar */
.nav {
  display: flex;
  gap: 1rem;
}

/* Vertical list */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
```

**Perfect for:**
- Navigation menus
- Button groups
- Card content (title, description, button stacked)
- Toolbars

### 2. You Want Items to Wrap

```css
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
```

Tags, chips, badges—they flow like text and wrap naturally.

### 3. You Need Items to Grow/Shrink

```css
.layout {
  display: flex;
}

.sidebar {
  flex: 0 0 250px; /* Don't grow, don't shrink, stay 250px */
}

.main {
  flex: 1; /* Take all remaining space */
}
```

Flexbox excels at distributing space.

### 4. You're Centering Something

```css
.center-me {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

The classic. Works every time.

## Use Grid When...

### 1. You Have Actual Rows AND Columns

```css
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
}
```

**Perfect for:**
- Dashboards
- Photo galleries
- Card grids with consistent alignment
- Form layouts

### 2. You Need Items to Line Up Across Rows

```css
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

All cards stay aligned even with different content heights.

### 3. You're Creating Complex Layouts

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
/* etc */
```

Named areas make complex layouts readable.

### 4. You Want Responsive Without Media Queries

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}
```

This auto-responds to screen size. Magic! ✨

## When Either Works

### Card with Content

**Flexbox approach:**
```css
.card {
  display: flex;
  flex-direction: column;
}

.card-content {
  flex: 1;
}
```

**Grid approach:**
```css
.card {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
```

Both work! Pick whichever feels more intuitive.

## Common Patterns

### Pattern 1: Holy Grail Layout

```css
body {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

main {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  gap: 2rem;
}
```

Grid makes this trivial. Would be painful with floats (remember those?).

### Pattern 2: Responsive Navigation

```css
.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
  }
}
```

Flexbox shines here.

### Pattern 3: Image Gallery

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
```

Grid keeps everything aligned perfectly.

## My Decision Process

1. **Is it one-dimensional?** → Flexbox
2. **Is it a grid of items?** → Grid
3. **Do items need to line up across rows?** → Grid
4. **Do items need to wrap and flow?** → Flexbox
5. **Still not sure?** → Try Flexbox first, it's simpler

## The Gotchas

### Flexbox
- Can't easily align items across rows
- Wrapping can create uneven gaps
- Source order matters more

### Grid
- Steeper learning curve
- Overkill for simple one-directional layouts
- Browser support is great now, but check your needs

## Can You Use Both?

YES! Common pattern:

```css
.page {
  display: grid; /* Page layout */
  grid-template-columns: 250px 1fr;
}

.nav {
  display: flex; /* Navigation items */
  gap: 1rem;
}

.card-grid {
  display: grid; /* Card layout */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.card {
  display: flex; /* Card content */
  flex-direction: column;
}
```

Use the right tool for each job!

## Quick Reference

**Flexbox:**
- `justify-content` - Main axis (horizontal by default)
- `align-items` - Cross axis (vertical by default)
- `gap` - Space between items
- `flex` - How items grow/shrink

**Grid:**
- `grid-template-columns` - Column sizing
- `grid-template-rows` - Row sizing
- `gap` - Space between cells
- `grid-area` - Named areas

## Tools I Use

- **Firefox DevTools** - Best Grid inspector
- **Chrome DevTools** - Great Flexbox inspector
- **CSS Grid Generator** - gridbyexample.com
- **Flexbox Froggy** - Learn Flexbox by playing

## Conclusion

Don't overthink it. Start with Flexbox for simple layouts, reach for Grid when you need 2D control. And remember: you can always refactor later.

Now go build something! And when someone asks "Grid or Flexbox?", you'll know exactly what to say: "Depends!"

Happy layouting! 🎨
