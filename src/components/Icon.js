import React from 'react';
import { View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

const iconLibraries = {
    AntDesign: AntDesign,
    Entypo: Entypo,
    EvilIcons: EvilIcons,
    Feather: Feather,
    FontAwesome: FontAwesome,
    FontAwesome5: FontAwesome5,
    FontAwesome6: FontAwesome6,
    Fontisto: Fontisto,
    Foundation: Foundation,
    Ionicons: Ionicons,
    MaterialCommunityIcons: MaterialCommunityIcons,
    MaterialIcons: MaterialIcons,
    Octicons: Octicons,
    SimpleLineIcons: SimpleLineIcons,
    Zocial: Zocial,
};

const Icon = ({ library, name, size, color }) => {

  const IconComponent = iconLibraries[library];

  if (!IconComponent) {
    console.error(`Invalid icon library: ${library}`);
    return null;
  };
  if (!library) {
    console.error(`undefined library: ${library}`);
    return null;
  };

  return (
    <View>
      {library && name && (
        <IconComponent name={name} size={size || 20} color={color || 'black'} />
      )}
    </View>
  );
};

export default Icon;
