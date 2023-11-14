import { create } from 'zustand'

interface PlateState {
  bears: number
  increase: (by: number) => void
}
