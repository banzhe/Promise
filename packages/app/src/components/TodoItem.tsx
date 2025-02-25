import type { TodoTask } from '../types/task'
import { Checkbox, ListItem } from '@fluentui/react-components'
import React from 'react'

interface TodoItemProps {
  task: TodoTask
}

const TodoItem: React.FC<TodoItemProps> = ({ task }) => {
  const isFinished = task.status === 'completed'
  return (
    <ListItem>
      <Checkbox checked={isFinished} />
      {task.title}
    </ListItem>
  )
}

export default TodoItem
