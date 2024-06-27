import { View, Text, Image,ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Link} from 'expo-router';
import {images} from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton'
import { useState } from 'react';

const SignUp = () => {
  const [form,setForm]=useState({
    username:'',
    email:'',
    password:''
  });
  const [isSubmitting,setIsSubmitting]=useState(false);
  const submit=()=>{

  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="min-h-[85vh] w-full justify-center px-4 my-6">
          <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]'/>
          <Text className="text-white text-2xl text-semibold font-psemibold mt-10">Sign up to Aora</Text>
          
          <FormField 
            title="Username"
            value={form.username}
            handleChange={(e)=>{
              setForm({...form,username:e})
            }}
            otherStyles="mt-10"
          />

          <FormField 
            title="Email"
            value={form.email}
            handleChange={(e)=>{
              setForm({...form,email:e})
            }}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField 
            title="Password"
            value={form.password}
            handleChange={(e)=>{
              setForm({...form,password:e})
            }}
            otherStyles="mt-7"
          />

          <CustomButton 
            title="Sign in" 
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting} 
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">Already have an account?</Text>
            <Link 
              href="./sign-in"
              className='text-lg text-secondary font-psemibold' >Sign In</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp