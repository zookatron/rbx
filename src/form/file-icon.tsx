import { cx } from "emotion";
import React from "react";

import { forwardRefAs } from "@/generic";
import { ModifierProps, transformModifiers } from "@/modifiers";

export type FileIconProps = ModifierProps;

export const FileIcon = forwardRefAs<FileIconProps, "span">((props, ref) => {
  const { as, ...rest } = transformModifiers(props);
  rest.className = cx("file-icon", rest.className);
  return React.createElement(as!, { ref, ...rest });
}, "span");