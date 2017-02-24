import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Animated,
  Dimensions,
  Easing,
  ActivityIndicator
} from 'react-native';
import Text from '@components/Text'
import TextInput from '@components/TextInput'
import { FormLabel, FormInput } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationActions } from 'react-navigation'

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'TabNavigator'})
  ]
})

import EvilIcons from 'react-native-vector-icons/EvilIcons'

const DEVICE_WIDTH = Dimensions.get('window').width
const BUTTON_HEIGHT = 60
const FINAL_BUTTON_WIDTH = BUTTON_HEIGHT
const FINAL_BORDER_RADIUS = BUTTON_HEIGHT / 2
const FINAL_SCALE = 22
const Divider = () => (
  <View style={styles.divider} />
)
export default class SignInScreen extends Component {
  static navigationOptions = {
    header: {
      visible: false
    }
  }
  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      growing: false,
    };

    this.buttonAnimated = new Animated.Value(0)
    this.buttonGrow = new Animated.Value(0)

    this.buttonGrow.addListener((v) => {
      if (v.value > 0) {
        this.setState({
          growing: true
        })
      }
    })
    this._handlePress = this._handlePress.bind(this)
  }

  _handlePress() {
    this.setState({
      loading: true
    })
    this._startWidthAnimation()
  }
  _startWidthAnimation() {
    Animated.spring(
      this.buttonAnimated,
      {
        toValue: 1,
        duration: 200,
      }
    ).start();

    const loginPromise = () => new Promise(resolve => setTimeout(resolve, 2500))

    loginPromise()
    .then(() => {
      Animated.sequence([
        Animated.timing(
          this.buttonGrow,
          {
            toValue: 1,
            duration: 200,
            easing: Easing.linear
          }
        ),
      ])
      .start(() => {
        this.props.navigation.dispatch(resetAction)
      })
    })
  }

  _startGrowAnimation() {

  }

  render() {
    const {
      loading,
      growing
    } = this.state

    const animatedWidth = this.buttonAnimated.interpolate({
	    inputRange: [0, 1],
	    outputRange: [DEVICE_WIDTH, FINAL_BUTTON_WIDTH]
	  })
    const animatedBorderRadius = this.buttonAnimated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, FINAL_BORDER_RADIUS]
    })
    const animatedScale = this.buttonGrow.interpolate({
      inputRange: [0, 1],
      outputRange: [1, FINAL_SCALE]
    })

    return (
      <Image
        source={require('@images/login1_bg.png')}
        resizeMode={Image.resizeMode.cover}
        style={styles.container}
      >
        <View style={styles.overlay} />
        <KeyboardAwareScrollView
          behaviour="padding"
          style={styles.keyboardAware}
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
                placeholder="Usuário"
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
                placeholder="Senha"
                placeholderTextColor="#C5C5C7"
                secureTextEntry
              />
            </View>
            <Divider />
          </View>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>
              Esqueceu a senha?
            </Text>
          </TouchableOpacity>

          <Animated.View
            style={[styles.animatedButton, {
              width: animatedWidth,
              transform: [{scale: animatedScale}],
              borderRadius: animatedBorderRadius }
            ]}
          >
            <TouchableOpacity
              style={styles.touchableOpacity}
              onPress={this._handlePress}
              activeOpacity={0.7}
            >
              {
                (loading && !growing) &&
                <ActivityIndicator animating color="white" />
              }
              {
                (!loading && !growing) &&
                <Text style={styles.buttonText}>
                  Entrar
                </Text>
              }
            </TouchableOpacity>
          </Animated.View>


          <View style={styles.signUpContainer}>
            <Text style={styles.signUpMessage}>
              Não tem conta?
            </Text>
            <TouchableOpacity>
              <Text style={styles.signUpLink}>
                Registrar
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
    backgroundColor: 'red'
  },
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#757577',
  },
  keyboardAware: {
    flex: 1,
  },
  textInputContainer: {
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    color: 'white',
    marginLeft: 20,
    flex: 1,
  },
  logoContainer: {
    height: 120,
    marginTop: 60,
    marginBottom: 40,
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
  },
  forgotPassword: {
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 80,
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
    height: BUTTON_HEIGHT,
  },
  formContainer: {
    paddingTop: 30,
    paddingBottom: 10,
    flex: 1,
  },
  animatedButton: {
    zIndex: 99,
    backgroundColor: '#FF3366',
    alignSelf: 'center'
  },
  buttonText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
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
    backgroundColor: 'transparent'
  },
  signUpLink: {
    color: 'white',
    fontSize: 16,
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
