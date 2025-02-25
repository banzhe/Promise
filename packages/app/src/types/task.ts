export interface TodoTask {
  title: string
  status: 'completed' | 'incomplete' | 'giveup'
  createdTime: Date
  completedTime?: Date
  group?: string
}
