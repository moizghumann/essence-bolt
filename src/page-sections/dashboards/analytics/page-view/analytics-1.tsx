import Grid from '@mui/material/Grid2'
import Stack from '@mui/material/Stack'
import Footer from '../../_common/Footer'
import TopQueries from '../TopQueries'
import TopReferral from '../TopReferral'
import ChartFilters from '../ChartFilters'
import CompleteGoal from '../CompleteGoal'
import CompleteRate from '../CompleteRate'
import TopPerforming from '../TopPerforming'
import SessionBrowser from '../SessionBrowser'
import SalesByCountry from '../SalesByCountry'
import TotalUsers from '@/page-sections/dashboards/analytics/TotalUsers'

export default function Analytics1PageView() {
  return (
    <div className="pt-2 pb-4">
      <Grid container spacing={3}>
        <Grid size={{ md: 8, xs: 12 }}>
          <ChartFilters />
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <TotalUsers />
        </Grid>
        <Grid size={{ md: 8, xs: 12 }}>
          <TopReferral />
        </Grid>
        <Grid size={{ md: 4, xs: 12 }}>
          <SessionBrowser />
        </Grid>
        <Grid size={{ lg: 3, xs: 12 }}>
          <Stack spacing={3} direction={{ lg: 'column', sm: 'row', xs: 'column' }}>
            <CompleteGoal />
            <CompleteRate />
          </Stack>
        </Grid>
        <Grid size={{ lg: 9, xs: 12 }}>
          <SalesByCountry />
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <TopPerforming />
        </Grid>
        <Grid size={{ md: 6, xs: 12 }}>
          <TopQueries />
        </Grid>
        <Grid size={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  )
}
