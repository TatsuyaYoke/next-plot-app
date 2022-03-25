import { atom } from 'recoil'

export const isStoredState = atom({
    key: 'isStoredState',
    default: false
})