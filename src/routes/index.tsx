import { lazy } from 'react'
import { RouteObject, Navigate } from 'react-router'
import { DashboardRoutes } from './dashboard'

const ErrorPage = lazy(() => import('@/pages/404'))

export const routes = (): RouteObject[] => [
  { path: '/', element: <Navigate to="/dashboard" replace /> },
  ...DashboardRoutes,
  { path: '*', element: <ErrorPage /> },
]
