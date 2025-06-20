import { lazy } from 'react'
import { GuestGuard } from '@/components/auth'

// AUTHENTICATION RELATED PAGES
const Login = lazy(() => import('@/pages/sessions/login'))
const Register = lazy(() => import('@/pages/sessions/register'))
const VerifyCode = lazy(() => import('@/pages/sessions/verify-code'))
const ForgetPassword = lazy(() => import('@/pages/sessions/forget-password'))

export const AuthRoutes = [
  // AUTHENTICATION PAGES ROUTES
  {
    element: <GuestGuard />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'forget-password', element: <ForgetPassword /> },
      { path: 'verify-code', element: <VerifyCode /> },
    ],
  },
]
