import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

interface ICuisini {
  key: string;
  name: string;
}

const ItemScreen = ({ route, navigation: { goBack } }: any) => {
  const { params } = route?.params;

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
          <Image
            source={{
              uri: params?.photo?.images?.large?.url
                ? params?.photo?.images?.large?.url
                : 'https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg',
            }}
            className="w-full h-72 object-cover rounded-2xl"
          />

          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              className="w-10 h-10 rounded-md items-center justify-center bg-white"
              onPress={() => goBack()}
            >
              <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
              <FontAwesome5 name="heartbeat" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
            <View className="flex-row space-x-2 items-center">
              <Text className="text-[12px] font-bold text-gray-100">
                {params?.price_level}
              </Text>
              <Text className="text-[32px] font-bold text-gray-100">
                {params?.price}
              </Text>
            </View>
            <View className="px-2 py-1 rounded-md bg-teal-100">
              <Text>{params?.open_now_text}</Text>
            </View>
          </View>
        </View>
        <View className="mt-6">
          <Text className="text-[#428208] text-[24px] font-bold">
            {params?.name}
          </Text>
          <View className="flex-row items-center space-x-2 mt-2">
            <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
            <Text className="text-[#8C9EA6] text-[20px] font-bold">
              {params?.location_string}
            </Text>
          </View>
        </View>
        <View className="mt-4 flex-row items-center justify-between">
          {params?.rating && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome name="star" size={24} color="#058574" />
              </View>
              <View>
                <Text className="text-[#515151]">{params?.rating}</Text>
                <Text className="text-[#515151]">Ratings</Text>
              </View>
            </View>
          )}

          {params?.price_level && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <MaterialIcons name="attach-money" size={24} color="black" />
              </View>
              <View>
                <Text className="text-[#515151]">{params?.price_level}</Text>
                <Text className="text-[#515151]">Price Level</Text>
              </View>
            </View>
          )}

          {params?.distance_string && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
              </View>
              <View>
                <Text className="text-[#515151]">
                  {params?.distance_string}
                </Text>
                <Text className="text-[#515151]">Distance</Text>
              </View>
            </View>
          )}
        </View>

        {params?.description && (
          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
            {params?.description}
          </Text>
        )}

        {params?.cuisine && (
          <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
            {params?.cuisine.map((el: ICuisini) => (
              <TouchableOpacity
                key={el.key}
                className="px-2 py-1 rounded-md bg-emerald-100"
              >
                <Text>{el.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View className="space-y-2 mt-4 px-4 py-2 bg-gray-100 rounded-2xl">
          {params?.phone && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="phone" size={24} color="#428288" />
              <Text className="text-lg">{params?.phone}</Text>
            </View>
          )}

          {params?.email && (
            <View className="items center flex-row space-x-6">
              <FontAwesome name="envelope" size={24} color="#428288" />
              <Text className="text-lg">{params?.email}</Text>
            </View>
          )}

          {params?.address && (
            <View className="items center flex-row space-x-6">
              <FontAwesome name="map-pin" size={24} color="#428288" />
              <Text className="text-lg">{params?.address}</Text>
            </View>
          )}
          <View className="mt-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-12">
            <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">
              book now
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
