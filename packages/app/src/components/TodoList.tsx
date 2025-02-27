import type { TodoGroupI, TodoTask } from '../types/task'
import TodoGroup from './TodoGroup'

function groupTaskList(taskList: TodoTask[], groupList: TodoGroupI[]): Array<TodoGroupI & { taskList: TodoTask[] }> {
  return groupList.map(group => ({
    ...group,
    taskList: taskList.filter(task => (task.group === group.id && task.status !== 'completed') || (group.id === 'completed' && task.status === 'completed')),
  }))
}

interface TodoListProps {
  taskList: TodoTask[]
  groupList: TodoGroupI[]
  onToggleTask?: (task: TodoTask) => void
}

const TodoList: React.FC<TodoListProps> = ({ taskList, onToggleTask, groupList }) => {
  const taskGroupList = groupTaskList(taskList, groupList)
  return (
    <div className="p-sm space-y-sm bg-[var(--colorNeutralBackground2)] h-full">
      {taskGroupList.map(group => (
        <TodoGroup
          key={group.id}
          groupTitle={group.title}
          taskList={group.taskList}
          onToggleTask={onToggleTask}
        >
        </TodoGroup>
      ))}
    </div>
  )
}

export default TodoList
