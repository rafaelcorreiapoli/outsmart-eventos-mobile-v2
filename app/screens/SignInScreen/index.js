import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import EvilIcons from 'react-native-vector-icons/EvilIcons'


const Divider = () => (
  <View style={styles.divider} />
)
export default class SignInScreen extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Image
        source={require('@images/login1_bg.png')}
        resizeMode={Image.resizeMode.cover}
        style={styles.container}
      >
        <View style={styles.overlay} />
        <KeyboardAwareScrollView
          behaviour="padding"
          style={styles.formContainer}
        >
          <View style={styles.logoContainer}>
            <Image
              source={require('@images/login1_mark.png')}
              style={styles.logo}
              resizeMode={Image.resizeMode.contain}
            />
          </View>
          <View style={styles.formContainer}>
            <View style={styles.textInputContainer}>
              <Image
                source={require('@images/login1_person.png')}
                resizeMode={Image.resizeMode.contain}
                style={{
                  width: 24,
                  height: 24
                }}
              />
              <TextInput
                autoCapitalize="none"
                style={styles.textInput}
                placeholder="Username"
                placeholderTextColor="#C5C5C7"
              />
            </View>
            <Divider />

            <View style={styles.textInputContainer}>
              <Image
                source={require('@images/login1_lock.png')}
                resizeMode={Image.resizeMode.contain}
                style={{
                  width: 24,
                  height: 24
                }}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                placeholderTextColor="#C5C5C7"
                secureTextEntry
              />
            </View>
            <Divider />
          </View>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>
              Forgot password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {}}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>
              Sign In
            </Text>
          </TouchableOpacity>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpMessage}>
              Don't have an account?
            </Text>
            <TouchableOpacity>
              <Text style={styles.signUpLink}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </Image>


    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    // backgroundColor: 'red'
  },
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#757577',
  },
  textInputContainer: {
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    color: 'white',
    marginLeft: 20,
    flex: 1,
  },
  logoContainer: {
    // flex: 0.8,
    height: 140,
    // paddingVertical: 16,
    // paddingTop: 30,
    // paddingBottom: 30
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
  },
  forgotPassword: {
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 30,
    fontWeight: '100',
    fontSize: 16,
    color: '#CCC',
    backgroundColor: 'transparent'
  },
  divider: {
    height: 1,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#CCC',
    opacity: 0.2
  },
  touchableOpacity: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF3366',
    height: 60,
  },
  formContainer: {
    paddingVertical: 30,
    flex: 1,
  },
  buttonText: {
    color: 'white',
    fontWeight: '100',
    fontSize: 16,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20
  },
  signUpMessage: {
    color: '#CCC',
    marginRight: 6,
    fontSize: 16,
    fontWeight: '100',
    backgroundColor: 'transparent'
  },
  signUpLink: {
    color: 'white',
    fontSize: 16,
    fontWeight: '100',
    backgroundColor: 'transparent'
  },
  overlay: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, .3)'
  }
})
