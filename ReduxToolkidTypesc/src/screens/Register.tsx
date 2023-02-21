import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
const Register = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text>
                Register
            </Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: 60,

            }}>
                <TouchableOpacity style={{ ...styles.button }}
                    activeOpacity={0.8}
                >
                    <Text style={{ ...styles.textButton }}>
                        Facebook
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.button, backgroundColor: '#ffffff' }}
                    activeOpacity={0.8}>
                    <Text style={{ ...styles.textButton, color: '#000' }}>
                        Google
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
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