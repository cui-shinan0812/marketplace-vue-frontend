import {
  mdiMenu,
  mdiClockOutline,
  mdiCloud,
  mdiCrop,
  mdiAccount,
  mdiCogOutline,
  mdiEmail,
  mdiLogout,
  mdiThemeLightDark,
  mdiGithub,
  mdiReact,
  mdiLanguageC,
  mdiSignLanguage,
  mdiLanguageFortran,
  mdiFlagTriangle,
  mdiCardsPlayingDiamond,
  mdiDiamondStone
} from '@mdi/js'

export default [
  
  {
    isCurrentUser: true,
    menu: [
      {
        icon: mdiAccount,
        label: 'My Profile',
        to: '/profile'
      },
      {
        icon: mdiCogOutline,
        label: 'Settings'
      },
      {
        icon: mdiEmail,
        label: 'Messages'
      },
      {
        isDivider: true
      },
      {
        icon: mdiLogout,
        label: 'Log Out',
        isLogout: true
      }
    ]
  },
  {
    icon: mdiThemeLightDark,
    label: 'Light/Dark',
    isDesktopNoLabel: true,
    isToggleLightDark: true
  },
  {
    icon: mdiCardsPlayingDiamond,
    label: 'Lang',
    isDesktopNoLabel: true,
    href: 'https://github.com/cui-shinan0812/marketplace-vue-frontend',
    target: '_blank'
  },
  {
    icon: mdiDiamondStone,
    label: 'React version',
    isDesktopNoLabel: true,
    href: 'https://github.com/cui-shinan0812/marketplace-vue-frontend',
    target: '_blank'
  },
  {
    icon: mdiLogout,
    label: 'Log out',
    isDesktopNoLabel: true,
    isLogout: true
  }
]
