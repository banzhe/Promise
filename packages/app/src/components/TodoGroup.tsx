import type { TodoTask } from '../types/task'
import { IonCard, IonCardContent, IonCardHeader, IonIcon, IonLabel, IonList } from '@ionic/react'
import { chevronDownOutline, chevronUpOutline } from 'ionicons/icons'
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
    <IonCard>
      <IonCardHeader>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <IonLabel>{groupTitle}</IonLabel>
          <IonIcon
            icon={isCollapsed ? chevronDownOutline : chevronUpOutline}
            onClick={toggleCollapse}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </IonCardHeader>
      <IonCardContent>
        { !isCollapsed && (
          <IonList lines="full">
            {taskList.map((todo, index) => (
              <TodoItem key={index} task={todo}></TodoItem>
            ))}
          </IonList>
        )}
      </IonCardContent>
    </IonCard>
  )
}

export default TodoGroup
