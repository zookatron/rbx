import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { forwardRefAs, Generic } from "../../base";
import { HelpersProps } from "../../base/helpers";
import { Prefer } from "../../types";

export const BUTTON_GROUP_DEFAULTS = {
  alignments: ["centered", "right"] as const,
  sizes: ["small", "medium", "large"] as const,
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonGroupVariablesOverrides {}

export interface ButtonGroupVariablesDefaults {
  alignments: (typeof BUTTON_GROUP_DEFAULTS["alignments"])[number];
  sizes: (typeof BUTTON_GROUP_DEFAULTS["sizes"])[number];
}

export type ButtonGroupVariables = Prefer<
  ButtonGroupVariablesOverrides,
  ButtonGroupVariablesDefaults
>;

export type ButtonGroupModifierProps = {
  align?: ButtonGroupVariables["alignments"];
  hasAddons?: boolean;
  size?: ButtonGroupVariables["sizes"];
};

export type ButtonGroupProps = HelpersProps & ButtonGroupModifierProps;

export const ButtonGroup = Object.assign(
  forwardRefAs<ButtonGroupProps>(
    ({ align, className, hasAddons, size, ...rest }, ref) => (
      <Generic
        ref={ref}
        className={classNames(
          "buttons",
          {
            [`are-${size}`]: size,
            "has-addons": hasAddons,
            [`is-${[align]}`]: align,
          },
          className,
        )}
        {...rest}
      />
    ),
    { as: "div" },
  ),
  {
    VARIABLE_DEFAULTS: BUTTON_GROUP_DEFAULTS,
  },
);

ButtonGroup.displayName = "Button.Group";
ButtonGroup.propTypes = {
  align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hasAddons: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
