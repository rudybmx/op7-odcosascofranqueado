import fs from 'fs';
import path from 'path';

const sourceDir = "C:\\Users\\bmkld\\.gemini\\antigravity-ide\\brain\\2f8e3b8f-643d-46aa-aecd-8e30d56b5819";
const destDir = path.join(process.cwd(), 'public', 'images', 'treatments');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(sourceDir);

const treatments = ['implantes', 'aparelhos', 'clareamento', 'proteses', 'lentes', 'limpeza'];

for (const treatment of treatments) {
  // Get all files for this treatment, sort them alphabetically to get the newest timestamp
  const treatmentFiles = files
    .filter(f => f.startsWith(treatment + '_') && f.endsWith('.png'))
    .sort();
  
  const newestFile = treatmentFiles.pop(); // The last one is the newest
  
  if (newestFile) {
    fs.copyFileSync(path.join(sourceDir, newestFile), path.join(destDir, treatment + '.png'));
    console.log(`Copied newest ${treatment}.png`);
  }
}
