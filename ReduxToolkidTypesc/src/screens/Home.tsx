import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { useCustomSelector, useCustomDispatch } from './../app/hooks/index';
import { decrement, increment, incrementByAmount } from '../app/slices/sliceCounter';
import { Results } from './Results';





const Home = () => {
    const navigation = useNavigation();
    const { counter } = useCustomSelector((state) => state);
    const dispatch = useCustomDispatch();


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
            {/* <Button
                onPress={() => {
                    navigation.navigate('Results');
                }}
                title='view Counter'
            /> */}
        </View>
    )
}

export default Home