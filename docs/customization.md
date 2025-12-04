# Customizing TWAILIGHT

This guide explains how to customize the theme's appearance without breaking anything.

---

## Quick Color Changes

All colors are defined as CSS custom properties in the `:root` and theme mode selectors. They use RGB format (without the `rgb()` wrapper) so they can be used in gradients and with alpha transparency.

### Accent Colors

Find these at the top of the CSS file:

```css
:root {
  --tw-accent-1: 191, 126, 67;  /* Primary accent (golden) */
  --tw-accent-2: 147, 110, 77;  /* Secondary accent (brown) */
  --tw-accent-3: 94, 84, 75;    /* Tertiary accent (dark brown) */
}
```

To change the primary accent to blue:
```css
--tw-accent-1: 66, 133, 244;
```

To change it to purple:
```css
--tw-accent-1: 156, 39, 176;
```

### Why RGB Without rgb()?

This format lets you use the colors with transparency:
```css
background: rgba(var(--tw-accent-1), 0.5);  /* 50% transparent */
background: rgba(var(--tw-accent-1), 0.2);  /* 20% transparent */
```

---

## Dark Mode Colors

Dark mode colors are in the `html.darkMode` selector:

```css
html.darkMode {
  /* Backgrounds (darkest to lightest) */
  --tw-bg-0: 18, 18, 20;    /* Page background */
  --tw-bg-1: 26, 26, 30;    /* Cards, header */
  --tw-bg-2: 35, 35, 40;    /* Alternate rows */
  --tw-bg-3: 45, 45, 52;    /* Hover states */
  --tw-bg-4: 58, 58, 66;    /* Borders */
  --tw-bg-5: 72, 72, 82;    /* Active states */

  /* Text */
  --tw-text: 235, 235, 240;       /* Primary text */
  --tw-text-muted: 180, 180, 190; /* Secondary text */
  --tw-text-faint: 120, 120, 130; /* Disabled text */
}
```

---

## Light Mode Colors

Light mode colors are in the `html.lightMode` selector:

```css
html.lightMode {
  /* Backgrounds (lightest to darker) */
  --tw-bg-0: 250, 250, 252;  /* Page background */
  --tw-bg-1: 245, 245, 248;  /* Cards, header */
  --tw-bg-2: 238, 238, 242;  /* Alternate rows */
  /* ... etc */

  /* Text */
  --tw-text: 30, 30, 35;     /* Primary text */
  --tw-text-muted: 80, 80, 90;
  --tw-text-faint: 130, 130, 140;
}
```

---

## Fonts

### Changing Font Families

Find the font variables in `:root`:

```css
:root {
  --tw-font-sans: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --tw-font-mono: "Cascadia Code", "Fira Code", Consolas, monospace;
  --tw-font-script: "Playfair Display", Georgia, serif;
}
```

To use a different main font:
1. Update the Google Fonts link in the wrapper
2. Change `--tw-font-sans` to your new font

Example for Poppins:
```html
<!-- In wrapper <head> -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
```
```css
/* In CSS */
--tw-font-sans: "Poppins", sans-serif;
```

### Font Sizes

Font sizes use `clamp()` for responsive scaling:

```css
--tw-text-body: clamp(14px, calc(14px + 0.15vw), 16px);
```

This means:
- Minimum: 14px
- Scales with viewport
- Maximum: 16px

To increase base text size:
```css
--tw-text-body: clamp(15px, calc(15px + 0.15vw), 17px);
```

---

## Spacing

The spacing scale controls padding and margins:

```css
:root {
  --tw-space-xs: 4px;
  --tw-space-sm: 8px;
  --tw-space-md: 16px;
  --tw-space-lg: 24px;
  --tw-space-xl: 32px;
  --tw-space-xxl: 48px;
}
```

For a more compact look, reduce these values:
```css
--tw-space-md: 12px;
--tw-space-lg: 18px;
```

---

## Border Radius

Control the roundness of corners:

```css
:root {
  --tw-radius-sm: 4px;   /* Buttons, inputs */
  --tw-radius-md: 8px;   /* Cards, modals */
  --tw-radius-lg: 12px;  /* Large elements */
  --tw-radius-full: 9999px; /* Pills, avatars */
}
```

For sharper corners:
```css
--tw-radius-sm: 2px;
--tw-radius-md: 4px;
--tw-radius-lg: 6px;
```

For rounder corners:
```css
--tw-radius-sm: 8px;
--tw-radius-md: 12px;
--tw-radius-lg: 20px;
```

---

## Member Group Colors

Each group has a color class. Find them in section 08:

```css
.gbg1 { background: rgba(var(--tw-accent-1), 0.2); color: rgb(var(--tw-accent-1)); }
.gbg2 { background: rgba(128, 128, 128, 0.2); color: rgb(128, 128, 128); }
.gbg3 { background: rgba(76, 175, 80, 0.2); color: rgb(76, 175, 80); }
```

To change a group's color (e.g., group 3 to red):
```css
.gbg3 { background: rgba(244, 67, 54, 0.2); color: rgb(244, 67, 54); }
```

---

## Shadows

Shadows are defined per theme mode:

```css
html.darkMode {
  --tw-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
  --tw-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
  --tw-shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.5);
}
```

For softer shadows:
```css
--tw-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.2);
```

For no shadows:
```css
--tw-shadow-sm: none;
--tw-shadow-md: none;
--tw-shadow-lg: none;
```

---

## Transitions

Control animation speed:

```css
:root {
  --tw-transition-quick: 150ms ease;
  --tw-transition-medium: 300ms ease;
  --tw-transition-slow: 500ms ease;
}
```

For snappier animations:
```css
--tw-transition-quick: 100ms ease;
--tw-transition-medium: 200ms ease;
```

For no animations:
```css
--tw-transition-quick: 0ms;
--tw-transition-medium: 0ms;
--tw-transition-slow: 0ms;
```

---

## Common Customizations

### Change Header Background

The header uses `--tw-bg-1`. To give it a gradient:

```css
.tw-header {
  background: linear-gradient(135deg,
    rgba(var(--tw-accent-1), 0.1),
    rgba(var(--tw-bg-1), 1)
  );
}
```

### Make Buttons Rounder

```css
button, .button {
  border-radius: var(--tw-radius-full);
}
```

### Add a Background Image

```css
body {
  background-image: url('your-image-url.jpg');
  background-size: cover;
  background-attachment: fixed;
}
```

Make sure content is still readable by adjusting the wrapper:
```css
.tw-wrapper {
  background: rgba(var(--tw-bg-0), 0.95);
  border-radius: var(--tw-radius-lg);
}
```

---

## Tips

1. **Test both themes** - Changes to `:root` affect both, but theme-specific changes only affect one mode

2. **Use browser dev tools** - Right-click > Inspect to test changes before editing the CSS

3. **Keep backups** - Copy your CSS before making changes

4. **Check contrast** - Make sure text is readable against backgrounds (WCAG AA requires 4.5:1 ratio)

5. **Test on mobile** - Shrink your browser window to 375px width to preview mobile view
