# TWAILIGHT Project Structure

This document explains how the theme files are organized.

---

## Directory Layout

```
twailight/
├── .claude/
│   └── commands/         # Claude Code slash commands
│       ├── generate-prp.md
│       └── execute-prp.md
├── PRPs/
│   └── templates/        # Product Requirements Prompts
├── docs/                 # Documentation (you are here)
│   ├── installation.md
│   ├── customization.md
│   └── structure.md
├── examples/             # Example code snippets
├── src/
│   ├── css/
│   │   └── twailight.css  # Main stylesheet
│   ├── js/
│   │   └── twailight.js   # JavaScript functionality
│   └── templates/
│       └── wrapper.html   # Board wrapper template
├── CLAUDE.md             # AI assistant instructions
└── INITIAL.md            # Initial feature specification
```

---

## Source Files (`/src/`)

### CSS (`/src/css/twailight.css`)

The main stylesheet containing all theme styles. Organized into numbered sections:

| Section | Contents |
|---------|----------|
| 01 | Root variables (colors, fonts, spacing) |
| 02 | Theme modes (light/dark) |
| 03 | Reset & base styles |
| 04 | Typography |
| 05 | Links & buttons |
| 06 | Forms |
| 07 | Jcink core classes |
| 08 | Member groups |
| 09 | Navigation |
| 10 | Layout |
| 11 | Quotes & code |
| 12 | Pagination |
| 13 | Utilities |
| 14 | Responsive |

Use Ctrl+F with `=01.` to jump to sections.

### JavaScript (`/src/js/twailight.js`)

Minimal JavaScript for:
- Theme toggle (light/dark mode)
- Mobile navigation
- Dropdown menus
- Smooth scrolling
- Jcink utilities

Exposes `window.twailight` object for custom buttons:
```javascript
twailight.toggleTheme();
twailight.setTheme('light');
twailight.getCurrentTheme(); // Returns 'light' or 'dark'
```

### Templates (`/src/templates/`)

HTML templates for Jcink. Currently includes:
- `wrapper.html` - The main board wrapper

Future templates will go here (post templates, profile templates, etc.)

---

## CSS Variable Naming

All CSS custom properties use the `--tw-` prefix (TWAILIGHT namespace).

### Naming Patterns

| Pattern | Purpose | Example |
|---------|---------|---------|
| `--tw-accent-N` | Accent colors | `--tw-accent-1` |
| `--tw-bg-N` | Background tiers | `--tw-bg-0` to `--tw-bg-5` |
| `--tw-text-*` | Text colors/sizes | `--tw-text-muted` |
| `--tw-font-*` | Font families | `--tw-font-sans` |
| `--tw-space-*` | Spacing scale | `--tw-space-md` |
| `--tw-radius-*` | Border radii | `--tw-radius-lg` |
| `--tw-shadow-*` | Box shadows | `--tw-shadow-md` |
| `--tw-transition-*` | Transitions | `--tw-transition-quick` |
| `--tw-z-*` | Z-index scale | `--tw-z-modal` |

### Color Format

Colors use RGB values without the `rgb()` function:
```css
--tw-accent-1: 191, 126, 67;
```

This allows alpha manipulation:
```css
background: rgba(var(--tw-accent-1), 0.5);
```

---

## Class Naming

### TWAILIGHT Classes

Theme-specific classes use the `tw-` prefix:
- `.tw-header` - Site header
- `.tw-nav` - Navigation container
- `.tw-wrapper` - Content wrapper
- `.tw-footer` - Site footer
- `.tw-theme-toggle` - Theme switch button
- `.tw-hamburger` - Mobile menu button
- `.tw-mobile-nav` - Mobile navigation panel

### Jcink Classes

Standard Jcink classes are styled but not renamed:
- `.tableborder`, `.tablefill`, `.tablepad`
- `.row1`, `.row2`, `.row3`, `.row4`
- `.maintitle`, `.titlemedium`
- `.pformstrip`, `.pformleft`, `.pformright`
- `.forminput`, `.textinput`, `.button`

### Utility Classes

Generic helper classes:
- `.flex-between` - Flexbox space-between
- `.flex-center` - Flexbox center
- `.sr-only` - Screen reader only
- `.text-center`, `.text-left`, `.text-right`
- `.mt-*`, `.mb-*` - Margin utilities
- `.gap-*` - Gap utilities

---

## Jcink Template Variables

The wrapper uses these Jcink template tags:

| Tag | Purpose |
|-----|---------|
| `<% TITLE %>` | Page title |
| `<% CSS %>` | Stylesheet injection |
| `<% JAVASCRIPT %>` | Script injection |
| `<% BOARD %>` | Main content area |
| `<% BOARD NAME %>` | Forum name |
| `<% BOARD HEADER %>` | Header/announcement area |
| `<% NAVIGATION %>` | Navigation links |
| `<% SUBACCOUNTS %>` | Subaccount dropdown |
| `<% COPYRIGHT %>` | Jcink copyright |
| `<% SKIN_SELECTOR %>` | Skin dropdown |

And these inline variables:
| Variable | Purpose |
|----------|---------|
| `<!-- \|input_act\| -->` | Current page action |
| `<!-- \|g_id\| -->` | User's group ID |
| `<!-- \|name\| -->` | Username |
| `<!-- \|id\| -->` | User ID |
| `<!-- \|new_msg\| -->` | New message count |
| `<!-- \|auth_key\| -->` | Auth key for logout |

---

## Documentation (`/docs/`)

All documentation lives here, not in code comments (Jcink can corrupt comments).

| File | Purpose |
|------|---------|
| `installation.md` | How to install the theme |
| `customization.md` | How to change colors, fonts, etc. |
| `structure.md` | This file - project organization |

---

## PRPs (`/PRPs/`)

Product Requirements Prompts for AI-assisted development. Each feature has a PRP that includes:
- Context (project rules, existing patterns)
- Implementation steps
- Success criteria

Use `/generate-prp` to create new PRPs from feature requests.
Use `/execute-prp` to implement a feature from its PRP.

---

## Examples (`/examples/`)

Code snippets demonstrating common patterns. Add examples here for:
- Custom post templates
- Profile customizations
- Color scheme variations
- JavaScript enhancements
