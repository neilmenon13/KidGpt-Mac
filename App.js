import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { withExpoSnack } from 'nativewind';
import ChatBox from './components/ChatBox';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from './screens/Start';
import Chat from './screens/Chat';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator(); 

function App() {

  console.log('App');

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Login" component={Start} />
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false, }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default withExpoSnack(App);