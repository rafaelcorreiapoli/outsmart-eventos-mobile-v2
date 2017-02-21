import { TabNavigator } from 'react-navigation'
import HomeScreen from '@screens/HomeScreen'
import NotificationsScreen from '@screens/NotificationsScreen'

export default TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: NotificationsScreen,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});
