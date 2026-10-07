import fs from 'fs';
import path from 'path';

const sourceDir = "C:\\Users\\bmkld\\.gemini\\antigravity-ide\\brain\\2f8e3b8f-643d-46aa-aecd-8e30d56b5819";
const destDir = path.join(process.cwd(), 'public', 'images', 'estrutura');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir);

const images = ['estrutura_recepcao', 'estrutura_consultorio', 'estrutura_fachada', 'estrutura_biosseguranca'];

for (const imgName of images) {
  const matchedFiles = files
    .filter(f => f.startsWith(imgName + '_') && f.endsWith('.png'))
    .sort();
  
  const newestFile = matchedFiles.pop();
  if (newestFile) {
    const finalName = imgName.replace('estrutura_', '') + '.png';
    fs.copyFileSync(path.join(sourceDir, newestFile), path.join(destDir, finalName));
    console.log(`Copied ${finalName}`);
  }
}
