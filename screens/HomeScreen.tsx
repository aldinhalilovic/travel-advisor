import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { HeroImage } from '../assets/images/index.js';
import * as Animatable from 'react-native-animatable';
import { useQueryData } from '../api/useQuery';

const HomeScreen = ({ navigation }: any) => {
  const { refetch } = useQueryData('restaurants');
  const handlePress = () => {
    navigation.navigate('Discover');
    refetch();
  };

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      {/* first section, logo and stuff */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full justify-center items-center ">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2a2b4b] text-3xl font-semibold">Travel</Text>
      </View>
      {/* second section, hero section, text */}

      <View className=" px-6 mt-8 space-y-3">
        <Text className="text-[42px] text-[#3C6072]">Enjoy the trip with</Text>
        <Text className="text-[38px] text-[#00BCC9] font-bold">
          Good Moments
        </Text>
        <Text className="text-[#3C6072] text-base">
          Lorem ipsum dolor sit amet consectetur adipisig elit. Quisquam, modi.
        </Text>
      </View>
      {/* circles in the background */}

      <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>

      {/* background image and go button */}

      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />
        <TouchableOpacity
          onPress={handlePress}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full justify-center items-center"
        >
          <Animatable.View
            animation="pulse"
            easing="ease-in-out"
            iterationCount="infinite"
            className="w-20 h-20 rounded-full justify-center items-center bg-[#00BCC9]"
          >
            <Text className="text-gray-50 text-[34px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
