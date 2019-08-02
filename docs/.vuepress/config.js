module.exports = {
  title: 'Tei Seibun',
  description: 'page of Tei Seibun',
  base: '/page/',
  repo: 'https://github.com/teiseibun/page',
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
      { text: 'Github', link: 'https://github.com/teiseibun' }
    ]
  }
}

