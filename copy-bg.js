import fs from 'fs';
import path from 'path';

const source = "C:\\Users\\bmkld\\.gemini\\antigravity-ide\\brain\\2f8e3b8f-643d-46aa-aecd-8e30d56b5819\\media__1783951180941.jpg";
const destDir = path.join(process.cwd(), 'public', 'images');
const dest = path.join(destDir, 'bg-texture.jpg');

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(source, dest);
  console.log("Successfully copied background texture!");
} catch (err) {
  console.error("Error copying file:", err);
}
