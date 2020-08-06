import * as React from "react";
import {
  PlasmicToggleButton,
  DefaultToggleButtonProps,
} from "./plasmic/todo_mvc_for_tutorial_work/PlasmicToggleButton";

interface ToggleButtonProps extends DefaultToggleButtonProps {
  onClick: () => void;
  selected: boolean;
}

function ToggleButton({
  onClick,
  selected,
  state,
  ...rest
}: ToggleButtonProps) {
  return (
    <PlasmicToggleButton
      {...rest}
      state={selected ? "selected" : undefined}
      onClick={onClick}
    />
  );
}

export default ToggleButton;
