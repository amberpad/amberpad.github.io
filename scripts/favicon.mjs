import favicons from "favicons";
import fs from "fs/promises";
import path from "path";

const src = path.resolve("./public/logo.svg"); // Icon source file path.
const dest = path.resolve("./public/favicons"); // Output directory path.
const assetsDest = path.resolve("./src/assets/favicons.json");

// Configuration (see above in the README file).
const configuration = {
  path: "/favicons",
  appName: "Amberpad",
  appShortName: "Amberpad",
  appDescription: "Simple, efficient, and smart. The note-taking app with a web chat aesthetic.",
};

// Below is the processing.
const response = await favicons(src, configuration);
await fs.mkdir(dest, { recursive: true });
await Promise.all(
  response.images.map(
    async (image) =>
      await fs.writeFile(path.join(dest, image.name), image.contents),
  ),
);
await Promise.all(
  response.files.map(
    async (file) =>
      await fs.writeFile(path.join(dest, file.name), file.contents),
  ),
);
//await fs.writeFile(assetsDest, JSON.stringify(response.html));
console.log(`HTML headers (Copy into your head tag):\n${response.html.join("\n")}`);
