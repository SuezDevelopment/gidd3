import { AuthProps } from "../components/auth";
import * as React from 'react'
import {RootStackScreenProps } from "../types";

export default function Auth({navigation}:RootStackScreenProps<'Auth'>) {
    return(
        <AuthProps navigation={navigation}  />
    )
}