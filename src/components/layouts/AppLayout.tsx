import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { task } from "../../types";

import HeaderBar from "../widgets/HeaderBar";
import Sidebar from "../widgets/Sidebar";
import TaskView from "../widgets/TaskView";
import Task from "../widgets/Task";
import Clickable from "../ui/Clickable";

export default function AppLayout(props: { title: string; tasks: task[] }) {
  const [tasks, setTasks] = useState(props.tasks);

  const addTask = (): void => {
    setTasks([
      ...tasks,
      {
        id: new Date().getTime().toString(),
        description: "",
        completed: false,
      },
    ]);
  };

  const reorder = (list: task[], startIndex: number, endIndex: number) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  function onDragEnd(result: any) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const reorderedTasks = reorder(
      tasks,
      result.source.index,
      result.destination.index
    );

    setTasks([...reorderedTasks]);
  }

  return (
    <main className="grid grid-cols-app-layout grid-rows-app-layout h-full gap-4">
      <div className="col-start-2 row-start-1 w-full justify-self-center self-center">
        <HeaderBar title="Today" onAddButtonClick={addTask} />
      </div>

      <div className="max-w-sidebar row-start-2 col-start-1 w-full justify-self-end">
        <Sidebar />
      </div>

      <div className="row-start-2 col-start-2 w-full justify-self-center">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="list">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <TaskView>
                  {tasks?.map((t, i) => (
                    <Draggable key={t.id} draggableId={t.id} index={i}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Task description={t.description} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </TaskView>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </main>
  );
}
