import { StackNavigator } from 'react-navigation'
import SignInScreen from '@screens/SignInScreen'
import TabNavigator from '@components/TabNavigator'

export default StackNavigator({
  SignIn: {
    screen: SignInScreen,
  },
}, {
  headerMode: 'none'
});
