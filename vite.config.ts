import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig } from 'vite';

const logoUploaderPlugin = () => ({
  name: 'logo-uploader',
  configureServer(server) {
    const srcPath = 'C:/Users/bmkld/.gemini/antigravity-ide/brain/2f8e3b8f-643d-46aa-aecd-8e30d56b5819/media__1783964477402.jpg';
    const destPath = path.resolve(__dirname, 'public/images/footer-bg.jpg');
    const srcDestPath = path.resolve(__dirname, 'src/footer-bg.jpg');

    const heroSrcPath = 'C:/Users/bmkld/.gemini/antigravity-ide/brain/2f8e3b8f-643d-46aa-aecd-8e30d56b5819/media__1783966514760.jpg';
    const heroDestPath = path.resolve(__dirname, 'src/hero-bg.jpg');

    const lentesSrcPath = 'C:/Users/bmkld/.gemini/antigravity-ide/brain/2f8e3b8f-643d-46aa-aecd-8e30d56b5819/media__1783970621454.png';
    const lentesDestPath = path.resolve(__dirname, 'public/images/treatments/lentes.png');

    try {
      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        fs.copyFileSync(srcPath, srcDestPath);
        console.log('Successfully copied footer-bg.jpg to public and src directories!');
      }
      
      if (fs.existsSync(heroSrcPath)) {
        fs.copyFileSync(heroSrcPath, heroDestPath);
        console.log('Successfully copied 4k hero-bg.jpg to src directory!');
      }

      if (fs.existsSync(lentesSrcPath)) {
        const dir = path.dirname(lentesDestPath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        fs.copyFileSync(lentesSrcPath, lentesDestPath);
        console.log('Successfully copied lentes.png to public treatments directory!');
      }
    } catch (err) {
      console.error('Failed to copy images:', err);
    }

    server.middlewares.use((req, res, next) => {
      if (req.url === '/upload-logo' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            const base64Data = data.image.replace(/^data:image\/png;base64,/, "");
            fs.writeFileSync(path.resolve(__dirname, 'public/images/logo.png'), base64Data, 'base64');
            res.statusCode = 200;
            res.end('Logo saved successfully!');
          } catch (err) {
            res.statusCode = 500;
            res.end('Error: ' + err.message);
          }
        });
      } else {
        next();
      }
    });
  }
});

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), logoUploaderPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {
        ignored: ['**/.agents/**'],
      },
    },
  };
});





