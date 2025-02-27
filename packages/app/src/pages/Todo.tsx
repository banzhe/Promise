import type { TodoTask } from '../types/task'
import { Button } from '@fluentui/react-components'
import { AddFilled } from '@fluentui/react-icons'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { useState } from 'react'
import TodoAddDrawer from '../components/TodoAddDrawer'
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
  const [showAddInput, setShowAddInput] = useState(false)

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

  function handleAddTask(): void {
    setShowAddInput(true)
  }

  function handleSaveTask(title: string): void {
    const newTask: TodoTask = {
      id: Date.now().toString(),
      title,
      group: 'uncategorized',
      status: 'incomplete',
      createdTime: new Date(),
      sort: taskList.length,
    }
    setTaskList(prevList => [...prevList, newTask])
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

        <TodoAddDrawer
          open={showAddInput}
          onOpenChange={setShowAddInput}
          onAddTask={handleSaveTask}
        />

        <Button
          className="fixed bottom-4 right-4"
          onClick={handleAddTask}
          shape="circular"
          size="large"
          appearance="primary"
          icon={<AddFilled />}
        >
        </Button>
      </IonContent>
    </IonPage>
  )
}

export default Todo
