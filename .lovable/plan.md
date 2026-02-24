
## Fixes Required

### 1. Navbar Logo — Maximum Visibility
The uploaded logos (image-2.png = dark bg version, image-3.png = light bg version) are the correct theme-aware logos. The current logos are JPGs with non-transparent backgrounds. The fix is to:
- Copy `user-uploads://image-2.png` → `src/assets/logo-dark.png` (white logo for dark mode)
- Copy `user-uploads://image-3.png` → `src/assets/logo-light.png` (black logo for light mode)
- Increase navbar logo height significantly — `h-14 md:h-16 lg:h-20` — so it fills the navbar properly
- Give the navbar a minimum height to accommodate the larger logo

### 2. Card Hover — Dark Mode Fix
**Problem:** In dark mode, card hover overlays use light/white background colors that look bad. The service cards (`bg-card`) in dark mode use `hsl(var(--card))` = `#1a1a1a`, but the hover state needs to contrast well.

**Fix for Service Cards (ServicesSection):** The cards themselves look fine since they use `bg-card`. The issue is on Core Values cards — `bg-background/60` in dark mode is dark, but in light mode it's near-white. On hover, cards need a reversed color logic:
- In **dark mode**: card bg is dark `#1a1a1a`, hover border orange → looks clean ✓
- In **light mode**: card bg is white, hover border orange → looks clean ✓

The real issue is the "What Makes Us Different" section and "Careers" sections' hover overlay panels look different per mode. Since these have fixed black rgba overlays (`rgba(0,0,0,0.88)` and `rgba(13,13,13,0.92)`), they're always dark — which is correct since they sit over images. No change needed there.

The actual card hover issue is in the **Core Values** and **Services** sections in dark mode — the `bg-background/60` on core value items creates a see-through dark card on dark background, making text hard to read. Fix: use `bg-card` instead of `bg-background/60` for core values cards.

### 3. Careers Background — Dark Mode White Issue
**Problem:** `bg-foreground/85` — in light mode `foreground` is `#1a1a1a` (black) → correct. In **dark mode** `foreground` is `#fcfcfc` (nearly white!) → the overlay becomes white, washing out the image.

**Fix:** Replace `bg-foreground/85` with a fixed `style={{ backgroundColor: "rgba(0,0,0,0.82)" }}` — always black regardless of theme.

### 4. Careers Section — text color fix
With the fixed black overlay, text inside the careers section is using `text-primary-foreground` (white) which is fine, but `text-primary-foreground/70` and `text-primary-foreground/60` should remain since they're white-based.

---

## Technical Changes

### Files to Edit

**`src/components/Navbar.tsx`**
- Import new `logo-dark.png` and `logo-light.png`
- Increase logo size: `h-14 md:h-16 lg:h-20`
- Navbar height: `h-20 md:h-22 lg:h-28`

**`src/components/Sections.tsx`**
- Core Values cards: change `bg-background/60` → `bg-card` for better dark mode contrast
- Careers section background overlay: change `bg-foreground/85` → fixed `rgba(0,0,0,0.82)` using inline style

### Assets to Copy
- `user-uploads://image-2.png` → `src/assets/logo-dark.png`
- `user-uploads://image-3.png` → `src/assets/logo-light.png`

These replace the current `logo-white.jpg` and `logo-black.jpg` imports across both `Navbar.tsx` and `Sections.tsx` (Footer).
