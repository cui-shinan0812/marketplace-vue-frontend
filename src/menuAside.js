import {
  mdiMonitor,
  mdiGithub,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiReact,
  mdiAlertRhombus,
  mdiMovieOpenCog,
  mdiQualityMedium
} from '@mdi/js'

export default [
  {
    to: '/',
    icon: mdiMonitor,
    label: 'Dashboard'
  },
  {
    to: '/products',
    label: 'Products',
    icon: mdiTable
  },
  {
    to: '/contacts',
    label: 'Contacts',
    icon: mdiSquareEditOutline
  },
  {
    to: '/company',
    label: 'Company',
    icon: mdiResponsive
  },
  {
    to: '/profile',
    label: 'Profile',
    icon: mdiPalette
  },
  {
    to: '/assistant',
    label: 'Assistant',
    icon: mdiTelevisionGuide
  },
  {
    to: '/invoices',
    label: 'Invoices',
    icon: mdiMovieOpenCog
  },
  {
    to: '/quotations',
    label: 'Quotations',
    icon: mdiQualityMedium
  },
  {
    to: '/contracts',
    label: 'Contracts',
    icon: mdiMonitor
  },
  {
    to: '/settings',
    label: 'Settings',
    icon: mdiAlertRhombus
  },
  
  {
    label: 'Term',
    icon: mdiViewList,
    menu: [
      {
        href: 'https://github.com/cui-shinan0812/marketplace-vue-frontend',
        label: 'Privacy',
        icon: mdiGithub,
        target: '_blank'
      },
      {
        href: 'https://github.com/cui-shinan0812/marketplace-vue-frontend',
        label: 'React version',
        icon: mdiReact,
        target: '_blank'
      }
    ]
  },
  
]
