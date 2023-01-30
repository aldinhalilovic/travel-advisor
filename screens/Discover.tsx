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
  ActivityIndicator,
} from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import {
  AttractionImage,
  AvatarImage,
  HotelImage,
  NotFoundIMage,
  RestaurantsImage,
} from '../assets/images';
import CityData from '../mockedData/CityData.json';
import MenuContainer from '../components/MenuContainer';
import { FontAwesome } from '@expo/vector-icons';
import ItemCardContainer from '../components/ItemCardContainer';
import { useQueryData } from '../api/useQuery';
const Discover = ({ navigation }: any) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [choice, setChoice] = useState<string>('restaurants');
  const [mainData, setMainData] = useState<string[]>(['asds']);

  const filterData = () => {
    return CityData.filter((item) =>
      item.City.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  const { data, isFetching, refetch } = useQueryData(choice);
  console.log(data, isFetching, choice);

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
        {isFetching ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator size={'large'} color="#0B646B" />
          </View>
        ) : (
          <ScrollView>
            <View className="flex-row items-center justify-between px-8 mt-8">
              <MenuContainer
                key="hotel"
                title="Hotels"
                image={HotelImage}
                choice={choice}
                setChoice={setChoice}
                refetch={refetch}
              />
              <MenuContainer
                key="attractions"
                title="Attractions"
                image={AttractionImage}
                choice={choice}
                setChoice={setChoice}
                refetch={refetch}
              />
              <MenuContainer
                key="restaurants"
                title="Restaurants"
                image={RestaurantsImage}
                choice={choice}
                setChoice={setChoice}
                refetch={refetch}
              />
            </View>
            <View>
              <View className="flex-row items-center justify-between px-4 mt-8">
                <Text className="text-[#2c7379] text-[28px] font-bold">
                  Top Tips
                </Text>
                <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                  <Text className="text-[#A0C4C7] text-[20px] font-bold">
                    Explore
                  </Text>
                  <FontAwesome
                    name="long-arrow-right"
                    size={24}
                    color="#A0C4C7"
                  />
                </TouchableOpacity>
              </View>

              <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
                {data?.length > 0 ? (
                  <>
                    {/* <ItemCardContainer
                      key={'101'}
                      imageSrc="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                      location="Novi Pazar"
                      title="Vrbak"
                    />
                    <ItemCardContainer
                      key={'102'}
                      imageSrc="https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg"
                      location=""
                      title=""
                    /> */}
                    {data?.map((el: any, i: number) => (
                      <ItemCardContainer
                        key={i}
                        imageSrc={
                          el?.photo?.images?.medium?.url
                            ? el?.photo?.images?.medium?.url
                            : 'https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg'
                        }
                        location={el?.location_string}
                        title={el?.name}
                        data={el}
                      />
                    ))}
                  </>
                ) : (
                  <>
                    <View className="w-full h-[400px] items-center justify-center space-y-8 ">
                      <Image
                        source={NotFoundIMage}
                        className="w-32 h-32 object-cover "
                      />
                      <Text className="text-2xl text-[#428288] font-semibold">
                        Opps...No Data Found
                      </Text>
                    </View>
                  </>
                )}
              </View>
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Discover;
