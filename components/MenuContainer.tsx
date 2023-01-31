import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { IMenuContainerProps } from '../utils/utils';

const MenuContainer = (props: IMenuContainerProps) => {
  const handlePress = () => {
    props.setChoice(props.title.toLowerCase());
  };
  return (
    <TouchableOpacity
      className="items-center justify-center space-y-2"
      onPress={handlePress}
    >
      <View
        className={`w-24 h-24 p-1 shadow-sm rounded-full items-center justify-center ${
          props.choice === props.title.toLowerCase() ? 'bg-gray-200' : ''
        }`}
      >
        <Image source={props.image} className="w-full h-full object-contain" />
      </View>
      <Text className="text-[#00bcc9] text-xl font-semibold">
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
