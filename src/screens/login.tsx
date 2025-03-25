import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Animated, Dimensions } from 'react-native';

const LoginScreen: React.FC = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [snowflakes, setSnowflakes] = useState<any[]>([]);

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', password);
    navigation.navigate('Home');
  };

  const handleSignUp = () => {
    console.log('Navegar para tela de cadastro');
    navigation.navigate('SignUp');
  };

  const createSnowflakes = () => {
    let flakes: any[] = [];
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 5 + 2; 
      const startPosition = Math.random() * screenWidth;
      const startY = -screenHeight - Math.random() * 200;  
      const duration = Math.random() * 5000 + 5000; 
      const fallAnimation = new Animated.Value(startY); 

     
      Animated.loop(
        Animated.timing(fallAnimation, {
          toValue: screenHeight + size, 
          duration: duration,
          useNativeDriver: true,
          delay: Math.random() * 10000, 
        })
      ).start();

      flakes.push({ size, startPosition, fallAnimation });
    }

    setSnowflakes(flakes);
  };

  useEffect(() => {
    createSnowflakes();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}></View>

      <Text style={styles.header}>Bem-vindo!</Text>
      <Text style={styles.subHeader}>Faça login para continuar</Text>

      <TextInput
        style={[styles.input, { zIndex: 2 }]} 
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, { zIndex: 2 }]} 
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={[styles.button, { zIndex: 2 }]} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.linkText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

    
      {snowflakes.map((flake, index) => (
        <Animated.View
          key={index}
          style={[ 
            styles.snowflake,
            {
              width: flake.size,
              height: flake.size,
              left: flake.startPosition,
              transform: [{ translateY: flake.fallAnimation }], 
            },
          ]}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    padding: 20,
    position: 'relative',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#fff',
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#bbb',
  },
  input: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#444',
    color: '#fff',
    zIndex: 2, 
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    zIndex: 2, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#bbb',
  },
  linkText: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  snowflake: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 50,
    opacity: 0.7,
    zIndex: 1, 
  },
});

export default LoginScreen;
