import * as R from "react";
import { Pressable,Alert } from "react-native";
import { Text } from "../Themed";

export const Bnt = (text:any, style:any, onPress:any)=>{

    return(
        <Pressable
            style={style}
            onPress={() => {
                onPress()
            }}
        >
            <Text>
                {text}
            </Text>
        </Pressable>
    )
}


