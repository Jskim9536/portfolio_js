# Portfolio design system

The site keeps the existing navy, blue, white, and Pretendard identity. The 2026 refinement uses decisive type scale, alternating density, clear evidence hierarchy, and scroll-led pacing without copying external visual assets or layouts.

## Foundations

- Ink: `#15213d` for primary text and dark surfaces.
- Action blue: `#245eea` for navigation state, progress, evidence, and primary actions.
- Ice: `#edf3ff` for the flagship case surface.
- Paper: `#f8f9fb` for the page ground.
- Grid: `1240px` maximum content width, `40px` desktop gutter, `32px` mobile gutter.
- Shape rule: `24px` major project surfaces, `20px` cards, `14-16px` nested media, `10px` primary actions, and pills only for compact utility controls.
- Theme: one light surface family across sections, with a matching system-preference dark palette rather than isolated inverted sections.

## Components

- `ScrollProgress`: a three-pixel page-level position indicator. It uses a damped spring and respects reduced-motion preferences.
- `ProjectCard`: an alternating two-column evidence scene with claim, role, concise decisions, one leading metric, and one source-approved visual.
- `ProjectVisual`: a restrained image parallax layer. Internal AI-call-center evidence is replaced by a code-native public abstraction.
- `LanguageSwitch`: a stable route switch between Korean `/` and English `/en` with localized metadata.
- `AnimateIn`: one-time viewport reveal with reduced-motion handling.

## Motion principles

- Motion explains reading order; it does not decorate every element.
- Desktop case cards remain in view briefly as the next case arrives, creating a chapter-like handoff.
- Evidence images move only a few pixels across their scroll range, and captions sit below media instead of covering it.
- Mobile removes sticky stacking and keeps the document flow predictable.
- Reduced-motion mode disables parallax, smooth scrolling, and positional reveals.

## Editorial rules

- One case, one takeaway, one primary metric.
- Outcome, authored scope, shipped scope, and in-progress work remain distinct.
- Korean copy is written directly in Korean rather than mirroring English syntax.
- English copy prioritizes concise product language over literal translation.
- Confidential product logic, customer data, internal identifiers, and commercial details are never used as public visuals.
