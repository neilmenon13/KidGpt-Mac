import { View, Text } from 'react-native'
import React from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import useAuth from './useAuth'

const useChat = () => {
    let [docId, setDocId] = React.useState();
    const { email } = useAuth();

    const createNewChat = async () => {
        const doc = await addDoc(
          collection(db, 'users', email, "chats"), {
            messages: [],
            userId: email,
            createdAt: serverTimestamp(),
          }
        );

        setDocId(doc.id)
    }

    return { docId, createNewChat }
}

export default useChat