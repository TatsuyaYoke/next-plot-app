import { atom } from 'recoil'

export const isStoredState = atom({
    key: 'isStored',
    default: false
})