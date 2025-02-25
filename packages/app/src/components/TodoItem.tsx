import type { TodoTask } from '../types/task'
import { IonCheckbox, IonItem } from '@ionic/react'
import React from 'react'

interface TodoItemProps {
  task: TodoTask
}

const TodoItem: React.FC<TodoItemProps> = ({ task }) => {
  const isFinished = task.status === 'completed'
  return (
    <IonItem>
      <IonCheckbox slot="start" checked={isFinished} />
      {task.title}
    </IonItem>
  )
}

export default TodoItem
