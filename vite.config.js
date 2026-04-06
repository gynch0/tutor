import { defineConfig } from 'vite';
import { writeFileSync, readFileSync, mkdirSync } from 'fs';
import { join } from 'path';

export default defineConfig({
  plugins: [
    {
      name: 'inline-css-and-htaccess',
      closeBundle() {
        const distDir = join(__dirname, 'dist');
        const assetsDir = join(distDir, 'assets');

        // 1. .htaccess для папки assets
        mkdirSync(assetsDir, { recursive: true });
        writeFileSync(join(assetsDir, '.htaccess'), [
          '<IfModule mod_headers.c>',
          '    Header set Cache-Control "max-age=31536000, public, immutable"',
          '</IfModule>',
          '',
        ].join('\n'));

        // 2. Встраиваем CSS inline в dist/index.html
        const htmlPath = join(distDir, 'index.html');
        let html = readFileSync(htmlPath, 'utf8');

        const linkRe = /<link rel="stylesheet" crossorigin href="(\/assets\/index-[^"]+\.css)">/;
        const match = html.match(linkRe);

        if (match) {
          const cssFile = join(distDir, match[1]);
          const css = readFileSync(cssFile, 'utf8');
          html = html.replace(match[0], `<style>${css}</style>`);
          writeFileSync(htmlPath, html);
          console.log('✓ CSS встроен inline в dist/index.html');
        }
      },
    },
  ],
});
