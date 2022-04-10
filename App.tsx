import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'

import { Spinner } from './src/components'
import { AppRoutes } from './src/routes/App.routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    rajdhani_700: Rajdhani_700Bold,
    inter_400: Inter_400Regular,
    inter_700: Inter_700Bold
  })

  if (!fontsLoaded) return <Spinner />

  return (
    <>
      <AppRoutes />
      <StatusBar style="light" />
    </>
  )
}
