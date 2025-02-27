import type { TodoTask } from '../types/task'
import TodoGroup from './TodoGroup'

function groupTaskList(taskList: TodoTask[]): Array<{
  groupTitle: string
  taskList: TodoTask[]
}> {
  const recordObject = taskList.reduce((acc, task) => {
    // todo use group id
    const group = task.status === 'completed' ? 'complete' : task.group ?? 'default'
    if (!acc[group]) {
      acc[group] = []
    }
    acc[group].push(task)
    return acc
  }, {
    complete: [],
  } as Record<string, TodoTask[]>)

  return Object.entries(recordObject).map(([groupTitle, taskList]) => ({
    groupTitle,
    taskList,
  }))
}

interface TodoListProps {
  taskList: TodoTask[]
  onToggleTask?: (task: TodoTask) => void
}

const TodoList: React.FC<TodoListProps> = ({ taskList, onToggleTask }) => {
  const groupList = groupTaskList(taskList)
  return (
    <div className="p-sm space-y-sm bg-[var(--colorNeutralBackground2)] h-full">
      {groupList.map(group => (
        <TodoGroup
          key={group.groupTitle}
          groupTitle={group.groupTitle}
          taskList={group.taskList}
          onToggleTask={onToggleTask}
        >
        </TodoGroup>
      ))}
    </div>
  )
}

export default TodoList
