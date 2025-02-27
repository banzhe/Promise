import type { TodoTask } from '../types/task'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { useState } from 'react'
import TodoList from '../components/TodoList'

const Todo: React.FC = () => {
  const [taskList, setTaskList] = useState<TodoTask[]>([
    {
      title: 'Task 0',
      status: 'incomplete' as const,
      createdTime: new Date('2021-01-01'),
    },
    {
      title: 'Task 1',
      group: 'group1',
      status: 'incomplete' as const,
      createdTime: new Date('2021-01-01'),
    },
    {
      title: 'Task 2',
      group: 'group1',
      status: 'incomplete' as const,
      createdTime: new Date('2021-01-01'),
    },
    {
      title: 'Task 3',
      group: 'group2',
      status: 'incomplete' as const,
      createdTime: new Date('2021-01-01'),
    },
  ])

  function handleToggleTask(toggledTask: TodoTask): void {
    setTaskList(prevTaskList =>
      prevTaskList.map(task =>
        // 假设任务可以通过title和createdTime唯一标识
        task.title === toggledTask.title
        && task.createdTime.getTime() === toggledTask.createdTime.getTime()
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
        <TodoList taskList={taskList} onToggleTask={handleToggleTask}></TodoList>
      </IonContent>
    </IonPage>
  )
}

export default Todo
