import { lazy } from 'react'
import LayoutV1 from '@/layouts/layout-1'

const Analytics = lazy(() => import('@/pages/dashboard/analytics'))

const Profile = lazy(() => import('@/pages/profile'))

export const DashboardRoutes = [
  {
    path: 'dashboard',
    element: <LayoutV1 />,
    children: [
      { index: true, element: <Analytics /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
]
