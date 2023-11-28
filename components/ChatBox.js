import { View, Text, Platform } from 'react-native';
import { BoltIcon, ExclamationTriangleIcon, SunIcon, Path } from '@heroicons/react/24/outline';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const ChatBox = () => {
  return (
        <View className="flex-col items-center justify-center h-screen px-2">
          <Text className="text-5xl font-bold mb-4">KidGPT</Text>
          <View className={`${Platform.OS == "web" ? "flex-row" : "flex-col"} space-x-2`}>
            <View className="xs:flex-shrink">
              <View className="flex flex-col items-center justify-center mb-5  ">
                <Ionicons name="ios-sunny" size={34.5} color="black" />
                <Text className=" ">Examples</Text>
              </View>
              <View className="space-y-2 text-center flex">
                <Text className="text-center p-4 bg-[#ffe98c] rounded-lg max-w-[300px]  ">"Explain Something to me."</Text>
                <Text className="text-center p-4 bg-[#ffe98c] rounded-lg max-w-[300px]  ">
                  "What is the difference between a dog and a cat?"
                </Text>
                <Text className="text-center p-4 bg-[#ffe98c] rounded-lg max-w-[300px]  ">"What is the color of the sun?"</Text>
              </View>
            </View>
            <View className="xs:flex-shrink">
              <View className="flex flex-col items-center justify-center mb-5  ">
                <MaterialIcons name="bolt" size={36} color="black" />
                <Text className=" ">Capabilities</Text>
              </View>
              <View className="space-y-2">
                <Text className="text-center p-4 bg-[#ffe98c] rounded-lg max-w-[300px]  ">Change the ChatGPT model to use.</Text>
                <Text className="text-center p-4 bg-[#ffe98c] rounded-lg max-w-[300px]  ">
                  Messages are stored in Firebase's Firestore. Amazing
                </Text>
                <Text className="text-center p-4 bg-[#ffe98c] rounded-lg max-w-[300px]  ">Hot toast notifacations when ChatGPT is thinking.</Text>
              </View>
            </View>
            <View className="xs:flex-shrink mt-1">
              <View className="flex flex-col items-center justify-center mb-5  ">
              <FontAwesome5 name="exclamation-triangle" className="" size={26} color="black" />
                <Text className="  mt-1">Examples</Text>
              </View>
              <View className="space-y-2">
                <Text className="text-center p-4 bg-[#ffe98c] rounded-lg max-w-[300px]  ">"Explain Something to me."</Text>
                <Text className="text-center p-4 bg-[#ffe98c] rounded-lg max-w-[300px]  ">
                  "What is the difference between a dog and a cat?"
                </Text>
                <Text className="text-center p-4 bg-[#ffe98c] rounded-lg max-w-[300px]  ">"What is the color of the sun?"</Text>
              </View>
            </View>
          </View>
        </View>
  )
}

export default ChatBox;