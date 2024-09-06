const navOptions = [
  {
    label: 'Main',
    to: '/',
    match: '/$',
  },
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
