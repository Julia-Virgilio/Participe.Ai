import React, { forwardRef, Fragment, LegacyRef} from "react";

import { View, Text, TextInput, TextInputProps, TouchableOpacity} from "react-native";
import { style } from './styles';
import { themas } from '../../../global/themes';

import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';

type IconComponenet = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                      React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                      React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponenet,
    IconRight?: IconComponenet,
    iconLeftName?: string,
    iconRightName?: string,
    title?: string,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void
}

export const Input = forwardRef((Props:Props, ref: LegacyRef<TextInput> | null)=> {

    const { IconLeft, IconRight, iconLeftName, iconRightName, title, onIconLeftPress, onIconRightPress, ...rest} = Props

    const calculateSizeWidth = () =>{
        if(IconLeft && IconRight){
            return '80%'
        }else if(IconLeft || IconRight){
            return '90%'
        }else{
            return '100%'
        }
    }

    const calculateSizePaddingLeft = () =>{
        if(IconLeft && IconRight){
            return 0;
        }else if(IconLeft || IconRight){
            return 10;
        }else{
            return 20;
        }
    }

    return (
        <Fragment>
            {title && <Text style={style.titleInput}> {title} </Text>} 
            <View style={[style.boxInput,{paddingLeft:calculateSizePaddingLeft()}]}>
                {IconLeft && iconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress}>
                        <IconLeft name={iconLeftName as any} size={20} color={themas.Colors.gray}  style={style.Icon} />
                    </TouchableOpacity>
                )}
                <TextInput 
                    style={[
                        style.input,{width:calculateSizeWidth()}
                    ]}
                    {...rest}
                />
                {IconRight && iconRightName && (
                    <TouchableOpacity onPress={onIconRightPress} style={style.Buttom}>
                        <IconRight name={iconRightName as any} size={20} color={themas.Colors.gray}  style={style.Icon} />
                    </TouchableOpacity>
                )}
            </View>
        </Fragment>    
    )
})


