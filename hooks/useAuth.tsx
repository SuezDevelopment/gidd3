import asyncStorageService from '../providers/asyncStorage.ts'
import React, { createContext, useState, useEffect } from 'react';
import api from '../providers/api.ts'
const AuthContext = createContext({});
import { encryptPwd} from '../providers/hashPwd.ts'

export const AuthProvider = ({children}:{children:any}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function localStorageData(){
            const sToken = await asyncStorageService.getItem('userTkn');
            if (sToken){
                setUser(sToken)
                setLoading(false)
            }else{
                setLoading(false)
            }
        }
        localStorageData()
    }, []);


    async function signIn(username:any, pwd:any){    
        const body = {
            username: username,
            password: pwd
        }
        const response = await api.post('auth/signin', body)        
        setUser(response.body.token)   
        await asyncStorageService.setItem('userTkn', response.body.token);
    }
    
    async function signUp(username:any, email:any, pwd:any) {
        const body = {
            username: username,
            email: email,
            password: encryptPwd(pwd)
        };
        const response = await api.post('auth/signup/', body);
        await signIn(username, pwd);
    }

    function signOut(){
        asyncStorageService.clear().then( () => {
            setUser(null)
        })        
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, loading, signIn, signUp, signOut}}>
            {children}
        </AuthContext.Provider>
    )   

}

export default AuthContext;