import { StackNavigator } from 'react-navigation'
import SignInScreen from '@screens/SignInScreen'
import TabNavigator from '@components/TabNavigator'
import GuestNavigator from '@components/GuestNavigator'

export default StackNavigator({
  SignIn: {
    screen: SignInScreen,
  },
  TabNavigator: {
    screen: TabNavigator
  },
}, {
  headerMode: 'none'
});
