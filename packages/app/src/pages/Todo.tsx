import type { TodoTask } from '../types/task'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { useState } from 'react'
import TodoList from '../components/TodoList'

const mockTaskList = [
  {
    id: '0',
    title: 'Task 0',
    group: 'uncategorized',
    status: 'incomplete' as const,
    createdTime: new Date('2021-01-01'),
    sort: 0,
  },
  {
    id: '1',
    title: 'Task 1',
    group: 'group1',
    status: 'incomplete' as const,
    createdTime: new Date('2021-01-01'),
    sort: 1,
  },
  {
    id: '2',
    title: 'Task 2',
    group: 'group1',
    status: 'incomplete' as const,
    createdTime: new Date('2021-01-01'),
    sort: 2,
  },
  {
    id: '3',
    title: 'Task 3',
    group: 'group2',
    status: 'incomplete' as const,
    createdTime: new Date('2021-01-01'),
    sort: 3,
  },
]

const mockGroupList = [
  {
    id: 'uncategorized',
    title: 'Uncategorized',
    sort: 0,
  },
  {
    id: 'group1',
    title: 'Group 1',
    sort: 1,
  },
  {
    id: 'group2',
    title: 'Group 2',
    sort: 2,
  },
  {
    id: 'completed',
    title: 'Completed',
    sort: 3,
  },
]

const Todo: React.FC = () => {
  const [taskList, setTaskList] = useState<TodoTask[]>(mockTaskList)
  const [groupList] = useState(mockGroupList)

  function handleToggleTask(toggledTask: TodoTask): void {
    setTaskList(prevTaskList =>
      prevTaskList.map(task =>
        task.id === toggledTask.id
          ? {
              ...task,
              status: task.status === 'completed' ? 'incomplete' : 'completed',
            }
          : task,
      ),
    )
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <TodoList
          taskList={taskList}
          onToggleTask={handleToggleTask}
          groupList={groupList}
        >
        </TodoList>
      </IonContent>
    </IonPage>
  )
}

export default Todo
