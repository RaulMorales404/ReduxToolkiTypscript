import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/sliceCounter';
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

/// BlackList para guardar lo que no quiero 
/// white list para gaurdar lo que quiero
// Configuracion para la local storage

const persistCounterConfig = {
    key: 'counter',
    storage: AsyncStorage,
    whileList: ['value'],
}
export const store = configureStore({
    reducer: {
        counter: persistReducer<ReturnType<typeof counterSlice>>(persistCounterConfig, counterSlice)
    },
    middleware: (defaultMiddleware) => defaultMiddleware({
        serializableCheck: false,
    })
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;