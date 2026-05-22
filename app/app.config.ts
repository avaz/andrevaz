export default defineAppConfig({
  global: {
    picture: {
      dark: '/avatar.jpeg',
      light: '/avatar.jpeg',
      alt: 'André Vaz profile picture'
    },
    meetingLink: 'https://www.linkedin.com/in/andre-duarte-vaz',
    email: 'vaz.duarte.andre@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `André Vaz • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/andre-duarte-vaz',
      'target': '_blank',
      'aria-label': 'André Vaz on LinkedIn'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com',
      'target': '_blank',
      'aria-label': 'André Vaz on X'
    }, {
      'icon': 'i-heroicons-envelope',
      'to': 'mailto:vaz.duarte.andre@gmail.com',
      'target': '_blank',
      'aria-label': 'Email André Vaz'
    }]
  }
})
