import { Button, DrawerHeader, Input, OverlayDrawer } from '@fluentui/react-components'
import { AddFilled } from '@fluentui/react-icons'
import React, { useEffect, useRef, useState } from 'react'

interface TodoAddDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAddTask: (title: string) => void
}

const TodoAddDrawer: React.FC<TodoAddDrawerProps> = ({ open, onOpenChange, onAddTask }) => {
  const [title, setTitle] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  function handleSaveTask(): void {
    if (title.trim()) {
      onAddTask(title.trim())
      setTitle('')
      onOpenChange(false)
    }
    else {
      handleCancelAdd()
    }
  }

  function handleCancelAdd(): void {
    setTitle('')
    onOpenChange(false)
  }

  function handleKeyDown(event: React.KeyboardEvent): void {
    if (event.key === 'Enter') {
      handleSaveTask()
    }
    else if (event.key === 'Escape') {
      handleCancelAdd()
    }
  }

  return (
    <OverlayDrawer
      position="bottom"
      open={open}
      onOpenChange={(_, state) => onOpenChange(state.open)}
      style={{ height: 'auto' }}
    >
      <DrawerHeader style={{ padding: 0 }}>
        <div className="p-2 flex space-x-2">
          <Input
            ref={inputRef}
            placeholder="Add New Task..."
            value={title}
            onChange={(e, data) => setTitle(data.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
            size="large"
          />
          <Button
            icon={<AddFilled />}
            appearance="primary"
            size="large"
            onClick={handleSaveTask}
          />
        </div>
      </DrawerHeader>
    </OverlayDrawer>
  )
}

export default TodoAddDrawer
