import { Screen } from '@/layout/Screen'
import { RasaSections } from './components/RasaSections'
import './styles/rasaLanding.css'

export const RasaMarketingPage = () => (
  <Screen header={false} footer={false}>
    <RasaSections />
  </Screen>
)

export default RasaMarketingPage
