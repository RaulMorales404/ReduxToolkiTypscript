import React,{useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import Authenticated from './Authenticated';
import Authenticate from './Authenticate';

const Register = () => {
    const [authenticated,setAuthenticated] = useState(false);
    GoogleSignin.configure({
        webClientId: "867398721294-a7esrap0dpm4948d8g2c31m1g4e893m0.apps.googleusercontent.com"
    });

    auth().onAuthStateChanged((user) => {
        if (user) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    });

    async function handleGoogleButtonPress() {
        try {
            // get the user id token
            const { idToken } = await GoogleSignin.signIn();
            // create a credential using the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            // authenticate the user using the credential
            return auth().signInWithCredential(googleCredential);
        } catch (error) {
            console.log("error", error);
        }
    }

    if (authenticated) {
        return <Authenticated />
    }
    return <Authenticate handleGoogleButtonPress={handleGoogleButtonPress} />
   
    // return (
    //     <View style={{ flex: 1 }}>
    //         <Text>
    //             Register
    //         </Text>
    //         <View style={{
    //             flexDirection: 'row',
    //             justifyContent: 'space-around',
    //             alignItems: 'center',
    //             marginTop: 60,

    //         }}>
    //             <TouchableOpacity style={{ ...styles.button }}
    //                 activeOpacity={0.8}
    //             >
    //                 <Text style={{ ...styles.textButton }}>
    //                     Facebook
    //                 </Text>
    //             </TouchableOpacity>
    //             <TouchableOpacity style={{ ...styles.button, backgroundColor: '#ffffff' }}
    //                 activeOpacity={0.8}>
    //                 <Text style={{ ...styles.textButton, color: '#000' }}>
    //                     Google
    //                 </Text>
    //             </TouchableOpacity>

    //         </View>
    //     </View>
    // )
}

export default Register;
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1d6dce',
        padding: 15,
        borderRadius: 10,
    },
    textButton: {
        fontSize: 20,
        fontWeight: '400',
        color: '#fff'
    }
})