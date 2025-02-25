import type { TodoTask } from '../types/task'
import { Button, Card, CardHeader, Text } from '@fluentui/react-components'
import React, { useState } from 'react'
import TodoItem from './TodoItem'

interface TodoGroupProps {
  groupTitle: string
  taskList: TodoTask[]
}

const TodoGroup: React.FC<TodoGroupProps> = ({ taskList, groupTitle }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  function toggleCollapse(): void {
    setIsCollapsed(prev => !prev)
  }

  return (
    <Card>
      <CardHeader>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text>{groupTitle}</Text>
          <Button onClick={toggleCollapse} aria-label="Toggle collapse">
            {isCollapsed ? 'Expand' : 'Collapse'}
          </Button>
        </div>
      </CardHeader>
      {!isCollapsed && (
        <ul>
          {taskList.map((todo, index) => (
            <TodoItem key={index} task={todo} />
          ))}
        </ul>
      )}
    </Card>
  )
}

export default TodoGroup
