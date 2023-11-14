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

    const [userInfo, setUserInfo] = React.useState();
    const [photoUrl, setPhotoUrl] = React.useState();
    const [email, setEmail] = React.useState();
    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: '949845395948-u26e7l73mm921p3kqk088brjmnressn6.apps.googleusercontent.com',
        androidClientId: '949845395948-2tnlagaoo85996r2n2j6k0adep5ji1nf.apps.googleusercontent.com',
        webClientId: '949845395948-l6e6d9jplam5ltifu1quvd0c4i36psse.apps.googleusercontent.com',
    });

    const checkLocalUser = async () => {
        try {
            const userJSON = await AsyncStorage.getItem("@user");
            const userData = userJSON ? JSON.parse(userJSON) : null;
            const photoUrlJSON = await AsyncStorage.getItem("@photoUrl");
            const photoUrlData = photoUrlJSON ? JSON.parse(photoUrlJSON) : null;
            const emailJSON = await AsyncStorage.getItem("@email");
            const emailData = emailJSON ? JSON.parse(emailJSON) : null;
            setUserInfo(userData);
            setPhotoUrl(photoUrlData)  
            setEmail(emailData)  
        } catch(e) {
            console.log(e.message)
        }
    }

    const signOut = async () => {
        try {
            console.log("Chat")
            await AsyncStorage.clear();
            setPhotoUrl("");
            setUserInfo("");
            navigation.navigate("Log In");
        } catch(e) {
            console.log(e.message)
        }
    }

    React.useEffect(() => {
        if (response?.type == 'success') {
            const { id_token } = response.params;
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential);
        }
    }, [response])

    React.useEffect(() => {
        checkLocalUser();
        const unsub = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUserInfo(user);
                setPhotoUrl(user.photoURL);
                setEmail(user.email);
                await AsyncStorage.setItem("@user", JSON.stringify(user));
                await AsyncStorage.setItem("@photoUrl", JSON.stringify(user.photoURL));
                await AsyncStorage.setItem("@email", JSON.stringify(user.email));
            }
        });

        return () => unsub();
    }, [])

    return { userInfo, email, photoUrl, promptAsync, signOut, response };
}

export default useAuth;