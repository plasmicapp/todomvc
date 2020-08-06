import * as React from "react";
import {
  PlasmicFooter,
  DefaultFooterProps,
} from "./plasmic/todo_mvc_for_tutorial_work/PlasmicFooter";
import { ShowFilter } from "../model";

interface FooterProps extends DefaultFooterProps {
  children?: never;
  showFilter: ShowFilter;
  setShowFilter: (showFilter: ShowFilter) => void;
  onClear: () => void;
}

function Footer(props: FooterProps) {
  const { showFilter, setShowFilter, onClear, ...rest } = props;
  return (
    <PlasmicFooter
      {...rest}
      allToggle={{
        selected: showFilter === "all",
        onClick: () => {
          setShowFilter("all");
        },
      }}
      completedToggle={{
        selected: showFilter === "completed",
        onClick: () => {
          setShowFilter("completed");
        },
      }}
      activeToggle={{
        selected: showFilter === "active",
        onClick: () => {
          setShowFilter("active");
        },
      }}
      clearBtn={{
        onClick: onClear,
      }}
    />
  );
}

export default Footer;
