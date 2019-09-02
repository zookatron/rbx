import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const MenuLabel = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("menu-label", className), ref: ref }, rest)));
}, { as: "p" });
MenuLabel.displayName = "Menu.Label";
//# sourceMappingURL=menu-label.js.map