import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';
import SignInScreen from '@screens/SignInScreen'

import TabNavigator from '@components/TabNavigator'
import MainNavigator from '@components/MainNavigator'

export default class App extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
        />
        {/* <SignInScreen /> */}
        <MainNavigator />
        {/* <TabNavigator /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mediumorchid',
    paddingTop: 44
  }
})
