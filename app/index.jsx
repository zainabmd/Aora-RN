import { Image, ScrollView, Text, View } from 'react-native'
import {Redirect,router} from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {images} from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';
const App = () => {
  const {isLoading,isLoggedIn} =useGlobalContext();
  if(!isLoading && isLoggedIn) return <Redirect href="/home"/>
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height:'100%'}} >
        <View className="min-h-[85vh] w-full justify-center items-center px-4">
          <Image 
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />

          <Image 
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain'
          />

          <View className="relative-mt-5">
            <Text className="text-3xl text-white font-bold text-center">
            Discover Endless Possibilities With{' '}<Text className="text-secondary-200">Auro</Text>
            </Text>
            <Image
              source={images.path}
              className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
              resizeMode='contain'
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                  Where Creativity Meets Innovation:
                  Embark on a journey of limitless explorations with Aora
          </Text>
          <CustomButton 
            title="Continue With Email"
            handlePress={()=>{router.push('/sign-in')}}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light'></StatusBar>

    </SafeAreaView>
  )
}

export default App