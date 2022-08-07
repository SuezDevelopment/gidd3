import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import React, { useContext, useState, useEffect, useRef } from "react";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Realm from "realm";

export default function IntroScreen(props:any) {
  const { user } = props;

  useEffect(() => {
    if (!user) {
      console.warn("NO USER Logged In");
      return;
    };
  }, [user]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <Text style={styles.title}>Modal</Text>
      <Text style={styles.title}>Modal</Text>
      <Text style={styles.title}>Modal</Text>
      <Text style={styles.title}>Modal</Text>
      <Text style={styles.title}>Modal</Text>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'red'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
