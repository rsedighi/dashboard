import Dashboard from '../components/dashboard'
import DateTime from '../components/widgets/datetime'
import darkTheme from '../styles/dark-theme'
import PageSpeedInsightsStats from '../components/widgets/pagespeed-insights/stats'
import PageSpeedInsightsScore from '../components/widgets/pagespeed-insights/score'
import GitHubIssueCount from '../components/widgets/github/issue-count'



export default () => (
  <Dashboard theme={darkTheme} name='Unicorn Dashboard'>
    <DateTime interval={100}/>

    <PageSpeedInsightsStats interval={100} url='https://google.com'  />
    <PageSpeedInsightsScore url='https://gmail.com' />

    <GitHubIssueCount
  owner='rsedighi'
  repository='blog'
/>
  </Dashboard>



)



