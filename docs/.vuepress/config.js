module.exports = {
  title: '鄭聖文的個人頁面',
  description: 'test',
  base: '/my-page/',
  repo: 'https://github.com/shengwen1997/my-page',
  plugins: [
    'latex'
  ],
  themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      ['/', 'About me'],
      ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/shengwen1997' }
    ]
  }
}
