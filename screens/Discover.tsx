import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import {
  AttractionImage,
  AvatarImage,
  HotelImage,
  RestaurantsImage,
} from '../assets/images';
import CityData from '../mockedData/CityData.json';
import MenuContainer from '../components/MenuContainer';
import { AntDesign } from '@expo/vector-icons';
const Discover = ({ navigation }: any) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [choice, setChoice] = useState<string>('restaurants');
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const filterData = () => {
    return CityData.filter((item) =>
      item.City.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      accessible={false}
    >
      <SafeAreaView className="flex-1 bg-white relative">
        {/* header, title */}
        <View className="flex-row items-center justify-between px-6">
          <View>
            <Text className="text-[40px] text-[#0B646B] font-bold">
              Discover
            </Text>
            <Text className="text-[36px] text-[#527283]">
              the beauty today!
            </Text>
          </View>
          <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
            <Image
              source={AvatarImage}
              className="w-full h-full rounded-md object-cover"
            />
          </View>
        </View>
        {/* 
          search autocomplete input whos searching from CITYDATA, mockeddata made handmade by me,
        
        */}
        <View className="flex-col items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
          <TextInput
            value={searchInput}
            onChangeText={setSearchInput}
            placeholder="Search europe..."
            className="w-full h-10 pl-2 font-semibold"
          />
          {searchInput.length >= 1 && (
            <FlatList
              className="pb-5"
              data={filterData()}
              renderItem={({ item }) => (
                <View className="w-96 border-b border-zinc-300 h-10 pl-2 justify-center ">
                  <TouchableOpacity
                    onPress={() => {
                      setSearchInput(`${item.City}, ${item.Country}`);
                      console.log(item);
                    }}
                  >
                    <Text className="font-medium text-[17px] ">
                      {item.City}, {item.Country}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item) => item.Country}
            />
          )}
        </View>

        {/* menu container, options */}
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 mt-8">
            <MenuContainer
              key="hotel"
              title="Hotels"
              image={HotelImage}
              choice={choice}
              setChoice={setChoice}
            />
            <MenuContainer
              key="attractions"
              title="Attractions"
              image={AttractionImage}
              choice={choice}
              setChoice={setChoice}
            />
            <MenuContainer
              key="restaurants"
              title="Restaurants"
              image={RestaurantsImage}
              choice={choice}
              setChoice={setChoice}
            />
          </View>
          <View>
            <View>
              <Text>Top Tips</Text>
              <TouchableOpacity>
                <Text>Explore</Text>
                <AntDesign name="arrowright" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Discover;
