import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import UserInput from './UserInput';
import { Button } from './Button';
import { Card } from './Card';
import { CardSection } from './CardSection';
import Spinner from './Spinner';

class Login extends Component {
  state = { email: '', password: '', error: '', loading: false };


onButtonPress() {
  const { email, password } = this.state;

  this.setState({ error: '', loading: true });

  firebase.auth().signInWithEmailAndPassword(email, password)
  //.catch() is for "if this sign in attempt fails... do this"
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
    });
}

onLoginFail() {
  this.setState({ error: 'Authentication Failed', loading: false });
}

onLoginSuccess() {
  this.setState({ loading: false, email: '', password: '', error: '' });
}

renderButton() {
  if (this.state.loading) {
    return <Spinner size="small" />;
  }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
}

  render() {
    return (
      <Card>
        <CardSection>
          <UserInput
            secureTextEntry={false}
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <UserInput
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyles}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyles: {
    fontSize: 20,
    color: '#ff0000',
    alignSelf: 'center'
  }
};
export default Login;
