import create from 'zustand'
import { persist } from 'zustand/middleware'

let settingsStore = (set) => ({
  dark: false,
  toggleDarkMode: () => set((state) => ({ dark: !state.dark })),
})

let peopleStore = (set) => ({
  people: ['Marcelo', 'Alice'],
  addPerson: (person) => set((state) => ({ people: [...state.people, person] })),
})

settingsStore = persist(settingsStore, { name: 'app_settings' })

peopleStore = persist(peopleStore, { name: 'users_settings' })

export const useSettingsStore = create(settingsStore)
export const usePeopleStore = create(peopleStore)
