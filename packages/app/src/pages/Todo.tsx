import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import TodoList from '../components/TodoList'

const Todo: React.FC = () => {
  const mockTaskList = [
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
  ]
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <TodoList taskList={mockTaskList}></TodoList>
      </IonContent>
    </IonPage>
  )
}

export default Todo
