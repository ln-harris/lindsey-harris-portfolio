# Lindsey Harris — Portfolio

My personal portfolio built with React and Vite.

[View the live website 🖥️](https://ln-harris.github.io/lindsey-harris-portfolio/)

## Run locally

1. Install Node.js 22.
2. Unzip the project and open a terminal in the folder containing `package.json`.
3. Run these commands and open the local URL shown in the terminal.

   ```sh
   npm ci
   npm run dev
   ```

## Deploy

- **GitHub Pages** — In the GitHub repository, go to **Settings → Pages** and select **GitHub Actions** as the source. Push to `main` or run **Deploy portfolio to GitHub Pages** from the **Actions** tab.
- **Other static hosts** — Run `npm ci` and `npm run build`, then publish the contents of `dist/`.

The contact form uses EmailJS and requires an internet connection to send messages.
