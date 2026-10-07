import fs from 'fs';
import path from 'path';

const source = "C:\\Users\\bmkld\\.gemini\\antigravity-ide\\brain\\2d95707c-acf6-484a-a431-f7f5f320997a\\media__1783695024573.jpg";
const destDir = path.join(process.cwd(), 'public', 'images');
const dest = path.join(destDir, 'hero-bg.jpg');

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log("✅ Imagem copiada com sucesso para public/images/hero-bg.jpg!");
  } else {
    console.error(`❌ Erro: Arquivo de origem não encontrado em:\n${source}`);
  }
} catch (err) {
  console.error("❌ Ocorreu um erro ao copiar o arquivo:", err.message);
}
