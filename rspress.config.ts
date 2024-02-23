import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  lang: 'zh',
  publicPath:'./',
  // locales 为一个对象数组
  locales: [
    {
      lang: 'en',
      // 导航栏切换语言的标签
      label: 'English',
      title: 'Modern.js',
      description: 'Modern.js 文档框架',
    },
    {
      lang: 'zh',
      // 导航栏切换语言的标签
      label: '简体中文',
      title: 'Modern.js',
      description: 'Rspress',
    },
  ],
  themeConfig: {
    locales: [
      {
        lang: 'en',
        outlineTitle: 'ON THIS Page',
      },
      {
        lang: 'zh',
        outlineTitle: '大纲',
      },
    ],
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/TSGU-OSC' },
      { icon: {
        svg: '<svg t="1708355640791" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1446" width="24" height="24"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1447"></path></svg>'
      }, mode: 'link', content: 'https://gitee.com/TSGU-OSC' },
    ],
  },
  // root: path.join(__dirname, 'docs'),
  root: 'docs',
  title: 'OHC',
  description: 'OHC',
  icon: '/icon-l.jpg',
  logo: {
    light: '/icon-l.jpg',
    dark: '/icon-d.jpg',
  },

  
});
