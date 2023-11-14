import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import ChatBox from '../components/ChatBox'
import Sidebar from '../components/Sidebar'
import { withExpoSnack } from 'nativewind'
import useChat from '../hooks/useChat'

const Chat = ({ route }) => {
  const { docId } = useChat()

  if (docId) {
    console.log(docId)
  }

  return (
    <View className="flex-row">
        {/* Sidebar */}
        <View style={styles.sidebar} className="h-screen sm:flex-1 overflow-y-auto xs:max-w-xs">
          <Sidebar />
        </View>

        {/* Client Provider - Nofication */}

        <View className="bg-[#fceca9] flex-1 h-screen">
            <ChatBox />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sidebar: {
    maxWidth: '260px',
    minWidth: '100px'
  }
})

export default Chat;