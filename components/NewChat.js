import { View, Text, StyleSheet, Platform, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import * as Icon from 'react-feather'
import { platformColor, withExpoSnack } from 'nativewind'
import { Feather } from '@expo/vector-icons';
import useAuth from '../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import useChat from '../hooks/useChat';

const cursorStyle = Platform.OS === 'web' ? { cursor: 'pointer' } : {};

const NewChat = () => {
  const { email } = useAuth();
  const { createNewChat } = useChat();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TouchableOpacity style={[styles.button, cursorStyle, isHovered ? styles.hover : ""]} className="flex flex-row border-[1px] border-gray-700 rounded-lg px-5 py-3 text-sm items-center justify-center space-x-2 mt-7" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onPress={() => createNewChat()}>
        <Feather name="plus" size={24} color="#d1d5db" />
        <Text className="text-gray-300">New Chat</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    transitionProperty: "all",
    transitionDuration: "200ms",
    transitionTimingFunction: "cubic-bezier(0, 0 , 0.2, 1)",
  },

  hover: { 
    backgroundColor: 'rgba(55, 65, 81, 0.7)' 
  }
});

export default NewChat;