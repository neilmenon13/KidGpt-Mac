import { Text, TouchableOpacity, SafeAreaView, View, Platform } from 'react-native'
import { withExpoSnack } from 'nativewind';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';

WebBrowser.maybeCompleteAuthSession();

const Start = () => {

  const navigation = useNavigation()

  const { userInfo, promptAsync } = useAuth();

  console.log(userInfo);
    
  if (userInfo) {
    navigation.navigate("Chat")
  }

  return (
    <View className="flex-1 items-center justify-center bg-[#343541]">
        <Text className="font-semibold text-6xl text-white">KidGPT</Text>
        <TouchableOpacity className="rounded-3xl mt-12 px-14 py-3 bg-[#f4a261] flex-row" onPress={() => promptAsync()}>
          <AntDesign name="google" size={32} color="white" />
          <Text className="text-2xl text-white ml-2">Login with Google</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Start;
