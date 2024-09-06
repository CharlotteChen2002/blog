const navOptions = [
  {
    label: 'Main',
    to: '/',
    match: '/$',
  },
  // TODO: Add more navigation options
  {
    label: 'Links',
    to: '/links',
    match: '/links$',
  },
  {
    label: 'Bangumi',
    to: '/bangumi',
    match: '/bangumi$',
  },
  {
    label: 'About',
    to: '/about',
    match: '/about$',
  },
]

export default () => ({ navOptions })
