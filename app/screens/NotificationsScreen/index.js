import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  StyleSheet
} from 'react-native';
import ScreenWrapper from '@components/ScreenWrapper'
import { CheckBox, Text, Button } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

class NotificationsScreen extends Component {
  static navigationOptions = {
    title: 'Votação',
    header: {
      tintColor: 'white',
      style: {
        backgroundColor: '#E62565'
      }
    },
    tabBar: {
      label: 'Usuários',
      icon: ({ tintColor }) => (
        <Ionicons
          name="ios-contacts-outline"
          size={28}
          style={{ marginTop: 4 }}
          color={tintColor}
        />
      ),
    },
  };

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {
      checks: [
        true,
        false,
        false,
        false
      ]
    };
  }

  render() {
    return (
      <ScreenWrapper style={styles.container}>
        <Text h4 style={styles.title}>Qual sua refeição preferida?</Text>
        <View style={styles.optionsContainer}>
          {
            this.state.checks.map((check, sectionId) => (
              <CheckBox
                key={sectionId}
                title='Arroz'
                checked={check}
                containerStyle={{
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  marginTop: 0,
                }}
                onPress={() => {
                  const newCheckArray = this.state.checks.map(() => false)
                  newCheckArray[sectionId] = true
                  this.setState({
                    checks: newCheckArray
                  })
                }}
              />
            ))
          }
        </View>

        <Button
          icon={{name: 'code'}}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Votar' />
      </ScreenWrapper>
    );
  }
}

export default StackNavigator({
  Notifications: {
    screen: NotificationsScreen,
  },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(240, 240, 240, 0.95)',
  },
  optionsContainer: {
    flex: 1,
    // backgroundColor: 'blue'
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  }
})
