module.exports = {
  title: '',
  description: 'page of Tei Seibun',
  base: '/page/',
  repo: 'https://github.com/teiseibun/page',
  plugins: [
    'latex'
  ],
  themeConfig: {
  search: false,
  sidebarDepth: 0,
    sidebar: [
      ['/', 'About me'],
    ],
    sidebar: false,
    nav: [
      { text: 'Github', link: 'https://github.com/teiseibun' }
    ]
  }
}

