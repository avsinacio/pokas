import create from 'zustand'

const useTrainerStore = create((set) => ({
  trainer: '',
  setTrainer: (trainer) => set({ trainer }),
}))

export default useTrainerStore
