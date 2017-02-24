import React from 'react'

import {
  TextInput
} from 'react-native'

export default ({
  style,
  ...otherProps
}) => (
  <TextInput
    placeholderStyle={{
      // fontFamily: 'AvenirNextLTPro-Regular'
    }}
    style={[{
      fontFamily: 'Raleway-Light'
    }, style]}
    {...otherProps}
  />
)
