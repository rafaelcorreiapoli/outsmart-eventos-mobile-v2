import React, { Component } from 'react'
import {
  View,
  Animated,
  Easing,
  Dimensions
} from 'react-native'
import { TabNavigator } from 'react-navigation'
import HomeScreen from '@screens/HomeScreen'
import NotificationsScreen from '@screens/NotificationsScreen'
import ExtraPagesScreen from '@screens/ExtraPagesScreen'

const TabNavigatorComponent = TabNavigator({
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
    labelStyle: {
      fontFamily: 'Raleway-Light'
    }
  },
});

export default class Tabs extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {
      showOverlay: true,
      overlayAnimation: new Animated.Value(1)
    };
  }

  componentDidMount() {
    this.setState({
      showOverlay: true
    })
    setTimeout(() => {
      Animated.timing(
        this.state.overlayAnimation, {
          toValue: 0,
          duration: 400,
          easing: Easing.linear
        }
      ).start(() => {
        this.setState({
          showOverlay: false
        })
      })
    }, 200)

  }

  render() {
    return (
      <View style={{flex: 1}}>
        <TabNavigatorComponent />
        {
          this.state.showOverlay &&
          <Animated.View
            useNativeDriver
            style={{
              position: 'absolute',
              left: 0, right: 0, top: 0, bottom: 0,
              backgroundColor: '#FF3366',
              opacity: this.state.overlayAnimation,
            }}
          />
        }
      </View>
    );
  }

}
