import fs from 'fs';
import path from 'path';

const source = "C:\\Users\\bmkld\\.gemini\\antigravity-ide\\brain\\2f8e3b8f-643d-46aa-aecd-8e30d56b5819\\estrutura_biosseguranca_1783952955778.png";
const destDir = path.join(process.cwd(), 'public', 'images', 'estrutura');
const dest = path.join(destDir, 'biosseguranca.png');

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(source, dest);
  console.log("Successfully copied biosseguranca.png!");
} catch (err) {
  console.error("Error copying file:", err);
}
