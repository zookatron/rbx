import * as tslib_1 from "tslib";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const PanelBlock = forwardRefAs((_a, ref) => {
    var { active, className } = _a, rest = tslib_1.__rest(_a, ["active", "className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("panel-block", { "is-active": active }, className), ref: ref }, rest)));
}, { as: "div" });
PanelBlock.displayName = "Panel.Block";
PanelBlock.propTypes = {
    active: PropTypes.bool,
};
//# sourceMappingURL=panel-block.js.map