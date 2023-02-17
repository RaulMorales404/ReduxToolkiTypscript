import React from 'react'
import { Button, Text, View } from 'react-native';
import { useCustomDispatch, useCustomSelector } from '../app/hooks/index';
import { increment } from '../app/slices/sliceCounter';

export const Results = () => {
    const { counter } = useCustomSelector(state => state);
    const dispatch = useCustomDispatch();
    return (
        <View>
            <Text>
                {counter.counterValue > 18 ? "Puedes votar" : "Nel"} {counter.counterValue}

            </Text>
            <Button
                title='restar '
                onPress={() => dispatch(increment())}
            />

        </View>
    )
}
