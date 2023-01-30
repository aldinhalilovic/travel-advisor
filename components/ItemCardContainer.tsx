import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { IItemCardContainerProps } from '../utils/utils';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface IProps {
  props: IItemCardContainerProps;
  navigation: any;
}

const ItemCardContainer = (props: IItemCardContainerProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(
          'ItemScreen' as never,
          { params: props.data } as never
        )
      }
      className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[182px] my-2"
    >
      <Image
        source={{ uri: props.imageSrc }}
        className="w-full h-40 rounded-md object-cover"
      />
      {props.title && (
        <>
          <Text className="text-[#428288] text-[18px] font-bold">
            {props?.title?.length > 14
              ? `${props?.title.slice(0, 14)}..`
              : props.title}
          </Text>
          <View className="flex-row items-center space-x-1">
            <FontAwesome5 name="map-marker-alt" size={20} color={'#8597A2'} />
            <Text className="text-[#428288] text-[14px] font-bold">
              {props?.location?.length > 18
                ? `${props?.location?.slice(0, 18)}..`
                : props.location}
            </Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
