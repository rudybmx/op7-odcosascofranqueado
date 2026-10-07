import fs from 'fs';
import path from 'path';

const source = "C:\\Users\\bmkld\\.gemini\\antigravity-ide\\brain\\6b300482-5478-466e-a601-5115225a6422\\media__1783704646285.png";
const destDir = path.join(process.cwd(), 'public', 'images');
const dest = path.join(destDir, 'logo.png');

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log("✅ Imagem copiada com sucesso para public/images/logo.png!");
  } else {
    console.error(`❌ Erro: Arquivo de origem não encontrado em:\n${source}`);
  }
} catch (err) {
  console.error("❌ Ocorreu um erro ao copiar o arquivo:", err.message);
}
