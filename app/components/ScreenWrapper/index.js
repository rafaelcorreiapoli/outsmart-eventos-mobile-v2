import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
} from 'react-native';

export default class ScreenWrapper extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={[{flex:1, paddingTop: 0}, this.props.style]}>
        {this.props.children}
      </View>
    );
  }

}
