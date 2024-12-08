import React from 'react';
import { TouchableOpacity, View, Text, ViewProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Note: using @expo/vector-icons includes MaterialIcons
import {style} from './styles';

type Props = ViewProps & {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
};

export function Accordion({ title, content, isOpen, onToggle, ...rest }: Props) {
  return (
    <View style={style.container} {...rest}>
      <TouchableOpacity style={style.header} onPress={onToggle}>
        <Text style={style.headerText}>{title}</Text>
        <MaterialIcons
          name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={24}
          color="#000"
        />
      </TouchableOpacity>
      {isOpen && (
        <View style={style.content}>
          <Text style={style.contentText}>{content}</Text>
        </View>
      )}
    </View>
  );
}
