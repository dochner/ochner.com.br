import type { WindowData } from '~/types/SOWindow'

export const useAppStore = defineStore('app', () => {
  const windows = ref<WindowData[]>([
    {
      id: 'contact',
      component: 'ContactWindow', // Assuming you'll create this component
      title: 'Contact',
      x: 150,
      y: 150,
      width: 300,
      height: 200,
      isActive: true,
      isOpen: true,
    },
    // Add more initial window data as needed
  ])

  function openWindow(windowData: WindowData) {
    const existingWindow = windows.value.find(w => w.id === windowData.id)
    if (existingWindow) {
      existingWindow.isActive = true
      existingWindow.isOpen = true
    }
    else {
      windows.value.push(windowData)
    }
  }

  function closeWindow(id: string) {
    const windowToClose = windows.value.find(w => w.id === id)
    if (windowToClose) {
      windowToClose.isOpen = false
    }
  }

  // Add actions for dragging, resizing, and focusing windows as needed

  return { windows, openWindow, closeWindow }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
