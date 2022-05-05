# Shell game

End result available at https://shell-game-923rgvi5l-fdmd.vercel.app/ (Desktop only)

## Scripts

Install with

```bash
npm i
```

and run the dev script with

```bash
npm run dev
```

# Folder structure

At the top level there are three main folders

    .
    ├── components        # Main components folder
    │   ├── Game          # Main component where most of the logic is
    │   ├── Ball          # Ball component
    │   ├── Controls      # Controls for starting/stopping the game
    │   ├── Result        # Shows whether you won or lost the game
    │   ├── Shell         # Simulates a shell to hide the ball
    ├── lib               # Shared code between components
    ├── pages             # App pages (only one in this case)
