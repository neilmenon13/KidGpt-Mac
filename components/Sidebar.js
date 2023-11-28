import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import NewChat from './NewChat';
import useAuth from '../hooks/useAuth';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

const Sidebar = () => {
  const { userInfo, photoUrl, promptAsync, signOut } = useAuth();

  return (
    <View className="p-2 flex flex-col h-screen bg-[#202123]">
      <StatusBar style="light" />
      <View className="flex-1">
        <View>
          {/* New Chat */}
          <NewChat />
          <View>
            {/* ModelSelection */}
          </View>

          {/* aps through the ChatRows */}
        </View>
      </View>
      {photoUrl && (
        <TouchableOpacity onPress={() => signOut()}>
          <Image source={{ uri: `${photoUrl}` }} className="h-12 w-12 rounded-full mx-auto mb-2 flex" />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Sidebar