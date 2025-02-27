import type { TodoTask } from '../types/task'
import { Checkbox, ListItem } from '@fluentui/react-components'
import React from 'react'

interface TodoItemProps {
  task: TodoTask
  onToggle?: (task: TodoTask) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onToggle }) => {
  const isFinished = task.status === 'completed'
  return (
    <ListItem>
      <Checkbox
        checked={isFinished}
        label={<span className={isFinished ? 'line-through color-[var(--colorNeutralForegroundDisabled)]' : ''}>{task.title}</span>}
        onChange={() => {
          if (onToggle) {
            onToggle(task)
          }
        }}
      />
    </ListItem>
  )
}

export default TodoItem
