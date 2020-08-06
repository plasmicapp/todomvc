import * as React from "react";
import {
  PlasmicHeader,
  DefaultHeaderProps,
} from "./plasmic/todo_mvc_for_tutorial_work/PlasmicHeader";
import { createEntry, Entry } from "../model";
import { useState } from "react";

interface HeaderProps extends DefaultHeaderProps {
  children?: never;
  onAdd: (entry: Entry) => void;
}

function Header({ onAdd, ...rest }: HeaderProps) {
  const [text, setText] = useState("");
  return (
    <PlasmicHeader
      {...rest}
      textbox={{
        value: text,
        onChange: (e) => setText(e.target.value),
        onKeyDown: (e) => {
          if (e.key === "Enter") {
            onAdd(createEntry(text));
            setText("");
          }
        },
      }}
    />
  );
}

export default Header;
