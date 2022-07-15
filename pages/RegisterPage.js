import React from 'react'
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FontAwesome } from '@expo/vector-icons'
import tw from 'twrnc'

export default function RegisterPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={tw`flex-row w-80 rounded-10 bg-gray-200 border-2 border-gray-200 py-3 px-4`}
      >
        <FontAwesome
          style={tw`my-2 mr-2 text-green-700`}
          name='user'
          size={16}
        />
        <TextInput
          placeholder='Please enter name'
          style={tw`w-80 text-green-700 `}
        />
      </View>
      <View
        style={tw`flex-row w-80 rounded-10 bg-gray-200 border-2 border-gray-200 py-3 px-4 mt-5`}
      >
        <FontAwesome
          style={tw`my-2 mr-2 text-green-700`}
          name='envelope'
          size={16}
        />
        <TextInput
          placeholder='Please enter email'
          style={tw`w-80 text-green-700 `}
        />
      </View>
      <View
        style={tw`flex-row w-80 rounded-10 bg-gray-200 border-2 border-gray-200 py-3 px-4 mt-5`}
      >
        <FontAwesome
          style={tw`my-2 mr-2 text-green-700`}
          name='phone'
          size={16}
        />
        <TextInput
          placeholder='Please enter phone number'
          style={tw`w-80 text-green-700 `}
        />
      </View>
      <View
        style={tw`flex-row w-80 rounded-10 bg-gray-200 border-2 border-gray-200 py-3 px-4 mt-5`}
      >
        <FontAwesome
          style={tw`my-2 mr-2 text-green-700`}
          name='key'
          size={16}
        />
        <TextInput
          placeholder='Please enter password'
          secureTextEntry
          style={tw`w-80 text-green-700`}
        />
      </View>

      <TouchableOpacity
        style={tw`w-80 border border-green-700 rounded-10 py-3 px-4 mt-5`}
      >
        <Text style={tw`text-center text-green-700`}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={tw`w-80 border border-green-700 bg-green-700 rounded-10 py-3 px-4 mt-5`}
      >
        <Text style={tw`text-center text-white`}>Go Back!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
