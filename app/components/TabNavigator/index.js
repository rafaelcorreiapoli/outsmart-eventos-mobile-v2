import { TabNavigator } from 'react-navigation'
import HomeScreen from '@screens/HomeScreen'
import NotificationsScreen from '@screens/NotificationsScreen'
import ExtraPagesScreen from '@screens/ExtraPagesScreen'

export default TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: NotificationsScreen,
  },
  ExtraPages: {
    screen: ExtraPagesScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});
