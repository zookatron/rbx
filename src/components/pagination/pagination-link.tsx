import { cx } from "emotion";
import React from "react";

import { forwardRefAs } from "@/generic";
import { ModifierProps, transformModifiers } from "@/modifiers";

export type PaginationLinkModifiers = Partial<{
  current: boolean;
}>;

export type PaginationLinkProps = ModifierProps & PaginationLinkModifiers;

export const PaginationLink = forwardRefAs<PaginationLinkProps, "a">(
  (props, ref) => {
    const { as, current, ...rest } = transformModifiers(props);
    rest.className = cx("pagination-link", rest.className, {
      "is-current": current,
    });
    return <li children={React.createElement(as!, { ref, ...rest })} />;
  },
  "a",
);