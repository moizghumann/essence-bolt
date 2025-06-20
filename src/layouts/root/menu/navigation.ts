export const PAGES_MENUS = [
  {
    id: 1,
    title: 'Dashboard',
    child: [{ id: 1, title: 'Analytics', href: '/dashboard' }],
  },
  {
    id: 2,
    title: 'Session',
    child: [
      { id: 1, title: 'Login', href: '/login' },
      { id: 2, title: 'Register', href: '/register' },
      { id: 3, title: 'Forget Password', href: '/forget-password' },
      { id: 4, title: 'Verify Code', href: '/verify-code' },
    ],
  },
]
