import { IRegion } from './../interfaces/Region'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type {} from '@redux-devtools/extension'

interface MapState {
  hoveredRegion: Partial<IRegion> | null
  hoverRegion: (region: Partial<IRegion>) => void
  unhoverRegion: () => void
}

export const useMapStore = create<MapState>()(
  devtools(
    persist(
      (set) => ({
        hoveredRegion: null,
        hoverRegion: (region) => set(() => ({ hoveredRegion: region })),
        unhoverRegion: () => set(() => ({ hoveredRegion: null }))
      }),
      {
        name: 'map-storage',
      },
    ),
  )
)