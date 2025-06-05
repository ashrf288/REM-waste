# Skip Selection App

A responsive React + MUI (Material-UI) web application that allows users to select a skip size and confirm their choice through an intuitive UI with stepper navigation and confirmation dialogs.

## 📦 Features

- **Skip Selection Cards**: Users can select from a range of available skips. The selected card is visually highlighted.
- **Confirmation Dialog**: On selecting a skip, a dialog appears immediately to confirm the user's choice.
- **Floating Stepper**: A horizontally fixed stepper guides the user through the selection process. It expands on hover to show step labels.
- **Responsive Design**: Optimized for mobile and desktop using MUI's `useMediaQuery`.

## 💡 Components Overview

### `SkipPage.tsx`
- Main page container.
- Fetches available skips.
- Renders:
  - Page title and underline.
  - `HorizontalStepper` (desktop only).
  - `SkipCard` grid.
  - `ConfirmationDialog` component (on selection).

### `SkipCard.tsx`
- Displays each skip with its size and price.
- Allows users to select or unselect a skip.

### `ConfirmationDialog.tsx`
- A reusable dialog component that appears immediately when a skip is selected.
- Shows selected skip name and price.
- Offers Cancel and Confirm options.

### `HorizontalStepper.tsx`
- A custom stepper that floats at the bottom of the screen.
- Expands on hover to reveal step labels.
- Highlights the active step with scaling and color transition animations.

## 🖌️ Styling & UX Decisions

- **Stepper Color**: Switched to white icons with dark backgrounds for better contrast.
- **Stepper Animation**: Slowed hover transition for smoother experience (`0.6s`).
- **FAB Removed**: Originally used a Floating Action Button (`ContinueFAB`), but replaced with immediate dialog for cleaner flow.
- **Dialogs**: Controlled via parent state. Confirmation shown without any floating buttons.

## 🚀 Future Improvements

- Add real routing to next steps after confirmation.
- Integrate skip booking API.
- Use Context or global state management (e.g. Zustand or Redux) for skip selection.
- Add unit and integration tests using `React Testing Library`.

## 🛠️ Tech Stack

- React 18
- TypeScript
- Material UI (MUI v5)
- Custom hooks (e.g. `useSkipsByLocation`)
- Vite or Create React App (based on your setup)

