import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, SignIn } from '@screens/index'

export const AppRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen name="SignIn" component={SignIn} />
      </Navigator>
    </NavigationContainer>
  )
}
