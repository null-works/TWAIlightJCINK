# Installing TWAILIGHT

This guide walks you through installing the TWAILIGHT theme on your Jcink forum.

---

## Prerequisites

- A Jcink Premium or Jcink+ forum
- Admin access to the ACP (Admin Control Panel)

---

## Step 1: Create a New Skin

1. Go to **ACP > Skins & Templates > Manage Skin Sets**
2. Click **Create New Skin Set**
3. Name it "TWAILIGHT" (or your preferred name)
4. Click **Create**

---

## Step 2: Add the CSS

1. In your new skin, go to **CSS**
2. Delete any existing CSS content
3. Copy the entire contents of `src/css/twailight.css`
4. Paste it into the CSS editor
5. Click **Save**

---

## Step 3: Set Up the Board Wrapper

1. Go to **Wrappers** in your skin
2. Select **Board Wrapper**
3. Delete the existing content
4. Copy the entire contents of `src/templates/wrapper.html`
5. Paste it into the wrapper editor
6. Click **Save**

---

## Step 4: Add the JavaScript

There are two ways to add the JavaScript:

### Option A: External File (Recommended)

1. Host `src/js/twailight.js` somewhere (GitHub, your own server, etc.)
2. In the wrapper, update the script src to point to your hosted file:
   ```html
   <script src="https://your-host.com/twailight.js"></script>
   ```

### Option B: Inline in Wrapper

1. Replace the `<script src="twailight.js"></script>` line with:
   ```html
   <script>
   // Paste the entire contents of twailight.js here
   </script>
   ```

---

## Step 5: Add Google Fonts

The theme uses Google Fonts. The wrapper already includes the font links, but you can customize them:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">
```

To use different fonts, update both this link AND the CSS variables (see customization.md).

---

## Step 6: Set as Default (Optional)

1. Go to **ACP > Skins & Templates > Manage Skin Sets**
2. Find your TWAILIGHT skin
3. Click **Set as Default**

---

## Troubleshooting

### Theme toggle not working
- Make sure the JavaScript is loading correctly
- Check browser console for errors
- Verify the script tag is after `<% JAVASCRIPT %>`

### Fonts not loading
- Check that the Google Fonts link is in the `<head>`
- Try accessing your forum in incognito mode

### Layout looks broken
- Clear your browser cache
- Make sure you copied the entire CSS file
- Check that no Jcink tags were accidentally removed from the wrapper

### Mobile menu not appearing
- Verify JavaScript is loading
- Check that the hamburger button has the correct ID (`mobileMenuToggle`)

---

## Next Steps

- Read [customization.md](customization.md) to personalize colors and fonts
- Check [structure.md](structure.md) to understand the file organization
