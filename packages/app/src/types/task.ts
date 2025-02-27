export interface TodoTask {
  id: string
  title: string
  status: 'completed' | 'incomplete' | 'giveup'
  createdTime: Date
  completedTime?: Date
  group?: string
  sort: number
}

export interface TodoGroupI {
  id: string
  title: string
  sort: number
}
