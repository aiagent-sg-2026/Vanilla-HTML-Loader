# Design System Consistency Audit

- Project: `project_69be700d-ca6a-4def-8b2a-6e05eeea7d0d`
- CSS sources: css/tokens.css, css/layout.css, css/components.css, css/responsive.css
- Findings: 4

## Metrics

```json
{
  "colorCount": 60,
  "fontSizeCount": 9,
  "spacingValueCount": 62,
  "radiusValueCount": 10,
  "buttonSelectorCount": 32,
  "tableSelectorCount": 0
}
```

## Suggested CSS Variables

```css
:root {
  --color-1: #0b1020;
  --color-2: #0d1422;
  --color-3: #0e1628;
  --color-4: #0f172a;
  --color-5: #101827;
  --color-6: #141d2d;
  --font-size-1: 10px;
  --font-size-2: 11px;
  --font-size-3: 12px;
  --font-size-4: 13px;
  --font-size-5: 14px;
  --space-1: -12px;
  --space-2: -4px;
  --space-3: -8px 0 16px;
  --space-4: 0;
  --space-5: 0 -6px 14px;
  --space-6: 0 0 16px;
  --space-7: 0 0 7px;
  --space-8: 0 10px;
  --radius-1: 10px;
  --radius-2: 11px;
  --radius-3: 12px;
  --radius-4: 14px;
}
```

## Findings

| Severity | Category | ID | Finding | Recommendation |
| --- | --- | --- | --- | --- |
| medium | color | color-drift | 60 distinct color values found. | Consolidate colors into semantic tokens such as --color-bg, --color-text, --color-primary, --color-border, --color-danger, and --color-success. |
| medium | spacing | spacing-drift | 62 distinct margin/padding/gap values found. | Use a spacing scale such as 4, 8, 12, 16, 24, 32px and reference it through CSS variables. |
| low | radius | radius-drift | 10 distinct border-radius values found. | Normalize component radii into tokens such as --radius-sm, --radius-md, and --radius-lg. |
| medium | button | button-variant-drift | Button-like selectors use too many background, radius, or padding variants. | Define primary, secondary, danger, ghost, and icon button variants with shared height, radius, padding, and focus styles. |
