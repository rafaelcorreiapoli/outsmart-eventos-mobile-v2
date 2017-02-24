import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import ScreenWrapper from '@components/ScreenWrapper'
import { CheckBox, Text, Button } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

class NotificationsScreen extends Component {
  static navigationOptions = {
    title: 'Pesquisa',
    header: {
      tintColor: 'white',
      style: {
        backgroundColor: '#E62565'
      },
      titleStyle: {
        fontFamily: 'Raleway-Regular',
      }
    },
    tabBar: {
      label: 'Pesquisa',
      icon: ({ tintColor }) => (
        <Ionicons
          name="ios-list-outline"
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
        <View style={{flexDirection: 'row', zIndex: 99, alignItems: 'center', backgroundColor: '#f8f8f9'}}>
          <View style={{
            width: 40,
            height: 40,
            borderRadius: 35,
            backgroundColor: '#7fddd1',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 4,
            marginVertical: 4,
          }}>
            <Text style={{
              fontSize: 18,
              backgroundColor: 'transparent',
              color: '#fff'
            }}>
              1.
            </Text>
          </View>
          <Text h5 style={styles.title}>Qual sua refeição preferida?</Text>
        </View>

        <View style={styles.optionsContainer}>
          {
            this.state.checks.map((check, i) => (
              <CheckBox
                key={i}
                title={['Arroz', 'Feijão', 'Lasanha', 'Salada'][i % 4]}
                checked={check}
                iconType='material'
                checkedIcon='check'
                uncheckedIcon='check'
                checkedColor="#7fddd1"
                uncheckedColor="#bcbcbe"
                fontFamily='Raleway-Light'
                containerStyle={[{
                  backgroundColor: '#fff',
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  marginTop: 0,
                  borderBottomWidth: 1,
                  borderBottomColor: '#f3f3f4',
                  borderTopWidth: 0,
                  height: 60,
                  justifyContent: 'center',
                  borderRadius: 0,
                }, check && {
                  borderLeftWidth: 4,
                  borderLeftColor: '#7fddd1',
                  backgroundColor: '#f8f8f9'
                }]}
                textStyle={check && {
                  color: '#c8c8c9'
                }}
                onPress={() => {
                  const newCheckArray = this.state.checks.map(() => false)
                  newCheckArray[i] = true
                  this.setState({
                    checks: newCheckArray
                  })
                }}
              />
            ))
          }
        </View>

        <Button
          icon={{name: 'send'}}
          iconRight
          backgroundColor='#ff3366'
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          fontFamily='Raleway-Light'
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
  },
  title: {
    flex: 1,
    marginBottom: 10,
    marginTop: 10,
    fontFamily: 'Raleway-Light'
  }
})
