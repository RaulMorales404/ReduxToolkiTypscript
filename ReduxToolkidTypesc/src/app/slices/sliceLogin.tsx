import { AnyAction, createSlice, Dispatch, PayloadAction, ThunkDispatch } from '@reduxjs/toolkit';
import { api } from '../../apis/axiosApi';
import { AxiosResponse, AxiosError } from 'axios';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import { CounterState } from './sliceCounter';

interface TypeLoginData {
    token: string,
    isLoading: boolean,
}

const loginData: TypeLoginData = {
    token: '',
    isLoading: false,
}

const sliceLogin = createSlice({
    name: 'token',
    initialState: loginData,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        loginOut: (state) => {
            state.token = '';
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        }
    }
})

export const { setToken, loginOut, setIsLoading } = sliceLogin.actions;
export default sliceLogin.reducer;

export const doLogin = async (data: {}, dispatch: ThunkDispatch<{ counter: CounterState & PersistPartial; token: TypeLoginData & PersistPartial; }, undefined, AnyAction> & Dispatch<AnyAction>): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true))
    try {
        const resp: AxiosResponse = await api.post('/login', data);
        dispatch(setToken(resp.data))
        dispatch(setIsLoading(false))
        return resp
    } catch (error) {
        return error as AxiosError;
    } finally {
        dispatch(setIsLoading(false));
    }

}