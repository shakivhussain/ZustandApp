import { View, Text, Button } from 'react-native'
import React from 'react'
import { useCounterStore } from '../store/store'

const ComponentA = () => {

    const increment = useCounterStore((state) => state.increment)

    const decrement = useCounterStore((state) => state.decrement)

    return (
        <View>


            <Button title="Increment" onPress={increment} />
            <Button title="Decrement" onPress={decrement} />

        </View>
    )
}

export default ComponentA