import React from 'react'
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCredential
} from 'firebase/auth';
import { auth } from '../firebaseConfig';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const useAuth = () => {
    const navigation = useNavigation();

    const [userInfo, setUserInfo] = React.useState("");
    const [photoUrl, setPhotoUrl] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: '949845395948-u26e7l73mm921p3kqk088brjmnressn6.apps.googleusercontent.com',
        androidClientId: '949845395948-2tnlagaoo85996r2n2j6k0adep5ji1nf.apps.googleusercontent.com',
        webClientId: '949845395948-l6e6d9jplam5ltifu1quvd0c4i36psse.apps.googleusercontent.com',
    });

    React.useEffect(() => {
        handleSignInWithGoogle();
    }, [response])

    async function handleSignInWithGoogle() {
        const user = await AsyncStorage.getItem("@user")
        const picture = await AsyncStorage.getItem("@picture")
        const email = await AsyncStorage.getItem("@email")

        if(!user) {
            if (response?.type === "success"){
                await getUserInfo(response.authentication.accessToken)
            }
        } else {
            setUserInfo(user)
            setPhotoUrl(picture)
            setEmail(email)
        }
    }

    const getUserInfo = async (token) => {
        if(!token) return;
        try {
            const response = await fetch(
                "https://www.googleapis.com/userinfo/v2/me", 
                {
                    headers: { Authorization: `Bearer ${token}`}
                }
            );

            const user = await response.json();
            console.log(user)
            await AsyncStorage.setItem("@user", JSON.parse(user));
            await AsyncStorage.setItem("@picture", JSON.stringify(user.picture));
            await AsyncStorage.setItem("@email", JSON.parse(user.email))
            setUserInfo(JSON.parse(user))
            setEmail(JSON.parse(user.email))
            setPhotoUrl(JSON.stringify(user.picture))
        } catch (error) {
            console.log(error);
        }
    }

    return { userInfo, email, photoUrl, promptAsync, response };
}

export default useAuth;