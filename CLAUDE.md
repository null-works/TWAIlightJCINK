# TWAILIGHT - Claude Code Rules

## Project Overview

TWAILIGHT is a modern, vanilla Jcink forum theme designed for:
- **Human readability**: Clean structure, logical organization, self-explanatory naming
- **AI-assisted editing**: Clear patterns any LLM can understand and extend
- **PHP extensibility**: Modular hooks for external Docker server features
- **Beginner-friendly customization**: No frameworks, no build tools, everything editable by hand

Target audience: Roleplay forum communities (RPC standards apply)

---

## Tech Stack

- **HTML**: Jcink template syntax with `<!-- |variable| -->` tags
- **CSS**: Vanilla CSS with custom properties (`:root` variables)
- **JavaScript**: Vanilla JS, jQuery allowed (Jcink includes it)
- **PHP**: Future features via external Docker server (not inline)
- **NO**: Frameworks, preprocessors, build tools, or anything requiring compilation

---

## Code Conventions

### File Organization
- Keep files modular but not over-engineered
- One CSS file for the base theme (users paste into Jcink ACP)
- Separate template files for each Jcink template section
- `/docs/` for all documentation (not inline comments)

### CSS Rules
1. **Use CSS custom properties** for all customizable values:
   ```css
   :root {
     /* Use RGB values without rgb() for gradient manipulation */
     --tw-accent-1: 191, 126, 67;
     --tw-accent-2: 147, 110, 77;

     /* Responsive font sizes with clamp() */
     --tw-text-xs: clamp(10px, calc(10px + 0.1vw), 11px);
     --tw-text-body: clamp(14px, calc(14px + 0.15vw), 16px);

     /* Font families */
     --tw-font-sans: "Inter", sans-serif;
     --tw-font-mono: "Cascadia Code", monospace;
   }
   ```
2. **Prefix all custom properties** with `--tw-` (TWAILIGHT namespace)
3. **Semantic naming**: `--tw-text-primary` not `--tw-dark-gray`
4. **Group variables** by purpose: colors, fonts, spacing, borders, transitions
5. **RGB values for colors** - store as `R, G, B` so they can be used in gradients:
   ```css
   background: rgba(var(--tw-accent-1), 0.5);
   ```
6. **Minimal comments in CSS** - Jcink can mangle excessive comments
7. **Section headers with TOC** - use numbered sections with ctrl+f navigation:
   ```css
   /* =01. ROOT VARIABLES */
   /* =02. MEMBER GROUPS */
   ```

### HTML/Template Rules
1. **Semantic HTML5** elements where possible
2. **Accessibility required**: aria-labels, focus states, keyboard navigation
3. **Mobile-first responsive** - RPC will roast us otherwise
4. **Jcink variables** use format: `<!-- |variable_name| -->`
5. **Class naming**: lowercase, hyphenated, descriptive (`.post-author`, `.topic-title`)

### JavaScript Rules
1. **Vanilla JS preferred**, jQuery acceptable (Jcink provides it)
2. **No frameworks** - must be copy-paste friendly
3. **Progressive enhancement** - core functionality works without JS
4. **Event delegation** where practical

---

## Testing Requirements

### Browser Support
- Chrome (primary)
- Other modern browsers: best effort

### Responsive
- **Mobile-friendly is mandatory**
- Test at 320px, 768px, 1024px, 1440px breakpoints
- Navigation must be usable on touch devices

### Validation
- Valid CSS (no broken selectors)
- Accessible contrast ratios (WCAG AA minimum)
- No console errors

### Jcink-Specific
- Test with subaccounts enabled
- Test with roleplay character application profiles
- Verify Jcink variable parsing doesn't break

---

## Documentation Standards

### In-Code Comments
- **Minimal** - section headers only
- Jcink's parser can corrupt excessive comments
- Save explanations for `/docs/` files

### KB Documentation (in /docs/)
- One markdown file per major feature/component
- Include: what it does, how to customize, common modifications
- Use code examples liberally
- Write for someone who's never coded before

---

## AI Assistant Instructions

When working on this project:

1. **Read relevant docs first** - check `/docs/` for existing documentation
2. **Check examples** - look at `/examples/` for established patterns
3. **Preserve the namespace** - all CSS variables use `--tw-` prefix
4. **No copying from reference files** - this is a clean-room implementation
5. **Test suggestions** - verify CSS is valid, HTML is semantic
6. **Mobile-first** - always consider responsive behavior
7. **Document changes** - update `/docs/` when adding features

### Before Making Changes
- Review the existing CSS variable structure
- Check if similar patterns already exist
- Consider how a beginner would customize this

### After Making Changes
- Verify no CSS syntax errors
- Check mobile responsiveness
- Update relevant documentation in `/docs/`

---

## Resources

- **Jcink Support**: https://jcink.com/main/wiki/
- **Project Repo**: https://github.com/null-works/TWAIlightJCINK
