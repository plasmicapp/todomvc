import * as React from "react";
import {
  PlasmicTodoApp,
  DefaultTodoAppProps,
} from "./plasmic/todo_mvc_for_tutorial_work/PlasmicTodoApp";
import { useState } from "react";
import { createEntry, Entry, ShowFilter } from "../model";
import Task from "./Task";

interface TodoAppProps extends DefaultTodoAppProps {
  children?: never;
}

function TodoApp(props: TodoAppProps) {
  const [entries, setEntries] = useState<Entry[]>([
    createEntry("Hello world"),
    createEntry("Goodbye world"),
  ]);
  const [showFilter, setShowFilter] = useState<ShowFilter>("all");
  const shownEntries = entries.filter((e) =>
    showFilter === "active"
      ? !e.done
      : showFilter === "completed"
      ? e.done
      : true
  );
  return (
    <PlasmicTodoApp
      {...props}
      header={{
        state:
          entries.length === 0
            ? "empty"
            : entries.every((e) => e.done)
            ? "allChecked"
            : undefined,
        onAdd: (entry) => setEntries([...entries, entry]),
      }}
      tasksContainer={{
        children: shownEntries.map((entry) => (
          <Task
            entry={entry}
            onChange={(entry) =>
              setEntries(entries.map((e) => (e.id === entry.id ? entry : e)))
            }
            onDelete={() =>
              setEntries(entries.filter((e) => e.id !== entry.id))
            }
          />
        )),
      }}
      footer={{
        showFilter,
        setShowFilter,
        onClear: () => {
          setEntries(entries.filter((e) => !e.done));
        },
        count: entries.filter((e) => !e.done).length,
      }}
    />
  );
}

export default TodoApp;
