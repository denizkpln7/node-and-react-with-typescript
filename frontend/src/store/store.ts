import {configureStore} from '@reduxjs/toolkit'
import {useDispatch, useSelector} from 'react-redux'
// @ts-ignore
import type {RootState, AppDispatch} from './store'
import blogReducer from '../features/blog/blogSlice'


export const store = configureStore({
    reducer: {
        blog: blogReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()