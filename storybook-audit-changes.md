# Storybook Audit — Changes Applied

**Source:** Storybook Audit.docx (May 1, 2026)

---

## Inputs

### Button
**File:** `src/theme/overrides/button.override.ts`
- Removed box shadow from all `contained` (Primary) button variants — added `boxShadow: 'none'` to `containedPrimary`, `containedError`, and `containedSuccess` and all their hover/active/disabled states.

**File:** `src/components/Inputs/Button/Button.stories.tsx`
- Updated `variant` argType control labels so `contained` displays as **"Primary (Filled)"** in the Storybook controls panel. Underlying MUI prop value is unchanged.

**Not yet fixed (requires further design/theme work):**
- Normal button height should be 36px (currently renders ~40px due to MUI default padding)
- Small button should be exactly 30px
- `contained` variant name in code — renaming to "primary" would be a breaking API change; label mapping in stories addresses the Storybook UI only
- Disabled state font/fill colors (requires palette audit)
- Outlined button default/hover/disabled color corrections
- Text button color and hover corrections
- Icon boolean (startIcon/endIcon already supported as props; a dedicated `icon` boolean control can be added once icon library is imported)
- Missing: Icon Button, Button Group, Split Button, Toggle Button, Floating Action Button — pending icon import

---

### Checkbox
**File:** `src/components/Inputs/Checkbox/Checkbox.stories.tsx`
- Restricted `color` control to `['primary']` only with a note in the description
- Restricted `size` control to `['medium']` only with a note in the description
- Removed the **Sizes** story (showed small vs. medium; small size not needed)
- Removed the **Colors** story (showed all MUI colors; only primary is used)

**Not yet fixed:**
- Checkbox visual styling (color, radius, stroke weight) — requires theme/CSS override work
- Hover color — requires theme override
- Hovering/clicking label to activate hover/select state — requires `FormControlLabel` interaction investigation
- Disabled color correction

---

### RadioButton
**File:** `src/components/Inputs/RadioButton/RadioButton.stories.tsx`
- Restricted `color` control to `['primary']` only
- Restricted `size` control to `['medium']` only
- Removed the **Sizes** story
- Removed the **Colors** story

**Not yet fixed:**
- Hover color correction
- Hovering/clicking label to activate hover/select state
- Disabled state circle should be blue — requires theme override
- Radio Group label font color should be `palette.scale.d80` — requires FormLabel override

---

### Slider
**File:** `src/components/Inputs/Slider/Slider.stories.tsx`
- Restricted `color` control to `['primary']` only
- Removed the **Colors** story

**Not yet fixed:**
- Track color split (left side lighter blue, right side gray) — requires MUI Slider rail/track override
- Disabled colors — requires theme override
- Number labels font (B3) — requires `valueLabelFormat` or CSS override

---

### Switch
**File:** `src/components/Inputs/Switch/Switch.stories.tsx`
- Restricted `color` control to `['primary']` only
- Removed the **Colors** story

**Not yet fixed:**
- Switch group label color (`palette.scale.d80`) — requires FormLabel override

---

### DatePicker / DateRangePicker / SearchBar / Select / TextField / TransferList
**Not changed** — these components have multiple visual/behavioral corrections noted in the audit (label positioning, stroke colors, heights, etc.) that require deeper component refactoring. Flagged for a separate pass.

Key notes:
- DateRangePicker: LMI/AI2C will not use the MUI premium date range picker. The two-field makeshift range approach in Figma should be implemented as a custom component (see Figma link in audit doc).
- TextField/Select/DatePicker: Label should always appear at the top (deviating from MUI default `label` float behavior).

---

## Data Display

### Avatar
**File:** `src/components/DataDisplay/Avatar/Avatar.stories.tsx`
- Restricted `variant` control to `['circular']` only — removed `rounded` and `square` options per designer request

**Not yet fixed:**
- Text centering (vertical alignment) — may require avatar override tweak

---

### Chip
**File:** `src/theme/overrides/chip.override.ts`
- Fixed plain chip hover: changed `outlinedDefault` hover from `&:hover` to `&.MuiChip-clickable:hover` so non-interactive plain chips no longer show a hover shadow

**Not yet fixed:**
- Check icon color in selected variants
- Full hover state corrections across chip types

---

### Gauge / Plot
**Not changed** — visual corrections (padding, rounded edges, bar radius) require component-level work. Flagged for separate pass.

---

### Tag
**File:** `src/components/DataDisplay/Tag/Tag.tsx`
- Fixed **red transparent** fill color: changed `palette.error.l80` → `palette.error.l90`
- Fixed **all unfilled variant** backgrounds: changed `palette.layout.base` → `'transparent'` for green, yellow, red, blue, and gray unfilled tags
- Fixed **transparent and unfilled border rendering**: replaced `border: 1px solid` with `boxShadow: inset 0 0 0 1px` so the outline is drawn inside the component bounds, preventing height increase when switching between solid and outlined variants

---

## Surfaces

### Accordion
**File:** `src/components/Surfaces/Accordion/Accordion.tsx`
- Removed `disabled` prop from `AccordionBaseProps` Pick (designers confirmed this state is not needed)
- Fixed **primary variant** collapsed padding: `py` changed from `12px` → `20px`
- Fixed **secondary variant** collapsed padding: `py` changed from `4px` → `12px`
- Fixed **expanded content top padding**: `pt` changed from `0` → `16px` (spacing between title and content when open)
- Fixed **title font**: changed from `fontSize: 16, fontWeight: 500` → `fontSize: 14, fontWeight: 400` (B2 Roboto)

**File:** `src/components/Surfaces/Accordion/Accordion.stories.tsx`
- Removed `disabled` argType from controls
- Removed the **Primary: Disabled** story
- Updated sample content typography from `body2 / text.secondary` → `body1 / scale.d80`

**Not yet fixed:**
- Arrow icon (closed vs. open state) — ExpandMoreIcon is currently used; will update once custom icon set is imported

---

### Card
**File:** `src/components/Surfaces/Card/Card.stories.tsx`
- Updated sample content typography from `variant='body2' color='text.secondary'` → `variant='body1' sx={{ color: scale.d80 }}`

---

### Container
**File:** `src/components/Surfaces/Container/Container.stories.tsx`
- Updated sample content typography from `variant='body2' color='text.secondary'` → `variant='body1' sx={{ color: scale.d80 }}`
- Updated `colorBar` argType description to note it is **only intended for use on the secondary variant**

---

### Pop-up
**File:** `src/components/Surfaces/Popup/Popup.stories.tsx`
- Updated sample content typography from `variant='body2' color='text.secondary'` → `variant='body1' sx={{ color: scale.d80 }}`

---

### Stepper
**File:** `src/components/Surfaces/Stepper/Stepper.tsx`
- Increased completed step hover area padding to `px: 1` (8px) and `py: 0.5` (4px) per designer spec

---

## Colors / Typography

### Colors
**File:** `src/theme/Colors.stories.tsx` *(new)*
- Created a dedicated **Foundation/Colors** page in Storybook at `title: 'Foundation/Colors'`
- Displays all palette tokens as swatches — each swatch shows the hex value on the color block, the short token key (e.g. `main`, `l80`) as the label, and the full `palette.*.*` path below
- Theme-aware via `useTheme()`: switching themes in the toolbar automatically updates all swatches to the correct light/dark hex values
- Sections: Primary, Danger (`error`), Caution (`warning`), Info, Confirmation (`success`), Scale, Layout, Graph, Stacked Bars, Operational Readiness
- Empty palette slots (e.g. `warning.l90` which is intentionally blank in the palette) are automatically hidden
- Controls panel is hidden for this page (`showPanel: false`) since there are no interactive controls

### Typography
- **US Army fonts** (Regular, Bold, Light) are referenced in `avatar.override.ts` (`fontFamily: '"US Army", sans-serif'`) but the font files are not yet loaded. Adding them requires importing the font assets and registering them in the global CSS or theme. Flagged for a separate pass once font files are available.

---

## Summary of Files Changed

| File | Changes |
|------|---------|
| `src/theme/Colors.stories.tsx` *(new)* | Foundation/Colors page — all palette tokens with semantic names and hex codes |
| `src/theme/overrides/button.override.ts` | Removed box shadow from contained buttons |
| `src/theme/overrides/chip.override.ts` | Plain chip hover restricted to clickable chips only |
| `src/components/Inputs/Button/Button.stories.tsx` | Variant label mapping (contained → "Primary (Filled)") |
| `src/components/Inputs/Checkbox/Checkbox.stories.tsx` | Color/size restricted to primary/medium; removed Colors and Sizes stories |
| `src/components/Inputs/RadioButton/RadioButton.stories.tsx` | Color/size restricted to primary/medium; removed Colors and Sizes stories |
| `src/components/Inputs/Slider/Slider.stories.tsx` | Color restricted to primary; removed Colors story |
| `src/components/Inputs/Switch/Switch.stories.tsx` | Color restricted to primary; removed Colors story |
| `src/components/DataDisplay/Avatar/Avatar.stories.tsx` | Variant restricted to circular only |
| `src/components/DataDisplay/Tag/Tag.tsx` | Red transparent fill fixed; unfilled backgrounds set to transparent; border → inset box-shadow |
| `src/components/Surfaces/Accordion/Accordion.tsx` | Removed disabled prop; fixed paddings; fixed title font |
| `src/components/Surfaces/Accordion/Accordion.stories.tsx` | Removed disabled argType/story; updated sample content typography |
| `src/components/Surfaces/Card/Card.stories.tsx` | Updated sample content typography |
| `src/components/Surfaces/Container/Container.stories.tsx` | Updated sample content typography; colorBar description note |
| `src/components/Surfaces/Popup/Popup.stories.tsx` | Updated sample content typography |
| `src/components/Surfaces/Stepper/Stepper.tsx` | Increased completed step hover padding |
