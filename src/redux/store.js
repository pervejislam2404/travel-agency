import { configureStore } from '@reduxjs/toolkit'
import states from './stateSlice/StateSlice'

export const store = configureStore({
    reducer: {
        statesCounter: states
    },
})