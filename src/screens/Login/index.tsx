import React, {useState} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Input, Button, Card, Image} from 'react-native-elements';
import {useThemeContext} from '../../theme';
import {useAuthContext} from '../../contexts/AuthContext';

const LoginPage = () => {
  const {theme} = useThemeContext();
  const {signIn} = useAuthContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.webp')}
        style={{width: 200, height: 200}}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Card containerStyle={styles.card}>
        <Input
          placeholder="Email"
          leftIcon={{
            type: 'font-awesome',
            name: 'envelope-o',
            color: theme.colors ? theme.colors.primary : undefined,
          }}
          onChangeText={value => setEmail(value)}
          errorMessage={error ? error : undefined}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          leftIcon={{
            type: 'font-awesome',
            name: 'key',
            color: theme.colors ? theme.colors.primary : undefined,
          }}
          onChangeText={value => setPassword(value)}
        />
        <Button
          title="Sign-in"
          buttonStyle={styles.button}
          onPress={async () => {
            setLoading(true);
            const msg = await signIn(email, password);
            setLoading(false);
            !!msg && setError(msg);
          }}
          loading={loading}
        />
        <Button title="Sign-up" />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
  },
  button: {
    marginBottom: 10,
  },
});

export default LoginPage;
