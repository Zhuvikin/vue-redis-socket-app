import Vuex from 'vuex'
import { ADD_DATA, ADD_EVENT } from './mutation-types'

export default () => new Vuex.Store({
    state: {
        dataItems: [],
        events: [],
    },
    mutations: {
        [ADD_DATA]: (state, {items}) => {
            state.dataItems = [...state.dataItems, ...items]
        },
        [ADD_EVENT]: (state, {event}) => {
            state.events = [...state.events, event]
        },
    },
})
