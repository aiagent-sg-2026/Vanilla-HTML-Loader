# Loading Pattern Research — 2026-07-22

## Sources reviewed

- Material UI Progress and Skeleton documentation
- Ant Design Spin and Skeleton documentation
- Bootstrap Spinner and Placeholder documentation
- MDN IntersectionObserver, progressbar, progress element, aria-busy, and feed references

## Findings translated into Loader Studio

1. Use determinate progress when the application knows completion percentage.
2. Use indeterminate spinners when wait duration is unknown.
3. Preserve the surrounding content shape for first-load card, list, media, avatar, and feed experiences through skeletons.
4. Keep block-level loading contextual by dimming existing content instead of replacing the whole page.
5. Use a native progress element where possible; custom progressbars must keep aria-valuenow and an accessible name synchronized.
6. Mark regions as aria-busy while they are being updated.
7. Keep spinner animations CSS-first and provide status semantics.
8. Automatic infinite loading should use IntersectionObserver rather than continuous scroll-position calculations.
9. Keep a manual Load More control as a keyboard-accessible and compatibility fallback.
10. Infinite collections should announce loading state without moving focus or interrupting the current reading position.

## Implemented loader set

- Native Progress Element
- Buffered Progress Bar
- File Queue Progress
- Content Block Spinner
- Data Table Loading Overlay
- Media Card Skeleton
- Avatar Paragraph Skeleton
- Comment Thread Skeleton
- Feed Item Skeleton
- Image Placeholder Skeleton

## Infinite scroll design

- A bottom sentinel is observed with IntersectionObserver.
- Loading begins only after real user scrolling or navigation input, preventing immediate page-load expansion.
- The observer disconnects during a batch update and reconnects after rendering, preventing duplicate loads.
- The existing button remains visible as a fallback.
- The collection uses aria-busy during updates and an aria-live status announces newly loaded cards.
- Search, category, Favorites, Recent, and layout changes reset the visible window and observer state.
