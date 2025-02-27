import type { TodoTask } from '../types/task'
import { Body1, Button, Card, CardHeader, List } from '@fluentui/react-components'
import { ChevronDownFilled, ChevronUpFilled } from '@fluentui/react-icons'
import { Collapse } from '@fluentui/react-motion-components-preview'
import React, { useState } from 'react'
import TodoItem from './TodoItem'

interface TodoGroupProps {
  groupTitle: string
  taskList: TodoTask[]
  onToggleTask?: (task: TodoTask) => void
}

const TodoGroup: React.FC<TodoGroupProps> = ({ taskList, groupTitle, onToggleTask }) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  function toggleCollapse(): void {
    setIsCollapsed(prev => !prev)
  }

  return (
    <Card>
      <CardHeader
        header={(
          <Body1>
            <b>{groupTitle}</b>
          </Body1>
        )}
        action={(
          <Button
            appearance="subtle"
            icon={isCollapsed ? <ChevronDownFilled /> : <ChevronUpFilled />}
            onClick={toggleCollapse}
          />
        )}
      >
      </CardHeader>
      <Collapse visible={!isCollapsed}>
        <List>
          {taskList.map((todo, index) => (
            <TodoItem key={index} task={todo} onToggle={onToggleTask} />
          ))}
        </List>
      </Collapse>
    </Card>
  )
}

export default TodoGroup
