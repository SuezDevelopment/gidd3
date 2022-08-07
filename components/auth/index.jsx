import { useAuth } from "../../hooks/AuthContext";
import React, { useEffect, useState } from "react";
import {TextInput, Button, Alert} from 'react-native';
import { Text,View } from "../Themed";
import { Bnt } from "./logout_btn";


export function AuthProps(props) {
  const [navigation] = props
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { user, signUp, signIn } = useAuth();

  useEffect(() => {
    // If there is a user logged in, go to the Projects page.
    if (user != null) {
      navigation.navigate("Election");
    }
  }, [user]);


  const onPressSignIn = async () => {
    if(!email && !password) {
       setError('Email or Password is required')
    } else if (error === null){
      console.log("Trying sign in with user: " + email);
      try {
        await signIn(email, password);
      } catch (error) {
        const errorMessage = `Failed to sign in: ${error.message}`;
        console.error(errorMessage);
        Alert.alert(errorMessage);
      }
    }
  };

  const onPressSignUp = async () => {
    if(!email && !password) {
      setError('Email or Password is required')
    } else if (error === null){
      console.log("Trying sign Up with user: " + email);
      try {
        await signUp(email, password);
        signIn(email, password);
      } catch (error) {
        const errorMessage = `Failed to sign in: ${error.message}`;
        console.error(errorMessage);
        Alert.alert(errorMessage);
      }
    }
  };

  return(
    <View>
      <Text>Sign Up or Sign In:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="email"
          style={styles.inputStyle}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="password"
          style={styles.inputStyle}
          secureTextEntry
        />
      </View>
      <Bnt text='Sign In' style={{}} onPress={onPressSignIn} />
      <Bnt text='Sign Up' style={{}} onPress={onPressSignUp} />
    </View>
  )
}