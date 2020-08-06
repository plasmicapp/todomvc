import * as React from "react";
import {
  PlasmicTask,
  DefaultTaskProps,
} from "./plasmic/todo_mvc_for_tutorial_work/PlasmicTask";
import { Entry } from "../model";
import { useRef, useState } from "react";

interface TaskProps {
  // className prop is required for positioning instances of
  // this Component
  className?: string;
  entry: Entry;
  onChange: (entry: Entry) => void;
  onDelete: () => void;
}

function Task({ entry, onChange, onDelete, ...rest }: TaskProps) {
  const textbox = useRef<HTMLInputElement>(null);
  const [editing, setEditing] = useState(false);
  function finish() {
    onChange({
      ...entry,
      descrip: textbox.current!.value,
    });
    setEditing(false);
  }
  return (
    <PlasmicTask
      {...rest}
      state={editing ? "editing" : entry.done ? "checked" : undefined}
      checkbox={{
        onClick: () => onChange({ ...entry, done: !entry.done }),
      }}
      label={{
        onDoubleClick: () => setEditing(true),
      }}
      deleteBtn={{
        onClick: () => {
          onDelete();
        },
      }}
      textbox={{
        ref: textbox,
        autoFocus: true,
        onBlur: () => {
          finish();
        },
        defaultValue: entry.descrip,
        onKeyDown: (e) => {
          if (e.key === "Enter") {
            finish();
          }
        },
      }}
    >
      {entry.descrip}
    </PlasmicTask>
  );
}

export default Task;
