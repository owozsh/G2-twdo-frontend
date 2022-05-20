import { useState, useRef, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Check } from "react-feather";
import Clickable from "../common/Clickable";

export default function Task(props: {
  description: string;
  id: string;
  index: number;
}) {
  const [isComplete, setIsComplete] = useState(false);
  const [description, setDescription] = useState(props.description);
  const [editMode, setEditMode] = useState(false);

  const inputElement = useRef<HTMLInputElement>(null);

  const toggleIsComplete = (e: any) => {
    e.stopPropagation();
    setIsComplete(!isComplete);
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" || e.key === "Enter") setEditMode(false);
    });

    if (description === "") {
      setEditMode(true);
    }
  }, [description]);

  useEffect(() => {
    if (inputElement.current != null) {
      editMode ? inputElement.current.focus() : inputElement.current.blur();
    }
  }, [editMode]);

  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided) => (
        <li
          className="hover:cursor-default"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Clickable
            className={`task-container ${editMode && "edit-mode"}`}
            hoverDisabled={editMode}
            onClick={() => setEditMode(true)}
          >
            <div
              className={`checkbox ${editMode && "edit-mode"} ${
                isComplete && "checked"
              }`}
              onClick={(e) => toggleIsComplete(e)}
            >
              <Check />
            </div>
            <input
              disabled={!editMode}
              value={description}
              ref={inputElement}
              onFocus={(e) =>
                e.currentTarget.setSelectionRange(
                  e.currentTarget.value.length,
                  e.currentTarget.value.length
                )
              }
              onChange={(e) => setDescription(e.target.value)}
            />
            {/* <ActionMenu editMode={editMode}>
          <Button buttonType="default">
            <Calendar />
          </Button>
          <Button buttonType="destructive">
            <Trash2 />
          </Button>
        </ActionMenu> */}
          </Clickable>
          {editMode ? (
            <div
              className="absolute z-10 top-0 left-0 h-screen w-screen"
              onClick={() => setEditMode(false)}
            />
          ) : (
            ""
          )}
        </li>
      )}
    </Draggable>
  );
}

// const ActionMenu = styled.div`
//   ${(props: { editMode: boolean }) =>
//     props.editMode ? "display: flex;" : "display: none;"}
//   justify-content: flex-end;
// `;

// const Checkbox = styled.div`
//   margin-right: 0.5rem;

//   transition: transform 0.1s cubic-bezier(0.165, 0.84, 0.44, 1),
//     opacity 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);

//   &:before {
//     content: "";

//     display: block;
//     transform: translate(-0.3rem, -0.3rem);
//     border: 0.7rem solid transparent;
//   }

//   svg {
//     ${(props: { isComplete: boolean; editMode: boolean }) =>
//       props.isComplete ? "" : "display: hidden"}
//     min-width: 1rem;
//     stroke-width: 2px;
//     transform: translate(-0.55rem, -0.05rem);
//   }
// `;

// const Button = styled.button`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   height: 1.4rem;
//   width: 1.4rem;
//   margin-left: 0.2rem;

//   border: none;
//   border-radius: 0.2rem;
//   background-color: transparent;

//   outline: transparent;

//   transition: background-color 0.2s cubic-bezier(0.165, 0.84, 0.44, 1),
//     outline 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);

//   &:hover {
//     background-color: ${(props: { buttonType: string }) =>
//       props.buttonType == "destructive" ? "#ff000015" : "#0000ff15"};

//     outline: 1px solid
//       ${(props: { buttonType: string }) =>
//         props.buttonType == "destructive" ? "#ff000030" : "#0000ff30"};

//     svg {
//       color: ${(props: { buttonType: string }) =>
//         props.buttonType == "destructive" ? "red" : "blue"};
//     }
//   }

//   svg {
//     color: #888;
//     width: 1rem;
//     stroke-width: 1.5px;
//     transition: color 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
//   }
// `;
