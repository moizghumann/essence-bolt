import { createBrowserRouter, RouterProvider } from 'react-router'
// MUI
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
// AUTH CONTEXT FILE
// RIGHT-TO-LEFT SUPPORT COMPONENT
import RTL from '@/components/rtl'
// ROUTES METHOD
import { routes } from './routes'
// MUI THEME CREATION METHOD
import { createCustomTheme } from './theme'
// SITE SETTINGS CUSTOM DEFINED HOOK
import useSettings from '@/hooks/useSettings'
// I18N FILE
import './i18n'

// CLERK
import { ClerkProvider } from '@clerk/clerk-react'
import SupabaseProvider from '@/providers/supabase'

import { queryClient } from '@/providers/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'



export default function App() {
  // SITE SETTINGS CUSTOM DEFINED HOOK
  const { settings } = useSettings()

  // MUI THEME CREATION
  const theme = createCustomTheme(settings)

  // ROUTER CREATE
  const router = createBrowserRouter(routes())

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <SupabaseProvider>
            <QueryClientProvider client={queryClient}>
              <RTL>
                <CssBaseline />
                <RouterProvider router={router} />
              </RTL>
            </QueryClientProvider>
          </SupabaseProvider>
        </ClerkProvider>
      </ThemeProvider>
    </LocalizationProvider>
  )
}
