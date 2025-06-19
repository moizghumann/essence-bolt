import { Navigation } from '@/types/Navigation-1'
import duotone from '@/icons/duotone'

export const navigations: Navigation[] = [
  { type: 'label', label: 'Dashboard' },
  { name: 'Analytics', icon: duotone.PersonChalkboard, path: '/dashboard' },
  { type: 'label', label: 'User' },
  { name: 'Profile', icon: duotone.UserProfile, path: '/dashboard/profile' },
]
