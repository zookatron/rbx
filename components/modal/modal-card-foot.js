import * as tslib_1 from "tslib";
import classNames from "classnames";
import React from "react";
import { forwardRefAs, Generic } from "../../base";
export const ModalCardFoot = forwardRefAs((_a, ref) => {
    var { className } = _a, rest = tslib_1.__rest(_a, ["className"]);
    return (React.createElement(Generic, Object.assign({ className: classNames("modal-card-foot", className), ref: ref }, rest)));
}, { as: "footer" });
ModalCardFoot.displayName = "Modal.Card.Foot";
//# sourceMappingURL=modal-card-foot.js.map