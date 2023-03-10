import React from 'react';

import { ActivityIndicator, Button, Text, View } from 'react-native';
import { useCustomSelector, useCustomDispatch } from './../app/hooks/index';
import { decrement, increment, incrementByAmount } from '../app/slices/sliceCounter';
import { Results } from './Results';
import { doLogin, loginOut } from '../app/slices/sliceLogin';
import { StackScreenProps } from '@react-navigation/stack';




interface Props extends StackScreenProps<any, any> { }

const Home = ({navigation}:Props) => {

    const { counter, token } = useCustomSelector((state) => state);
    const dispatch = useCustomDispatch();

    console.log(
        token.token,
        token.isLoading
    )
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {token.isLoading &&
                <ActivityIndicator color="blue" size={50} />
            }
            <Results />
            <Text style={{ marginTop: 50, fontSize: 30, }}>
                Home {counter.counterValue}
            </Text>

            <Button title='+1'
                onPress={() => dispatch(increment())}
            />
            <Button
                onPress={() => dispatch(decrement())}
                title='-1'
            />
            <Button
                onPress={() => dispatch(incrementByAmount(10))}
                title='+10'
            />
            <Button
                onPress={() => doLogin(
                    {
                        "email": "eve.holt@reqres.in",
                        "password": "cityslicka"
                    },
                    dispatch
                )}
                title='view Counter'
            />
            <Button
                onPress={() => dispatch(loginOut())}
                title='salir'
            />
            <Button
                onPress={() =>navigation.navigate('Register')}
                title='Register'
            />

        </View>
    )
}

export default Home