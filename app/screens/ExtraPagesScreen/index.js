import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ListView,
  TouchableOpacity
} from 'react-native';
import ScreenWrapper from '@components/ScreenWrapper'
import {
  Card,
  ListItem,
  Button
} from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StackNavigator } from 'react-navigation'
import { NavigationActions } from 'react-navigation'

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'SignIn'})
  ]
})

class ExtraPageScreen extends Component {
  static navigationOptions = {
    title: 'Menu',
    header: {
      tintColor: 'white',
      style: {
        backgroundColor: '#E62565'
      }
    },
    tabBar: {
      label: 'Menu',
      icon: ({ tintColor }) => (
        <Ionicons
          name="ios-menu-outline"
          size={28}
          style={{ marginTop: 4 }}
          color={tintColor}
        />
      ),
    },
  }

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this._renderRow = this._renderRow.bind(this)
  }

  _renderRow(extraPage, sectionId) {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('press')
          this.props.navigation.dispatch(
            {
                type: 'Navigation/NAVIGATE',
                routeName: 'Guest',
                action: {
                  type: 'Navigation/NAVIGATE',
                  routeName: 'SignIn',
                }
            }
          )
        }}
      >
        <Card
          containerStyle={{
            padding: 0,
            margin: 0,
            borderWidth: 0
          }}
        >
          <ListItem
            key={sectionId}
            title={extraPage.title}
            leftIcon={{name: extraPage.icon}}
          />
        </Card>
      </TouchableOpacity>

    )
  }
  render() {
    const extraPages = [
      {
        title: 'Atividades',
        icon: 'av-timer'
      },
      {
        title: 'Viagens',
        icon: 'flight-takeoff'
      },
      {
        title: 'Mapa',
        icon: 'map'
      },
      {
        title: 'Contato',
        icon: 'phone'
      },
      {
        title: 'E-mail',
        icon: 'email'
      },
    ]

    const dataSource = this.ds.cloneWithRows(extraPages)

    return (
      <ScreenWrapper style={styles.container}>
        <ListView
          dataSource={dataSource}
          renderRow={this._renderRow}
        />
      </ScreenWrapper>
    );
  }
}


export default StackNavigator({
  ExtraPages: {
    screen: ExtraPageScreen,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(240, 240, 240, 0.95)'
  }
})
