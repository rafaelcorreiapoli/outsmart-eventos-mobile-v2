import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ListView,
} from 'react-native';
import ScreenWrapper from '@components/ScreenWrapper'
import {
  Card,
  ListItem,
  Button
} from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StackNavigator } from 'react-navigation'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Usuários',
    header: {
      tintColor: 'white',
      style: {
        backgroundColor: '#E62565',
      },
      titleStyle: {
        fontFamily: 'Raleway-Regular',
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
  }

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
  }

  _renderRow(user, sectionId) {
    return (
      <ListItem
        roundAvatar
        avatar={{uri: user.avatarUrl }}
        key={sectionId}
        title={user.name}
        subtitle={user.subtitle}
        containerStyle={{
          backgroundColor: 'white'
        }}
        titleStyle={{
          fontFamily: 'Raleway-Regular'
        }}
        subtitleStyle={{
          fontFamily: 'Raleway-Light'
        }}
      />
    )
  }
  render() {
    const users = [
      {
        name: 'Amy Farha',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
      {
        name: 'Chris Jackson',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },

    ]

    const dataSource = this.ds.cloneWithRows(users)

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
  Home: {
    screen: HomeScreen,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(240, 240, 240, 0.95)'
  }
})
