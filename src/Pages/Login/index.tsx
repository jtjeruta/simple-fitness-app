import React, {useState} from 'react';
import {Button, Text, Form, Item as FormItem, Input, Label} from 'native-base';
import {useAuthContext} from '../../Contexts/AuthContext';

const LoginPage = () => {
  const {signIn, signUp} = useAuthContext();
  // TODO: add react-hook-form instead
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <Form>
        <FormItem floatingLabel>
          <Label>Email</Label>
          <Input onChangeText={e => setEmail(e)} />
        </FormItem>
        <FormItem floatingLabel last>
          <Label>Password</Label>
          <Input secureTextEntry={true} onChangeText={e => setPassword(e)} />
        </FormItem>
        <Button full primary onPress={() => signIn(email, password)}>
          <Text> Login </Text>
        </Button>
        <Button full primary onPress={() => signUp(email, password)}>
          <Text> Sign Up </Text>
        </Button>
      </Form>
    </>
  );
};

export default LoginPage;
