import { lazy, Suspense } from 'react'
import LayoutV1 from '@/layouts/layout-1'
import { AuthGuard } from '@/components/auth'
import { LoadingProgress } from '@/components/loader'

const Analytics = lazy(() => import('@/pages/dashboard/analytics'))

const ActiveLayout = () => (
  <AuthGuard>
    <Suspense fallback={<LoadingProgress />}>
      <LayoutV1 />
    </Suspense>
  </AuthGuard>
)

export const DashboardRoutes = [
  {
    path: 'dashboard',
    element: <ActiveLayout />,
    children: [{ index: true, element: <Analytics /> }],
  },
]
