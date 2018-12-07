import { cx } from "emotion";
import React from "react";

import { forwardRefAs } from "@/generic";
import { ModifierProps, transformModifiers } from "@/modifiers";

export type FileNameProps = ModifierProps;

export const FileName = forwardRefAs<FileNameProps, "span">((props, ref) => {
  const { as, ...rest } = transformModifiers(props);
  rest.className = cx("file-name", rest.className);
  return React.createElement(as!, { ref, ...rest });
}, "span");