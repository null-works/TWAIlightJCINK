# INITIAL: Base Index Wrapper and CSS Foundation

## FEATURE

Create the foundational files for TWAILIGHT theme:

### 1. Base CSS File (`src/css/twailight.css`)
A complete CSS foundation with:

**CSS Custom Properties (all prefixed `--tw-`)**

*Color System (RGB values without rgb() for gradient manipulation):*
- Accent colors: `--tw-accent-1: R, G, B` format for use in `rgba(var(--tw-accent-1), 0.5)`
- Background tiers: `--tw-bg-0` through `--tw-bg-5` with alpha transparency
- Text hierarchy: `--tw-text`, `--tw-text-muted`, etc.
- Member group colors: `--tw-gbg1`, `--tw-gbg2`, `--tw-gbg3` per group

*Typography (responsive with clamp()):*
- Font families: `--tw-font-sans`, `--tw-font-mono`, `--tw-font-script`
- Size scale: `--tw-text-xs`, `--tw-text-sm`, `--tw-text-body`, `--tw-text-md`, `--tw-text-lg`, `--tw-text-xl`, `--tw-text-xxl`
- Using clamp() for fluid sizing: `clamp(14px, calc(14px + 0.15vw), 16px)`

*Layout & Spacing:*
- Max/min widths for wrapper
- Spacing scale
- Border definitions (widths, radii)
- Transition presets (quick, medium, slow)

*Decorative:*
- Box shadows (light and dark variants)
- Text shadows for legibility on backgrounds
- Drop shadows

**Light/Dark Theme Toggle**
- `html.lightMode` and `html.darkMode` classes on the html element
- All theme-specific colors defined within these selectors
- Variables that change between themes:
  - Background colors (all bg tiers)
  - Text color
  - Border colors
  - Box shadows
  - Filter modes for images/overlays
- Persist preference via localStorage
- Toggle button in header

**Base Element Styles**
- Reset/normalize essentials
- Body, html setup
- Typography hierarchy (h1-h6, p, links)
- Focus states for accessibility
- Selection styling
- Scrollbar styling (webkit)

**Jcink Core Classes**
- `.tableborder`, `.tablefill`, `.tablepad`, `.tablebasic`
- `.row1`, `.row2`, `.row3`, `.row4`
- `.darkrow1`, `.darkrow2`, `.darkrow3`
- `.maintitle`, `.titlemedium`
- `.pformstrip`, `.pformleft`, `.pformright`
- Form inputs: `.forminput`, `.textinput`, `.button`
- Pagination styles
- Quote and code blocks

**Utility Classes**
- Flex containers (`.flex-between`, `.flex-center`)
- Visibility helpers (`.sr-only` for screen readers)
- Basic responsive utilities

**Mobile Responsiveness**
- Breakpoint at 768px minimum
- Fluid typography considerations
- Touch-friendly tap targets (44px minimum)

### 2. Base Wrapper (`src/templates/wrapper.html`)
The main HTML wrapper that Jcink uses:

**Document Structure**
- HTML5 doctype
- Proper meta tags (viewport, charset)
- CSS/JS include points (`<% CSS %>`, `<% JAVASCRIPT %>`)

**Layout Skeleton**
- Fixed header/navigation area
- Main content wrapper (`<% BOARD %>`)
- Footer with copyright (`<% COPYRIGHT %>`)

**Theme Toggle**
- Button/switch to toggle light/dark
- JavaScript for toggle + localStorage persistence

**Navigation**
- `<% NAVIGATION %>` placement
- Mobile hamburger menu structure
- Accessible (aria-labels, keyboard nav)

**User Bar**
- Logged-in user info area
- Guest vs member visibility toggles using Jcink conditionals
- `<% SUBACCOUNTS %>` dropdown placement

**Jcink Required Elements**
- `<% TITLE %>` in head
- `<% BOARD HEADER %>` placement
- `<% SKIN_SELECTOR %>` in footer

### 3. Base JavaScript (`src/js/twailight.js`)
Minimal foundational JS:

- Theme toggle function with localStorage
- Mobile nav toggle (hamburger menu)
- Any Jcink-required initialization

---

## EXAMPLES

Reference the Jcink variable syntax and structure patterns. Key Jcink template variables to use:

**In wrapper:**
- `<!-- |input_act| -->` - Current page action (for body ID)
- `<!-- |g_id| -->` - User's group ID (for show/hide)
- `<!-- |name| -->` - Username
- `<!-- |id| -->` - User ID
- `<!-- |new_msg| -->` - New message count
- `<!-- |new_alerts| -->` - New alerts count
- `<!-- |auth_key| -->` - Auth key for logout

**Group visibility pattern:**
```html
<span class="m-<!-- |g_id| -->">Member only content</span>
<span class="g-<!-- |g_id| -->" style="display:none;">Guest only</span>
```

Then CSS:
```css
.g-2 { display: inline-block !important; } /* Show for guests */
.m-2 { display: none; } /* Hide for guests */
```

---

## DOCUMENTATION

- Jcink Skin Variables: https://jcink.com/main/wiki/jfh-skins-variables
- Jcink Wrappers: https://jcink.com/main/wiki/jfh-skins-wrappers

---

## OTHER CONSIDERATIONS

1. **Clean-room implementation** - Do not copy from any reference files, only use patterns conceptually.

2. **Jcink comment parsing** - The Jcink ACP can corrupt CSS with excessive comments. Use minimal section headers only.

3. **Variable organization** - Group CSS variables logically so users can find what they need to customize quickly.

4. **Mobile nav** - RPC communities expect mobile-friendly themes. The hamburger menu must work on touch.

5. **Subaccount support** - The theme must work with Jcink's subaccount system (dropdown in nav).

6. **Test live** - No local preview available; code must be paste-ready for Jcink ACP.

7. **Future PHP hooks** - Structure the wrapper so it's easy to add PHP includes from an external server later.

---

## SUCCESS CRITERIA

- [ ] CSS file compiles (valid syntax, no errors)
- [ ] All CSS variables use `--tw-` prefix
- [ ] Light/dark toggle works and persists
- [ ] Wrapper includes all required Jcink tags
- [ ] Mobile navigation functional
- [ ] Guest/member visibility toggles work
- [ ] Passes basic accessibility check (focus states, contrast)
- [ ] Documentation created in `/docs/` for customization
