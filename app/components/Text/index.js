import React from 'react'

import {
  Text
} from 'react-native'

export default ({
  style,
  ...otherProps
}) => (
  <Text
    style={[{
      fontFamily: 'Raleway-Light'
    }, style]}
    {...otherProps}
  />
)
