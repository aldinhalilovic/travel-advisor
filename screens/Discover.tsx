import { View, Text, SafeAreaView, Image, TextInput } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { AvatarImage } from '../assets/images';
import axios from 'axios';
import Autocomplete from 'react-native-autocomplete-input';
import { useQuery } from '@tanstack/react-query';

const Discover = ({ navigation }: any) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [suggested, setSuggested] = useState<string[]>([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const getData = (param: string) => {
    return axios.get(
      `https://api.locationiq.com/v1/autocomplete?key=pk.6abef0a896a285b296b049f2d6847747&q=${param}`
    );
  };

  const { data, refetch } = useQuery(['data'], () => getData(searchInput), {
    enabled: searchInput.length > 3,
    cacheTime: 0,
  });

  useEffect(() => {
    if (searchInput.length < 3) setSuggested([]);
    setSuggested((query: any) => {
      return data?.data.map((item: any) => item.display_name);
    });
  }, [searchInput]);

  console.log({ searchInput, data, suggested });
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      {/* header, title */}
      <View className="flex-row items-center justify-between px-6">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[36px] text-[#527283]">the beauty today!</Text>
        </View>
        <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
          <Image
            source={AvatarImage}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>

      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
        <Autocomplete
          data={suggested}
          value={searchInput}
          className="w-full h-10"
          onChangeText={setSearchInput}
          placeholder="search"
          style={{ width: 360 }}
          flatListProps={{
            keyExtractor: (_, idx) => idx.toString(),
            renderItem: ({ item }) => <Text>{item}</Text>,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Discover;
