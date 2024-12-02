import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-gray-100">
      <View className="bg-blue-500 p-4 rounded">
        <Text className="text-white text-xl">Hello, Tailwind CSS with NativeWind!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;


