(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('classnames'), require('react-dom')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'classnames', 'react-dom'], factory) :
    (global = global || self, factory(global.rbx = {}, global.React, global.PropTypes, global.classNames, global.ReactDOM));
}(this, function (exports, React, PropTypes, classNames, ReactDOM) { 'use strict';

    React = React && React.hasOwnProperty('default') ? React['default'] : React;
    PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
    classNames = classNames && classNames.hasOwnProperty('default') ? classNames['default'] : classNames;
    ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

    function forwardRefAs(factory, defaultProps) {
        const forward = React.forwardRef(factory);
        forward.defaultProps = defaultProps;
        return forward;
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    const renderablePropType = PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.shape({ render: PropTypes.func.isRequired }),
    ]);

    const DEFAULTS = {
        colors: [
            "primary",
            "success",
            "info",
            "warning",
            "danger",
            "light",
            "dark",
            "white",
            "black",
            "link",
        ],
        shades: [
            "black-bis",
            "black-ter",
            "grey-darker",
            "grey-dark",
            "grey",
            "grey-light",
            "grey-lighter",
            "white-ter",
            "white-bis",
        ],
        badgeSizes: ["small", "medium", "large"],
        floatPulledAlignments: ["left", "right"],
        breakpoints: [
            "mobile",
            "tablet",
            "desktop",
            "widescreen",
            "fullhd",
            "touch",
        ],
        breakpointsLimited: ["mobile", "fullhd", "touch"],
        tooltipPositions: ["top", "right", "bottom", "left"],
        textAlignments: ["centered", "justified", "left", "right"],
        textSizes: [1, 2, 3, 4, 5, 6, 7],
        textTransforms: ["capitalized", "lowercase", "uppercase"],
        textWeights: ["light", "medium", "normal", "semibold", "bold"],
        displays: ["block", "flex", "inline", "inline-block", "inline-flex"],
    };

    const makePropTypesFactory = makePropTypes => variables => makePropTypes(Object.assign({}, DEFAULTS, variables));
    const makeValidatingTransformFactory = (makePropTypesFunc, transformFunc) => (variables = DEFAULTS) => {
        const propTypes = makePropTypesFunc(variables);
        return (props, componentName, location = "prop") => {
            PropTypes.checkPropTypes(propTypes, props, location, componentName);
            return transformFunc(props);
        };
    };
    const makeRootValidatingTransformFactory = (...mvtfs) => (variables) => {
        const vtfs = mvtfs.map(func => func(Object.assign({}, DEFAULTS, variables)));
        return (props, componentName, location = "prop") => vtfs.reduce((acc, vtf) => vtf(acc, componentName, location), props);
    };

    const makePropTypes = makePropTypesFactory(vars => ({
        badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        badgeColor: PropTypes.oneOf(vars.colors),
        badgeOutlined: PropTypes.bool,
        badgeRounded: PropTypes.bool,
        badgeSize: PropTypes.oneOf(vars.badgeSizes),
    }));
    const transform = props => {
        const { badge, badgeColor, badgeOutlined, badgeRounded, badgeSize, className } = props, rest = __rest(props, ["badge", "badgeColor", "badgeOutlined", "badgeRounded", "badgeSize", "className"]);
        return Object.assign({ className: classNames({
                badge,
                [`has-badge-${badgeColor}`]: badgeColor,
                "has-badge-outlined": badgeOutlined,
                "has-badge-rounded": badgeRounded,
                [`has-badge-${badgeSize}`]: badgeSize,
            }, className) }, (badge !== undefined ? { "data-badge": badge } : {}), rest);
    };
    const makeValidatingTransform = makeValidatingTransformFactory(makePropTypes, transform);

    const makePropTypes$1 = makePropTypesFactory(vars => ({
        clearfix: PropTypes.bool,
        pull: PropTypes.oneOf(vars.floatPulledAlignments),
    }));
    const transform$1 = props => {
        const { className, clearfix, pull } = props, rest = __rest(props, ["className", "clearfix", "pull"]);
        return Object.assign({ className: classNames({
                "is-clearfix": clearfix,
                [`is-pulled-${pull}`]: pull,
            }, className) }, rest);
    };
    const makeValidatingTransform$1 = makeValidatingTransformFactory(makePropTypes$1, transform$1);

    const makePropTypes$2 = makePropTypesFactory(vars => ({
        marginless: PropTypes.bool,
        paddingless: PropTypes.bool,
        radiusless: PropTypes.bool,
        relative: PropTypes.bool,
        shadowless: PropTypes.bool,
        unselectable: PropTypes.bool,
    }));
    const transform$2 = props => {
        const { className, marginless, paddingless, radiusless, relative, shadowless, unselectable } = props, rest = __rest(props, ["className", "marginless", "paddingless", "radiusless", "relative", "shadowless", "unselectable"]);
        return Object.assign({ className: classNames({
                "is-marginless": marginless,
                "is-paddingless": paddingless,
                "is-radiusless": radiusless,
                "is-relative": relative,
                "is-shadowless": shadowless,
                "is-unselectable": unselectable,
            }, className) }, rest);
    };
    const makeValidatingTransform$2 = makeValidatingTransformFactory(makePropTypes$2, transform$2);

    const makePropTypes$3 = makePropTypesFactory(vars => ({
        clipped: PropTypes.bool,
    }));
    const transform$3 = props => {
        const { className, clipped } = props, rest = __rest(props, ["className", "clipped"]);
        return Object.assign({ className: classNames({ "is-clipped": clipped }, className) }, rest);
    };
    const makeValidatingTransform$3 = makeValidatingTransformFactory(makePropTypes$3, transform$3);

    const makePropTypes$4 = makePropTypesFactory(vars => ({
        overlay: PropTypes.bool,
    }));
    const transform$4 = props => {
        const { className, overlay } = props, rest = __rest(props, ["className", "overlay"]);
        return Object.assign({ className: classNames({ "is-overlay": overlay }, className) }, rest);
    };
    const makeValidatingTransform$4 = makeValidatingTransformFactory(makePropTypes$4, transform$4);

    const makeResponsiveBreakpointPropTypes = makePropTypesFactory(vars => ({
        display: PropTypes.shape({
            only: PropTypes.bool,
            value: PropTypes.oneOf(vars.displays).isRequired,
        }),
        hide: PropTypes.shape({
            only: PropTypes.bool,
            value: PropTypes.bool.isRequired,
        }),
        textAlign: PropTypes.shape({
            only: PropTypes.bool,
            value: PropTypes.oneOf(vars.textAlignments).isRequired,
        }),
        textSize: PropTypes.shape({
            only: PropTypes.bool,
            value: PropTypes.oneOf(vars.textSizes).isRequired,
        }),
    }));
    const makeResponsiveBreakpointLimitedPropTypes = makePropTypesFactory(vars => ({
        display: PropTypes.shape({
            value: PropTypes.oneOf(vars.displays).isRequired,
        }),
        hide: PropTypes.shape({
            value: PropTypes.bool.isRequired,
        }),
        textAlign: PropTypes.shape({
            value: PropTypes.oneOf(vars.textAlignments).isRequired,
        }),
        textSize: PropTypes.shape({
            value: PropTypes.oneOf(vars.textSizes).isRequired,
        }),
    }));
    const makePropTypes$5 = makePropTypesFactory(vars => ({
        responsive: PropTypes.shape(vars.breakpoints
            .map(breakpoint => ({
            [breakpoint]: PropTypes.shape(vars.breakpointsLimited.indexOf(breakpoint) === -1
                ? makeResponsiveBreakpointPropTypes(vars)
                : makeResponsiveBreakpointLimitedPropTypes(vars)),
        }))
            .reduce((acc, cv) => (Object.assign({}, acc, cv)), {})),
    }));
    const transform$5 = props => {
        const { className, responsive } = props, rest = __rest(props, ["className", "responsive"]);
        return Object.assign({ className: classNames(responsive !== undefined
                ? Object.keys(responsive)
                    .filter(breakpoint => responsive[breakpoint] !== undefined)
                    .map(breakpoint => {
                    const names = {};
                    const { display, hide, textAlign, textSize } = responsive[breakpoint];
                    if (display !== undefined) {
                        const value = display.value;
                        const only = "only" in display ? display.only === true : false;
                        names[`is-${value}-${breakpoint}${only ? "-only" : ""}`] = value;
                    }
                    if (hide !== undefined) {
                        const value = hide.value;
                        const only = "only" in hide ? hide.only === true : false;
                        names[`is-hidden-${breakpoint}${only ? "-only" : ""}`] = value;
                    }
                    if (textAlign !== undefined) {
                        const value = textAlign.value;
                        const only = "only" in textAlign ? textAlign.only === true : false;
                        names[`has-text-${value}-${breakpoint}${only ? "-only" : ""}`] = value;
                    }
                    if (textSize !== undefined) {
                        const value = textSize.value;
                        const only = "only" in textSize ? textSize.only === true : false;
                        names[`is-size-${value}-${breakpoint}${only ? "-only" : ""}`] = value;
                    }
                    return names;
                })
                    .reduce((acc, cv) => (Object.assign({}, acc, cv)), {})
                : undefined, className) }, rest);
    };
    const makeValidatingTransform$5 = makeValidatingTransformFactory(makePropTypes$5, transform$5);

    const makePropTypes$6 = makePropTypesFactory(vars => ({
        tooltip: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        tooltipActive: PropTypes.bool,
        tooltipColor: PropTypes.oneOf(vars.colors),
        tooltipMultiline: PropTypes.bool,
        tooltipPosition: PropTypes.oneOf(vars.tooltipPositions),
        tooltipResponsive: PropTypes.objectOf(PropTypes.oneOf(vars.tooltipPositions)),
    }));
    const transform$6 = props => {
        const { className, tooltip, tooltipActive, tooltipColor, tooltipMultiline, tooltipPosition, tooltipResponsive = {} } = props, rest = __rest(props, ["className", "tooltip", "tooltipActive", "tooltipColor", "tooltipMultiline", "tooltipPosition", "tooltipResponsive"]);
        return Object.assign({ className: classNames({
                "is-tooltip-active": tooltipActive,
                [`is-tooltip-${tooltipColor}`]: tooltipColor,
                "is-tooltip-multiline": tooltipMultiline,
                [`is-tooltip-${tooltipPosition}`]: tooltipPosition,
                tooltip,
            }, ...Object.keys(tooltipResponsive).map(breakpoint => `is-tooltip-${tooltipResponsive[breakpoint]}-${breakpoint}`), className) }, (tooltip !== undefined ? { "data-tooltip": tooltip } : {}), rest);
    };
    const makeValidatingTransform$6 = makeValidatingTransformFactory(makePropTypes$6, transform$6);

    const makePropTypes$7 = makePropTypesFactory(vars => ({
        backgroundColor: PropTypes.oneOf([...vars.colors, ...vars.shades]),
        italic: PropTypes.bool,
        textAlign: PropTypes.oneOf(vars.textAlignments),
        textColor: PropTypes.oneOf([...vars.colors, ...vars.shades]),
        textSize: PropTypes.oneOf(vars.textSizes),
        textTransform: PropTypes.oneOf(vars.textTransforms),
        textWeight: PropTypes.oneOf(vars.textWeights),
    }));
    const transform$7 = props => {
        const { backgroundColor, className, italic, textAlign, textColor, textSize, textTransform, textWeight } = props, rest = __rest(props, ["backgroundColor", "className", "italic", "textAlign", "textColor", "textSize", "textTransform", "textWeight"]);
        return Object.assign({ className: classNames({
                [`has-background-${backgroundColor}`]: backgroundColor,
                [`has-text-${textColor}`]: textColor,
                "is-italic": italic,
                [`is-${textTransform}`]: textTransform,
                [`has-text-${textAlign}`]: textAlign,
                [`has-text-weight-${textWeight}`]: textWeight,
                [`is-size-${textSize}`]: textSize,
            }, className) }, rest);
    };
    const makeValidatingTransform$7 = makeValidatingTransformFactory(makePropTypes$7, transform$7);

    const makePropTypes$8 = makePropTypesFactory(vars => ({
        hidden: PropTypes.bool,
        invisible: PropTypes.bool,
        srOnly: PropTypes.bool,
    }));
    const transform$8 = props => {
        const { className, hidden, invisible, srOnly } = props, rest = __rest(props, ["className", "hidden", "invisible", "srOnly"]);
        return Object.assign({ className: classNames({
                "is-hidden": hidden,
                "is-invisible": invisible,
                "is-sr-only": srOnly,
            }, className) }, rest);
    };
    const makeValidatingTransform$8 = makeValidatingTransformFactory(makePropTypes$8, transform$8);

    const makeRootValidatingTransform = makeRootValidatingTransformFactory(makeValidatingTransform, makeValidatingTransform$1, makeValidatingTransform$3, makeValidatingTransform$4, makeValidatingTransform$6, makeValidatingTransform$7, makeValidatingTransform$8, makeValidatingTransform$2, makeValidatingTransform$5);

    const initialValue = {
        transform: makeRootValidatingTransform(DEFAULTS),
    };
    const ThemeContext = React.createContext(initialValue);

    const Generic = forwardRefAs((_a, ref) => {
        var { as } = _a, rest = __rest(_a, ["as"]);
        return (React.createElement(ThemeContext.Consumer, null, ({ transform }) => React.createElement(as, Object.assign({ ref }, transform(rest, "Generic")))));
    }, { as: "div" });
    Generic.displayName = "Generic";
    Generic.propTypes = {
        as: renderablePropType,
    };

    const BreadcrumbItem = forwardRefAs((_a, ref) => {
        var { active } = _a, rest = __rest(_a, ["active"]);
        return (React.createElement("li", { className: classNames({ "is-active": active }) },
            React.createElement(Generic, Object.assign({ ref: ref }, rest))));
    }, { as: "a" });
    BreadcrumbItem.displayName = "Breadcrumb.Item";
    BreadcrumbItem.propTypes = {
        active: PropTypes.bool,
    };

    const Breadcrumb = Object.assign(forwardRefAs((_a, ref) => {
        var { align, children, className, separator, size } = _a, rest = __rest(_a, ["align", "children", "className", "separator", "size"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("breadcrumb", {
                [`has-${separator}-separator`]: separator,
                [`is-${align}`]: align,
                [`is-${size}`]: size,
            }, className), ref: ref }, rest),
            React.createElement("ul", null, children)));
    }, { as: "nav" }), { Item: BreadcrumbItem });
    Breadcrumb.displayName = "Breadcrumb";
    Breadcrumb.propTypes = {
        align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        separator: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const CardContent = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("card-content", className), ref: ref }, rest)));
    }, { as: "div" });
    CardContent.displayName = "Card.Content";

    const CardFooterItem = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("card-footer-item", className), ref: ref }, rest)));
    }, { as: "div" });
    CardFooterItem.displayName = "Card.Footer.Item";

    const CardFooter = Object.assign(forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("card-footer", className), ref: ref }, rest)));
    }, { as: "div" }), { Item: CardFooterItem });
    CardFooter.displayName = "Card.Footer";

    const CardHeaderIcon = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("card-header-icon", className), ref: ref }, rest)));
    }, { as: "div" });
    CardHeaderIcon.displayName = "Card.Header.Icon";

    const CardHeaderTitle = forwardRefAs((_a, ref) => {
        var { align, className } = _a, rest = __rest(_a, ["align", "className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("card-header-title", { [`is-${align}`]: align }, className), ref: ref }, rest)));
    }, { as: "div" });
    CardHeaderTitle.displayName = "Card.Header.Title";
    CardHeaderTitle.propTypes = {
        align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const CardHeader = Object.assign(forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("card-header", className), ref: ref }, rest)));
    }, { as: "div" }), {
        Icon: CardHeaderIcon,
        Title: CardHeaderTitle,
    });
    CardHeader.displayName = "Card.Header";

    const CardImage = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("card-image", className), ref: ref }, rest)));
    }, { as: "div" });
    CardImage.displayName = "Card.Image";

    const Card = Object.assign(forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("card", className), ref: ref }, rest)));
    }, { as: "div" }), {
        Content: CardContent,
        Footer: CardFooter,
        Header: CardHeader,
        Image: CardImage,
    });
    Card.displayName = "Card";

    const canUseDOM = () => !(typeof window === "undefined" ||
        window.document === undefined ||
        window.document.createElement === undefined);
    const combineRefs = (...refs) => {
        return (instance) => {
            for (const item of refs) {
                if (item === null || item === undefined) {
                    continue;
                }
                if (typeof item === "object") {
                    item.current = instance;
                }
                else {
                    item(instance);
                }
            }
        };
    };
    const noop = () => { };

    const initialValue$1 = {
        active: false,
        setActive: noop,
    };
    const DropdownContext = React.createContext(initialValue$1);

    class DropdownContainer extends React.PureComponent {
        constructor(props) {
            super(props);
            this.ref = React.createRef();
            this.handleClick = (event) => {
                if (this.props.managed !== true &&
                    this.active &&
                    this.ref.current !== null) {
                    if (event.target instanceof Element &&
                        !this.ref.current.contains(event.target)) {
                        this.active = false;
                    }
                }
            };
            this.state = { active: props.active === true };
        }
        componentDidMount() {
            document.addEventListener("click", this.handleClick);
        }
        componentWillUnmount() {
            document.removeEventListener("click", this.handleClick);
        }
        render() {
            const _a = this.props, { active, align, className, hoverable, innerRef, managed, up } = _a, rest = __rest(_a, ["active", "align", "className", "hoverable", "innerRef", "managed", "up"]);
            return (React.createElement(DropdownContext.Provider, { value: {
                    active: this.active,
                    setActive: (value) => (this.active = value),
                } },
                React.createElement(Generic, Object.assign({ className: classNames("dropdown", {
                        [`is-${align}`]: align,
                        "is-active": this.active,
                        "is-hoverable": hoverable,
                        "is-up": up,
                    }, className), ref: combineRefs(this.ref, innerRef) }, rest))));
        }
        get active() {
            return this.props.managed === true
                ? this.props.active === true
                : this.state.active;
        }
        set active(value) {
            if (this.props.managed !== true) {
                this.setState({ active: value });
            }
        }
    }
    DropdownContainer.displayName = "Dropdown.Container";

    const DropdownContent = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("dropdown-content", className), ref: ref }, rest)));
    }, { as: "div" });
    DropdownContent.displayName = "Dropdown.Content";

    const DropdownDivider = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("dropdown-divider", className), ref: ref }, rest)));
    }, { as: "hr" });
    DropdownDivider.displayName = "Dropdown.Divider";

    const onClickHandler = (onClick, ctx) => (event) => {
        if (onClick !== undefined) {
            onClick(event);
        }
        ctx.setActive(false);
    };
    const DropdownItem = forwardRefAs((_a, ref) => {
        var { active, className, onClick } = _a, rest = __rest(_a, ["active", "className", "onClick"]);
        return (React.createElement(DropdownContext.Consumer, null, ctx => (React.createElement(Generic, Object.assign({ className: classNames("dropdown-item", { "is-active": active }, className), onClick: onClickHandler(onClick, ctx), ref: ref }, rest)))));
    }, { as: "a" });
    DropdownItem.displayName = "Dropdown.Item";
    DropdownItem.propTypes = {
        active: PropTypes.bool,
        onClick: PropTypes.func,
    };

    const DropdownMenu = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("dropdown-menu", className), ref: ref }, rest)));
    }, { as: "div" });
    DropdownMenu.displayName = "Dropdown.Menu";

    const onClickHandler$1 = (onClick, ctx) => (event) => {
        if (onClick !== undefined) {
            onClick(event);
        }
        ctx.setActive(!ctx.active);
    };
    const DropdownTrigger = forwardRefAs((_a, ref) => {
        var { className, onClick } = _a, rest = __rest(_a, ["className", "onClick"]);
        return (React.createElement(DropdownContext.Consumer, null, ctx => (React.createElement(Generic, Object.assign({ className: classNames("dropdown-trigger", className), onClick: onClickHandler$1(onClick, ctx), ref: ref }, rest)))));
    }, { as: "div" });
    DropdownTrigger.displayName = "Dropdown.Trigger";
    DropdownTrigger.propTypes = {
        onClick: PropTypes.func,
    };

    const Dropdown = Object.assign(forwardRefAs((props, ref) => React.createElement(DropdownContainer, Object.assign({ innerRef: ref }, props)), { as: "div" }), {
        Container: DropdownContainer,
        Content: DropdownContent,
        Context: DropdownContext,
        Divider: DropdownDivider,
        Item: DropdownItem,
        Menu: DropdownMenu,
        Trigger: DropdownTrigger,
    });
    Dropdown.displayName = "Dropdown";
    Dropdown.propTypes = {
        active: PropTypes.bool,
        align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        hoverable: PropTypes.bool,
        managed: PropTypes.bool,
        up: PropTypes.bool,
    };

    const LevelItem = forwardRefAs((_a, ref) => {
        var { align, className } = _a, rest = __rest(_a, ["align", "className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames({
                "level-item": align === undefined,
                [`level-${align}`]: align,
            }, className), ref: ref }, rest)));
    }, { as: "div" });
    LevelItem.displayName = "Level.Item";
    LevelItem.propTypes = {
        align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const Level = Object.assign(forwardRefAs((_a, ref) => {
        var { breakpoint, className } = _a, rest = __rest(_a, ["breakpoint", "className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("level", { [`is-${breakpoint}`]: breakpoint }, className), ref: ref }, rest)));
    }, { as: "nav" }), { Item: LevelItem });
    Level.displayName = "Level";
    Level.propTypes = {
        breakpoint: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const ListItem = forwardRefAs((_a, ref) => {
        var { active, className } = _a, rest = __rest(_a, ["active", "className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("list-item", { "is-active": active }, className), ref: ref }, rest)));
    }, { as: "a" });
    ListItem.displayName = "List.Item";
    ListItem.propTypes = {
        active: PropTypes.bool,
    };

    const List = Object.assign(forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("list", className), ref: ref }, rest)));
    }, { as: "div" }), { Item: ListItem });
    List.displayName = "List";

    const MediaItem = forwardRefAs((_a, ref) => {
        var { align, className } = _a, rest = __rest(_a, ["align", "className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames({ [`media-${align}`]: align }, className), ref: ref }, rest)));
    }, {
        align: "content",
        as: "div",
    });
    MediaItem.displayName = "Media.Item";
    MediaItem.propTypes = {
        align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const Media = Object.assign(forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("media", className), ref: ref }, rest)));
    }, { as: "article" }), { Item: MediaItem });
    Media.displayName = "Media";

    const MenuLabel = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("menu-label", className), ref: ref }, rest)));
    }, { as: "p" });
    MenuLabel.displayName = "Menu.Label";

    const MenuListItem = forwardRefAs((_a, ref) => {
        var { active, className, menu } = _a, rest = __rest(_a, ["active", "className", "menu"]);
        return (React.createElement("li", null,
            React.createElement(Generic, Object.assign({ className: classNames({ "is-active": active }, className), ref: ref }, rest)),
            menu));
    }, { as: "a" });
    MenuListItem.displayName = "Menu.List.Item";
    MenuListItem.propTypes = {
        active: PropTypes.bool,
        menu: PropTypes.node,
    };

    const MenuList = Object.assign(forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("menu-list", className), ref: ref }, rest)));
    }, { as: "ul" }), { Item: MenuListItem });
    MenuList.displayName = "Menu.List";

    const Menu = Object.assign(forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("menu", className), ref: ref }, rest)));
    }, { as: "aside" }), {
        Label: MenuLabel,
        List: MenuList,
    });
    Menu.displayName = "Menu";

    const MessageBody = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("message-body", className), ref: ref }, rest)));
    }, { as: "div" });
    MessageBody.displayName = "Message.Body";

    const MessageHeader = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("message-header", className), ref: ref }, rest)));
    }, { as: "div" });
    MessageHeader.displayName = "Message.Header";

    const Message = Object.assign(forwardRefAs((_a, ref) => {
        var { className, color, size } = _a, rest = __rest(_a, ["className", "color", "size"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("message", {
                [`is-${color}`]: color,
                [`is-${size}`]: size,
            }, className), ref: ref }, rest)));
    }, { as: "article" }), {
        Body: MessageBody,
        Header: MessageHeader,
    });
    Message.displayName = "Message";
    Message.propTypes = {
        color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const initialValue$2 = {
        close: noop,
        closeOnBlur: false,
        closeOnEsc: true,
    };
    const ModalContext = React.createContext(initialValue$2);

    const onClickHandler$2 = (onClick, ctx) => (event) => {
        if (onClick !== undefined) {
            onClick(event);
        }
        if (ctx.closeOnBlur) {
            ctx.close();
        }
    };
    const ModalBackground = forwardRefAs((_a, ref) => {
        var { className, onClick } = _a, rest = __rest(_a, ["className", "onClick"]);
        return (React.createElement(ModalContext.Consumer, null, ctx => (React.createElement(Generic, Object.assign({ className: classNames("modal-background", className), onClick: onClickHandler$2(onClick, ctx), ref: ref, role: "presentation" }, rest)))));
    }, { as: "div" });
    ModalBackground.displayName = "Modal.Background";
    ModalBackground.propTypes = {
        onClick: PropTypes.func,
    };

    const ModalCardBody = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("modal-card-body", className), ref: ref }, rest)));
    }, { as: "section" });
    ModalCardBody.displayName = "Modal.Card.Body";

    const ModalCardFoot = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("modal-card-foot", className), ref: ref }, rest)));
    }, { as: "footer" });
    ModalCardFoot.displayName = "Modal.Card.Foot";

    const Box = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("box", className), ref: ref }, rest)));
    }, { as: "div" });
    Box.displayName = "Box";

    const ButtonGroup = forwardRefAs((_a, ref) => {
        var { align, className, hasAddons, size } = _a, rest = __rest(_a, ["align", "className", "hasAddons", "size"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("buttons", {
                [`are-${size}`]: size,
                "has-addons": hasAddons,
                [`is-${[align]}`]: align,
            }, className), ref: ref }, rest)));
    }, { as: "div" });
    ButtonGroup.displayName = "Button.Group";
    ButtonGroup.propTypes = {
        align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        hasAddons: PropTypes.bool,
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const propTypes = {
        color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        fullwidth: PropTypes.bool,
        inverted: PropTypes.bool,
        outlined: PropTypes.bool,
        rounded: PropTypes.bool,
        selected: PropTypes.bool,
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        static: PropTypes.bool,
        text: PropTypes.bool,
    };
    const Button = Object.assign(forwardRefAs((_a, ref) => {
        var { className, color, fullwidth, inverted, outlined, rounded, selected, size, state, static: isStatic, text } = _a, rest = __rest(_a, ["className", "color", "fullwidth", "inverted", "outlined", "rounded", "selected", "size", "state", "static", "text"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("button", {
                [`is-${color}`]: color,
                "is-fullwidth": fullwidth,
                "is-inverted": inverted,
                "is-outlined": outlined,
                "is-rounded": rounded,
                "is-selected": selected,
                [`is-${size}`]: size,
                [`is-${state}`]: state,
                "is-static": isStatic,
                "is-text": text,
            }, className), ref: ref }, rest)));
    }, { as: "button" }), { Group: ButtonGroup });
    Button.displayName = "Button";
    Button.propTypes = propTypes;

    const Container = forwardRefAs((_a, ref) => {
        var { className, fluid, breakpoint } = _a, rest = __rest(_a, ["className", "fluid", "breakpoint"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("container", {
                [`is-${breakpoint}`]: breakpoint,
                "is-fluid": fluid,
            }, className), ref: ref }, rest)));
    }, { as: "div" });
    Container.displayName = "Container";
    Container.propTypes = {
        breakpoint: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        fluid: PropTypes.bool,
    };

    const ContentOrderedListItem = forwardRefAs((props, ref) => React.createElement(Generic, Object.assign({ ref: ref }, props)), { as: "li" });
    ContentOrderedListItem.displayName = "Content.OrderedList.Item";

    const ContentOrderedList = Object.assign(forwardRefAs((_a, ref) => {
        var { className, type } = _a, rest = __rest(_a, ["className", "type"]);
        return (React.createElement(Generic, Object.assign({ className: classNames({ [`is-${type}`]: type }, className), ref: ref }, rest)));
    }, { as: "ol" }), { Item: ContentOrderedListItem });
    ContentOrderedList.displayName = "Content.OrderedList";
    ContentOrderedList.propTypes = {
        type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const Content = Object.assign(forwardRefAs((_a, ref) => {
        var { className, size } = _a, rest = __rest(_a, ["className", "size"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("content", { [`is-${size}`]: size }, className), ref: ref }, rest)));
    }, { as: "div" }), { OrderedList: ContentOrderedList });
    Content.displayName = "Content";
    Content.propTypes = {
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const Checkbox = forwardRefAs((props, ref) => React.createElement(Generic, Object.assign({ ref: ref, type: "checkbox" }, props)), { as: "input" });
    Checkbox.displayName = "Checkbox";

    const Control = forwardRefAs((_a, ref) => {
        var { className, expanded, iconLeft, iconRight, loading, size } = _a, rest = __rest(_a, ["className", "expanded", "iconLeft", "iconRight", "loading", "size"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("control", {
                "has-icons-left": iconLeft,
                "has-icons-right": iconRight,
                "is-expanded": expanded,
                "is-loading": loading,
                [`is-${size}`]: size,
            }, className), ref: ref }, rest)));
    }, { as: "div" });
    Control.displayName = "Control";
    Control.propTypes = {
        expanded: PropTypes.bool,
        iconLeft: PropTypes.bool,
        iconRight: PropTypes.bool,
        loading: PropTypes.bool,
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const FieldBody = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("field-body", className), ref: ref }, rest)));
    }, { as: "div" });
    FieldBody.displayName = "Field.Body";

    const FieldLabel = forwardRefAs((_a, ref) => {
        var { className, size } = _a, rest = __rest(_a, ["className", "size"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("field-label", { [`is-${size}`]: size }, className), ref: ref }, rest)));
    }, { as: "div" });
    FieldLabel.displayName = "Field.Label";
    FieldLabel.propTypes = {
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const Field = Object.assign(forwardRefAs((props, ref) => {
        const { align, expanded, horizontal, kind, multiline, narrow } = props, rest = __rest(props, ["align", "expanded", "horizontal", "kind", "multiline", "narrow"]);
        let k;
        if (kind === "addons") {
            k = "has-addons";
        }
        else if (kind === "group") {
            k = "is-grouped";
        }
        rest.className = classNames("field", {
            [`${k}`]: k,
            [`${k}-${align}`]: k !== undefined && align !== undefined,
            [`${k}-multiline`]: k === "is-grouped" && multiline === true,
            "is-expanded": expanded,
            "is-horizontal": horizontal,
            "is-narrow": narrow,
        }, rest.className);
        return React.createElement(Generic, Object.assign({ ref: ref }, rest));
    }, { as: "div" }), {
        Body: FieldBody,
        Label: FieldLabel,
    });
    Field.displayName = "Field";
    Field.propTypes = {
        align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        expanded: PropTypes.bool,
        horizontal: PropTypes.bool,
        kind: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        multiline: PropTypes.bool,
        narrow: PropTypes.bool,
    };

    const Fieldset = forwardRefAs((_a, ref) => {
        var { disabled } = _a, rest = __rest(_a, ["disabled"]);
        return (React.createElement(Generic, Object.assign({ disabled: disabled, ref: ref }, rest)));
    }, { as: "fieldset" });
    Fieldset.displayName = "Fieldset";
    Fieldset.propTypes = {
        disabled: PropTypes.bool,
    };

    const FileCTA = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("file-cta", className), ref: ref }, rest)));
    }, { as: "div" });
    FileCTA.displayName = "File.CTA";

    const FileIcon = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("file-icon", className), ref: ref }, rest)));
    }, { as: "span" });
    FileIcon.displayName = "File.Icon";

    const FileInput = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("file-input", className), ref: ref, type: "file" }, rest)));
    }, { as: "input" });
    FileInput.displayName = "File.Input";

    const FileLabel = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("file-label", className), ref: ref }, rest)));
    }, { as: "label" });
    FileLabel.displayName = "File.Label";

    const FileName = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("file-name", className), ref: ref }, rest)));
    }, { as: "span" });
    FileName.displayName = "File.Name";

    const File = Object.assign(forwardRefAs((_a, ref) => {
        var { align, boxed, className, color, fullwidth, hasName, size } = _a, rest = __rest(_a, ["align", "boxed", "className", "color", "fullwidth", "hasName", "size"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("file", {
                "has-name": hasName,
                [`is-${align}`]: align,
                "is-boxed": boxed,
                [`is-${color}`]: color,
                "is-fullwidth": fullwidth,
                [`is-${size}`]: size,
            }, className), ref: ref }, rest)));
    }, { as: "div" }), {
        CTA: FileCTA,
        Icon: FileIcon,
        Input: FileInput,
        Label: FileLabel,
        Name: FileName,
    });
    File.displayName = "File";
    File.propTypes = {
        align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        boxed: PropTypes.bool,
        color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        fullwidth: PropTypes.bool,
        hasName: PropTypes.bool,
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const Help = forwardRefAs((_a, ref) => {
        var { className, color } = _a, rest = __rest(_a, ["className", "color"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("help", { [`is-${color}`]: color }, className), ref: ref }, rest)));
    }, { as: "p" });
    Help.displayName = "Help";
    Help.propTypes = {
        color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const Input = forwardRefAs((_a, ref) => {
        var { className, color, readOnly, rounded, size, state, static: isStatic } = _a, rest = __rest(_a, ["className", "color", "readOnly", "rounded", "size", "state", "static"]);
        const isReadOnly = readOnly === true || isStatic === true;
        return (React.createElement(Generic, Object.assign({ className: classNames("input", {
                [`is-${color}`]: color,
                "is-rounded": rounded,
                [`is-${size}`]: size,
                "is-static": isStatic,
                [`is-${state}`]: state,
            }, className), readOnly: isReadOnly, ref: ref }, rest)));
    }, { as: "input" });
    Input.displayName = "Input";
    Input.propTypes = {
        color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        readOnly: PropTypes.bool,
        rounded: PropTypes.bool,
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        static: PropTypes.bool,
        type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const Radio = forwardRefAs((props, ref) => React.createElement(Generic, Object.assign({ ref: ref, type: "radio" }, props)), { as: "input" });
    Radio.displayName = "Radio";

    const identifyLabelDiscriminator = (children) => {
        let discriminator = "label";
        React.Children.forEach(children, (child, i) => {
            if (typeof child === "object" && child !== null && "type" in child) {
                if (child.type === Checkbox ||
                    (child.type === "input" &&
                        child.props.type ===
                            "checkbox")) {
                    discriminator = "checkbox";
                }
                else if (child.type === Radio ||
                    (child.type === "input" &&
                        child.props.type === "radio")) {
                    discriminator = "radio";
                }
                else if (child.type === React.Fragment) {
                    discriminator = identifyLabelDiscriminator(child.props
                        .children);
                }
            }
        });
        return discriminator;
    };
    const Label = forwardRefAs((_a, ref) => {
        var { className, disabled, size } = _a, rest = __rest(_a, ["className", "disabled", "size"]);
        const discriminator = identifyLabelDiscriminator(rest.children);
        return (React.createElement(Generic, Object.assign({ className: classNames({
                [`${discriminator}`]: discriminator,
                "is-disabled": disabled,
                [`is-${size}`]: size,
            }, className), ref: ref }, rest)));
    }, { as: "label" });
    Label.displayName = "Label";
    Label.propTypes = {
        disabled: PropTypes.bool,
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const SelectOption = forwardRefAs((props, ref) => React.createElement(Generic, Object.assign({ ref: ref }, props)), { as: "option" });
    SelectOption.displayName = "Select.Option";

    const mapSelectContainerChildren = (children, state) => {
        let classNameExtension;
        const mapped = React.Children.map(children, (child, i) => {
            if (typeof child === "object" && child !== null && "type" in child) {
                if (child.type === "select" || child.type === Select) {
                    classNameExtension = classNames({
                        "is-multiple": child.props
                            .multiple,
                    });
                    if (state === "focused" || state === "hovered") {
                        return React.cloneElement(child, {
                            className: classNames(`is-${state}`, child.props.className),
                        });
                    }
                    return child;
                }
                else if (child.type === React.Fragment) {
                    const fragmentMapped = mapSelectContainerChildren(child.props
                        .children, state);
                    classNameExtension = classNames(classNameExtension, fragmentMapped.classNameExtension);
                    return React.createElement(React.Fragment, { children: fragmentMapped.children });
                }
            }
            return child;
        });
        return { children: mapped, classNameExtension };
    };
    const SelectContainer = forwardRefAs((_a, ref) => {
        var { className, children, color, fullwidth, rounded, size, state } = _a, rest = __rest(_a, ["className", "children", "color", "fullwidth", "rounded", "size", "state"]);
        const mapped = mapSelectContainerChildren(children, state);
        return (React.createElement(Generic, Object.assign({ className: classNames("select", {
                [`is-${color}`]: color,
                "is-fullwidth": fullwidth,
                "is-loading": state === "loading",
                "is-rounded": rounded,
                [`is-${size}`]: size,
            }, mapped.classNameExtension, className), children: mapped.children, ref: ref }, rest)));
    }, { as: "div" });
    SelectContainer.displayName = "Select.Container";
    SelectContainer.propTypes = {
        color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        fullwidth: PropTypes.bool,
        rounded: PropTypes.bool,
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };
    const Select = Object.assign(forwardRefAs((props, ref) => React.createElement(Generic, Object.assign({ ref: ref }, props)), {
        as: "select",
    }), {
        Container: SelectContainer,
        Option: SelectOption,
    });
    Select.displayName = "Select";

    const Textarea = forwardRefAs((_a, ref) => {
        var { className, color, fixedSize, size, state } = _a, rest = __rest(_a, ["className", "color", "fixedSize", "size", "state"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("textarea", {
                "has-fixed-size": fixedSize,
                [`is-${color}`]: color,
                [`is-${size}`]: size,
                [`is-${state}`]: state,
            }, className), ref: ref }, rest)));
    }, {
        as: "textarea",
        rows: 4,
    });
    Textarea.displayName = "Textarea";
    Textarea.propTypes = {
        color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        fixedSize: PropTypes.bool,
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        state: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const Icon = forwardRefAs((_a, ref) => {
        var { align, className, color, size } = _a, rest = __rest(_a, ["align", "className", "color", "size"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("icon", {
                [`has-text-${color}`]: color,
                [`is-${align}`]: align,
                [`is-${size}`]: size,
            }, className), ref: ref }, rest)));
    }, { as: "span" });
    Icon.displayName = "Icon";
    Icon.propTypes = {
        align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const mapImageContainerChildren = (children, size) => {
        if (typeof size !== "string") {
            return children;
        }
        return React.Children.map(children, (child, i) => {
            if (typeof child === "object" && child !== null && "type" in child) {
                if (child.type !== React.Fragment) {
                    return React.cloneElement(child, {
                        className: classNames("has-ratio", child.props.className),
                    });
                }
                else {
                    const fragmentMapped = mapImageContainerChildren(child.props
                        .children, size);
                    return React.createElement(React.Fragment, { children: fragmentMapped });
                }
            }
            return child;
        });
    };
    const ImageContainer = forwardRefAs((_a, ref) => {
        var { children, className, size } = _a, rest = __rest(_a, ["children", "className", "size"]);
        let s;
        if (typeof size === "string") {
            s = size;
        }
        else if (typeof size === "number") {
            s = `${size}x${size}`;
        }
        return (React.createElement(Generic, Object.assign({ children: mapImageContainerChildren(children, size), className: classNames("image", { [`is-${s}`]: s }, className), ref: ref }, rest)));
    }, { as: "figure" });
    ImageContainer.displayName = "Image.Container";
    ImageContainer.propTypes = {
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const Image = Object.assign(forwardRefAs((_a, ref) => {
        var { className, rounded } = _a, rest = __rest(_a, ["className", "rounded"]);
        return (React.createElement(Generic, Object.assign({ className: classNames({ "is-rounded": rounded }, className), ref: ref }, rest)));
    }, { as: "img" }), { Container: ImageContainer });
    Image.displayName = "Image";
    Image.propTypes = {
        rounded: PropTypes.bool,
    };

    const Notification = forwardRefAs((_a, ref) => {
        var { className, color } = _a, rest = __rest(_a, ["className", "color"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("notification", { [`is-${color}`]: color }, className), ref: ref }, rest)));
    }, { as: "div" });
    Notification.displayName = "Notification";
    Notification.propTypes = {
        color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const Block = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("block", className), ref: ref }, rest)));
    }, { as: "div" });
    Block.displayName = "Block";

    const Delete = forwardRefAs((_a, ref) => {
        var { className, size } = _a, rest = __rest(_a, ["className", "size"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("delete", { [`is-${size}`]: size }, className), ref: ref }, rest)));
    }, { as: "a" });
    Delete.displayName = "Delete";
    Delete.propTypes = {
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const Heading = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("heading", className), ref: ref }, rest)));
    }, { as: "p" });
    Heading.displayName = "Heading";

    const Highlight = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("highlight", className), ref: ref }, rest)));
    }, { as: "p" });
    Highlight.displayName = "Highlight";

    const Loader = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("loader", className), ref: ref }, rest)));
    }, {
        as: "div",
        children: false,
    });
    Loader.displayName = "Loader";

    const Numeric = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("number", className), ref: ref }, rest)));
    }, { as: "p" });
    Numeric.displayName = "Numeric";

    const PageLoader = forwardRefAs((_a, ref) => {
        var { active, className, color, direction } = _a, rest = __rest(_a, ["active", "className", "color", "direction"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("pageloader", {
                "is-active": active,
                [`is-${color}`]: color,
                [`is-${direction}`]: direction,
            }, className), ref: ref }, rest)));
    }, { as: "div" });
    PageLoader.displayName = "PageLoader";
    PageLoader.propTypes = {
        active: PropTypes.bool,
        color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        direction: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const Progress = forwardRefAs((_a, ref) => {
        var { className, color, size } = _a, rest = __rest(_a, ["className", "color", "size"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("progress", {
                [`is-${color}`]: color,
                [`is-${size}`]: size,
            }, className), ref: ref }, rest)));
    }, {
        as: "progress",
        max: 100,
    });
    Progress.displayName = "Progress";
    Progress.propTypes = {
        color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        max: PropTypes.number,
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        value: PropTypes.number,
    };

    const TableBody = forwardRefAs((props, ref) => React.createElement(Generic, Object.assign({ ref: ref }, props)), { as: "tbody" });
    TableBody.displayName = "Table.Body";

    const TableCell = forwardRefAs((props, ref) => React.createElement(Generic, Object.assign({ ref: ref }, props)), { as: "td" });
    TableCell.displayName = "Table.Cell";

    const TableFoot = forwardRefAs((props, ref) => React.createElement(Generic, Object.assign({ ref: ref }, props)), { as: "tfoot" });
    TableFoot.displayName = "Table.Foot";

    const TableHead = forwardRefAs((props, ref) => React.createElement(Generic, Object.assign({ ref: ref }, props)), { as: "thead" });
    TableHead.displayName = "Table.Head";

    const TableHeading = forwardRefAs((props, ref) => React.createElement(Generic, Object.assign({ ref: ref }, props)), { as: "th" });
    TableHeading.displayName = "Table.Heading";

    const TableRow = forwardRefAs((_a, ref) => {
        var { className, selected } = _a, rest = __rest(_a, ["className", "selected"]);
        return (React.createElement(Generic, Object.assign({ className: classNames({ "is-selected": selected }, className), ref: ref }, rest)));
    }, { as: "tr" });
    TableRow.displayName = "Table.Row";
    TableRow.propTypes = {
        selected: PropTypes.bool,
    };

    const Table = Object.assign(forwardRefAs((_a, ref) => {
        var { bordered, className, fullwidth, hoverable, narrow, striped } = _a, rest = __rest(_a, ["bordered", "className", "fullwidth", "hoverable", "narrow", "striped"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("table", {
                "is-bordered": bordered,
                "is-fullwidth": fullwidth,
                "is-hoverable": hoverable,
                "is-narrow": narrow,
                "is-striped": striped,
            }, className), ref: ref }, rest)));
    }, { as: "table" }), {
        Body: TableBody,
        Cell: TableCell,
        Foot: TableFoot,
        Head: TableHead,
        Heading: TableHeading,
        Row: TableRow,
    });
    Table.displayName = "Table";
    Table.propTypes = {
        bordered: PropTypes.bool,
        fullwidth: PropTypes.bool,
        hoverable: PropTypes.bool,
        narrow: PropTypes.bool,
        striped: PropTypes.bool,
    };

    const TagGroup = forwardRefAs((_a, ref) => {
        var { className, gapless, size } = _a, rest = __rest(_a, ["className", "gapless", "size"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("tags", {
                [`are-${size}`]: size,
                "has-addons": gapless,
            }, className), ref: ref }, rest)));
    }, { as: "span" });
    TagGroup.displayName = "Tag.Group";
    TagGroup.propTypes = {
        gapless: PropTypes.bool,
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const Tag = Object.assign(forwardRefAs((_a, ref) => {
        var { children, className, color, delete: isDelete, rounded, size } = _a, rest = __rest(_a, ["children", "className", "color", "delete", "rounded", "size"]);
        const allowedChildren = isDelete === true ? undefined : children;
        return (React.createElement(Generic, Object.assign({ className: classNames("tag", {
                [`is-${size}`]: size,
                [`is-${color}`]: color,
                "is-delete": isDelete,
                "is-rounded": rounded,
            }, className), children: allowedChildren, ref: ref }, rest)));
    }, { as: "span" }), { Group: TagGroup });
    Tag.displayName = "Tag";
    Tag.propTypes = {
        color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        delete: PropTypes.bool,
        rounded: PropTypes.bool,
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const Title = forwardRefAs((_a, ref) => {
        var { className, size, spaced, subtitle } = _a, rest = __rest(_a, ["className", "size", "spaced", "subtitle"]);
        return (React.createElement(Generic, Object.assign({ className: classNames({
                [`is-${size}`]: size !== undefined,
                "is-spaced": spaced === true && subtitle !== true,
                subtitle,
                title: subtitle !== true,
            }, className), ref: ref }, rest)));
    }, { as: "h1" });
    Title.displayName = "Title";
    Title.propTypes = {
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        spaced: PropTypes.bool,
        subtitle: PropTypes.bool,
    };

    const mapChildren = (children, close) => React.Children.map(children, (child, i) => {
        if (typeof child === "object" && child !== null && "type" in child) {
            if (child.type === Delete) {
                const onClick = child.props.onClick;
                return React.cloneElement(child, {
                    onClick: (event) => {
                        if (onClick !== undefined) {
                            onClick(event);
                        }
                        close();
                    },
                });
            }
            else if (child.type === React.Fragment) {
                return (React.createElement(React.Fragment, { children: mapChildren(child.props.children, close) }));
            }
        }
        return child;
    });
    const ModalCardHead = forwardRefAs((_a, ref) => {
        var { className, children } = _a, rest = __rest(_a, ["className", "children"]);
        return (React.createElement(ModalContext.Consumer, null, ({ close }) => (React.createElement(Generic, Object.assign({ children: mapChildren(children, close), className: classNames("modal-card-head", className), ref: ref }, rest)))));
    }, { as: "header" });
    ModalCardHead.displayName = "Modal.Card.Head";

    const ModalCardTitle = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("modal-card-title", className), ref: ref }, rest)));
    }, { as: "p" });
    ModalCardTitle.displayName = "Modal.Card.Title";

    const ModalCard = Object.assign(forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("modal-card", className), ref: ref }, rest)));
    }, { as: "div" }), {
        Body: ModalCardBody,
        Foot: ModalCardFoot,
        Head: ModalCardHead,
        Title: ModalCardTitle,
    });
    ModalCard.displayName = "Modal.Card";

    const onClickHandler$3 = (onClick, ctx) => (event) => {
        if (onClick !== undefined) {
            onClick(event);
        }
        ctx.close();
    };
    const ModalClose = forwardRefAs((_a, ref) => {
        var { className, onClick } = _a, rest = __rest(_a, ["className", "onClick"]);
        return (React.createElement(ModalContext.Consumer, null, ctx => (React.createElement(Generic, Object.assign({ "aria-label": "close", className: classNames("modal-close", "is-large", className), onClick: onClickHandler$3(onClick, ctx), ref: ref }, rest)))));
    }, { as: "button" });
    ModalClose.displayName = "Modal.Close";
    ModalClose.propTypes = {
        onClick: PropTypes.func,
    };

    class ModalPortal extends React.PureComponent {
        constructor() {
            super(...arguments);
            this.close = () => {
                if (this.props.onClose !== undefined) {
                    this.props.onClose();
                }
            };
            this.handleKeydown = (event) => {
                if (this.props.closeOnEsc === true && event.code === "Escape") {
                    this.close();
                }
            };
        }
        componentDidMount() {
            const { clipped, document } = this.props;
            document.addEventListener("keydown", this.handleKeydown);
            const html = document.querySelector("html");
            if (html !== null) {
                if (clipped === true) {
                    html.classList.add("is-clipped");
                }
            }
        }
        componentWillUnmount() {
            const { document } = this.props;
            document.removeEventListener("keydown", this.handleKeydown);
            const html = document.querySelector("html");
            if (html !== null) {
                html.classList.remove("is-clipped");
            }
        }
        render() {
            const _a = this.props, { className, closeOnBlur, closeOnEsc, innerRef, onClose } = _a, rest = __rest(_a, ["className", "closeOnBlur", "closeOnEsc", "innerRef", "onClose"]);
            return (React.createElement(ModalContext.Provider, { value: {
                    close: this.close,
                    closeOnBlur: closeOnBlur === true,
                    closeOnEsc: closeOnEsc === true,
                } },
                React.createElement(Generic, Object.assign({ className: classNames("modal", "is-active", className), ref: innerRef }, rest))));
        }
    }
    ModalPortal.defaultProps = {
        closeOnBlur: initialValue$2.closeOnBlur,
        closeOnEsc: initialValue$2.closeOnEsc,
    };
    ModalPortal.displayName = "Modal.Portal";

    class ModalContainer extends React.PureComponent {
        constructor(props) {
            super(props);
            if (canUseDOM()) {
                this.el = this.document.createElement("div");
                if (props.containerClassName !== undefined) {
                    this.el.className = props.containerClassName;
                }
            }
        }
        componentDidMount() {
            if (this.el !== undefined) {
                this.document.body.appendChild(this.el);
            }
        }
        componentWillUnmount() {
            if (this.el !== undefined) {
                this.document.body.removeChild(this.el);
            }
        }
        render() {
            const _a = this.props, { active, containerClassName, document } = _a, rest = __rest(_a, ["active", "containerClassName", "document"]);
            return this.el !== undefined && active === true
                ? ReactDOM.createPortal(React.createElement(ModalPortal, Object.assign({ document: this.document }, rest)), this.el)
                : false;
        }
        get document() {
            return this.props.document !== undefined ? this.props.document : document;
        }
    }
    ModalContainer.displayName = "Modal.Container";

    const ModalContent = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("modal-content", className), ref: ref }, rest)));
    }, { as: "div" });
    ModalContent.displayName = "Modal.Content";

    const propTypes$1 = {
        active: PropTypes.bool,
        closeOnBlur: PropTypes.bool,
        closeOnEsc: PropTypes.bool,
        clipped: PropTypes.bool,
        containerClassName: PropTypes.string,
        document: PropTypes.object,
        onClose: PropTypes.func,
    };
    const Modal = Object.assign(forwardRefAs((props, ref) => React.createElement(ModalContainer, Object.assign({ innerRef: ref }, props)), {
        as: "div",
        clipped: true,
    }), {
        Background: ModalBackground,
        Card: ModalCard,
        Close: ModalClose,
        Container: ModalContainer,
        Content: ModalContent,
        Context: ModalContext,
        Portal: ModalPortal,
        propTypes: propTypes$1,
    });

    const NavbarBrand = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("navbar-brand", className), ref: ref }, rest)));
    }, { as: "div" });
    NavbarBrand.displayName = "Navbar.Brand";

    const initialValue$3 = {
        active: false,
        setActive: noop,
    };
    const NavbarContext = React.createContext(initialValue$3);

    const onClickHandler$4 = (onClick, ctx) => (event) => {
        if (onClick !== undefined) {
            onClick(event);
        }
        ctx.setActive(!ctx.active);
    };
    const NavbarBurger = forwardRefAs((_a, ref) => {
        var { className, onClick } = _a, rest = __rest(_a, ["className", "onClick"]);
        return (React.createElement(NavbarContext.Consumer, null, ctx => (React.createElement(Generic, Object.assign({ className: classNames("navbar-burger", { "is-active": ctx.active }, className), onClick: onClickHandler$4(onClick, ctx), ref: ref, role: "button" }, rest),
            React.createElement("span", null),
            React.createElement("span", null),
            React.createElement("span", null)))));
    }, { as: "div" });
    NavbarBurger.displayName = "Navbar.Burger";
    NavbarBurger.propTypes = {
        onClick: PropTypes.func,
    };

    class NavbarContainer extends React.PureComponent {
        constructor(props) {
            super(props);
            this.state = { active: props.active === true };
        }
        componentWillUnmount() {
            const { fixed } = this.props;
            const html = this.document.querySelector("html");
            if (html !== null) {
                html.classList.remove(`has-navbar-fixed-${fixed}`);
            }
        }
        render() {
            this.manageHtmlAttributes();
            const _a = this.props, { active, className, color, fixed, innerRef, managed, transparent } = _a, rest = __rest(_a, ["active", "className", "color", "fixed", "innerRef", "managed", "transparent"]);
            return (React.createElement(NavbarContext.Provider, { value: {
                    active: this.active,
                    setActive: (value) => {
                        this.active = value;
                    },
                } },
                React.createElement(Generic, Object.assign({ className: classNames("navbar", {
                        "is-transparent": transparent,
                        [`is-fixed-${fixed}`]: fixed,
                        [`is-${color}`]: color,
                    }, className), ref: innerRef, role: "navigation" }, rest))));
        }
        get active() {
            return this.props.managed === true
                ? this.props.active === true
                : this.state.active;
        }
        set active(value) {
            if (this.props.managed !== true) {
                this.setState({ active: value });
            }
        }
        get document() {
            return this.props.document !== undefined ? this.props.document : document;
        }
        manageHtmlAttributes() {
            if (canUseDOM()) {
                const html = this.document.querySelector("html");
                if (html !== null) {
                    html.classList.remove("has-navbar-fixed-top");
                    html.classList.remove("has-navbar-fixed-bottom");
                    if (this.props.fixed !== undefined) {
                        html.classList.add(`has-navbar-fixed-${this.props.fixed}`);
                    }
                }
            }
        }
    }
    NavbarContainer.defaultProps = {
        transparent: false,
    };
    NavbarContainer.displayName = "Navbar.Container";

    const NavbarDivider = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("navbar-divider", className), ref: ref }, rest)));
    }, { as: "div" });
    NavbarDivider.displayName = "Navbar.Divider";

    const NavbarDropdown = forwardRefAs((_a, ref) => {
        var { align, boxed, className } = _a, rest = __rest(_a, ["align", "boxed", "className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("navbar-dropdown", {
                [`is-${align}`]: align,
                "is-boxed": boxed,
            }, className), ref: ref }, rest)));
    }, { as: "span" });
    NavbarDropdown.displayName = "Navbar.Dropdown";
    NavbarDropdown.propTypes = {
        align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        boxed: PropTypes.bool,
    };

    const initialValue$4 = {
        active: false,
        setActive: noop,
    };
    const NavbarItemContext = React.createContext(initialValue$4);

    class NavbarItemContainer extends React.PureComponent {
        constructor(props) {
            super(props);
            this.ref = React.createRef();
            this.handleDocumentClick = (event) => {
                if (this.props.managed !== true &&
                    this.active &&
                    this.ref.current !== null) {
                    if (event.target instanceof Element &&
                        !this.ref.current.contains(event.target)) {
                        this.active = false;
                    }
                }
            };
            this.handleOnClick = (ctx) => (event) => {
                if (this.props.onClick !== undefined) {
                    this.props.onClick(event);
                }
                ctx.setActive(!ctx.active);
            };
            this.state = { active: props.active === true };
        }
        componentDidMount() {
            if (this.props.dropdown === true) {
                document.addEventListener("click", this.handleDocumentClick);
            }
        }
        componentWillUnmount() {
            document.removeEventListener("click", this.handleDocumentClick);
        }
        render() {
            const _a = this.props, { as, active, className: initialClassName, dropdown, expanded, hoverable, innerRef, managed, onClick, tab, up } = _a, rest = __rest(_a, ["as", "active", "className", "dropdown", "expanded", "hoverable", "innerRef", "managed", "onClick", "tab", "up"]);
            const className = classNames("navbar-item", {
                "has-dropdown": dropdown,
                "has-dropdown-up": up,
                "is-active": this.active,
                "is-expanded": expanded,
                "is-hoverable": hoverable,
                "is-tab": tab,
            }, initialClassName);
            const ref = combineRefs(this.ref, innerRef);
            if (dropdown === true) {
                const asOverride = as === "a" ? "div" : as;
                return (React.createElement(NavbarItemContext.Provider, { value: {
                        active: this.active,
                        setActive: (value) => (this.active = value),
                    } },
                    React.createElement(Generic, Object.assign({ as: asOverride, className: className, ref: ref }, rest))));
            }
            return (React.createElement(NavbarItemContext.Consumer, null, ctx => (React.createElement(Generic, Object.assign({ as: as, className: className, onClick: this.handleOnClick(ctx), ref: ref }, rest)))));
        }
        get active() {
            return this.props.managed === true
                ? this.props.active === true
                : this.state.active;
        }
        set active(value) {
            if (this.props.managed !== true) {
                this.setState({ active: value });
            }
        }
    }
    NavbarItemContainer.displayName = "Navbar.Item.Container";

    const NavbarItem = Object.assign(forwardRefAs((props, ref) => React.createElement(NavbarItemContainer, Object.assign({ innerRef: ref }, props)), { as: "a" }), { Container: NavbarItemContainer });
    NavbarItem.displayName = "Navbar.Item";
    NavbarItem.propTypes = {
        active: PropTypes.bool,
        dropdown: PropTypes.bool,
        expanded: PropTypes.bool,
        hoverable: PropTypes.bool,
        managed: PropTypes.bool,
        onClick: PropTypes.func,
        tab: PropTypes.bool,
        up: PropTypes.bool,
    };

    const handleOnClick = (onClick, ctx) => (event) => {
        if (onClick !== undefined) {
            onClick(event);
        }
        ctx.setActive(!ctx.active);
    };
    const NavbarLink = forwardRefAs((_a, ref) => {
        var { arrowless, className, onClick } = _a, rest = __rest(_a, ["arrowless", "className", "onClick"]);
        return (React.createElement(NavbarItemContext.Consumer, null, ctx => (React.createElement(Generic, Object.assign({ className: classNames("navbar-link", { "is-arrowless": arrowless }, className), onClick: handleOnClick(onClick, ctx), ref: ref }, rest)))));
    }, { as: "span" });
    NavbarLink.displayName = "Navbar.Link";
    NavbarLink.propTypes = {
        arrowless: PropTypes.bool,
        onClick: PropTypes.func,
    };

    const NavbarMenu = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(NavbarContext.Consumer, null, ({ active }) => (React.createElement(Generic, Object.assign({ className: classNames("navbar-menu", { "is-active": active }, className), ref: ref }, rest)))));
    }, { as: "div" });
    NavbarMenu.displayName = "Navbar.Menu";

    const NavbarSegment = forwardRefAs((_a, ref) => {
        var { align, className } = _a, rest = __rest(_a, ["align", "className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames({
                [`navbar-${align}`]: align,
            }, className), ref: ref }, rest)));
    }, { as: "div" });
    NavbarSegment.displayName = "Navbar.Segment";
    NavbarSegment.propTypes = {
        align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    };

    const Navbar = Object.assign(forwardRefAs((props, ref) => React.createElement(NavbarContainer, Object.assign({ innerRef: ref }, props)), { as: "nav" }), {
        Brand: NavbarBrand,
        Burger: NavbarBurger,
        Container: NavbarContainer,
        Context: NavbarContext,
        Divider: NavbarDivider,
        Dropdown: NavbarDropdown,
        Item: NavbarItem,
        Link: NavbarLink,
        Menu: NavbarMenu,
        Segment: NavbarSegment,
    });
    Navbar.displayName = "Navbar";
    Navbar.propTypes = {
        active: PropTypes.bool,
        color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        document: PropTypes.object,
        fixed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        managed: PropTypes.bool,
        transparent: PropTypes.bool,
    };

    const PaginationEllipsis = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement("li", null,
            React.createElement(Generic, Object.assign({ className: classNames("pagination-ellipsis", className), ref: ref }, rest))));
    }, {
        as: "span",
        children: "…",
    });
    PaginationEllipsis.displayName = "Pagination.Ellipsis";

    const PaginationLink = forwardRefAs((_a, ref) => {
        var { className, current } = _a, rest = __rest(_a, ["className", "current"]);
        return (React.createElement("li", null,
            React.createElement(Generic, Object.assign({ className: classNames("pagination-link", { "is-current": current }, className), ref: ref }, rest))));
    }, { as: "a" });
    PaginationLink.displayName = "Pagination.Link";
    PaginationLink.propTypes = {
        current: PropTypes.bool,
    };

    const PaginationList = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("pagination-list", className), ref: ref }, rest)));
    }, { as: "ul" });
    PaginationList.displayName = "Pagination.List";

    const PaginationStep = forwardRefAs((_a, ref) => {
        var { align, className } = _a, rest = __rest(_a, ["align", "className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames({ [`pagination-${align}`]: align }, className), ref: ref }, rest)));
    }, { as: "a" });
    PaginationStep.displayName = "Pagination.Step";
    PaginationStep.propTypes = {
        align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    };

    const Pagination = Object.assign(forwardRefAs((_a, ref) => {
        var { align, className, rounded, size } = _a, rest = __rest(_a, ["align", "className", "rounded", "size"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("pagination", {
                [`is-${align}`]: align,
                "is-rounded": rounded,
                [`is-${size}`]: size,
            }, className), ref: ref }, rest)));
    }, { as: "nav" }), {
        Ellipsis: PaginationEllipsis,
        Link: PaginationLink,
        List: PaginationList,
        Step: PaginationStep,
    });
    Pagination.displayName = "Pagination";
    Pagination.propTypes = {
        align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        rounded: PropTypes.bool,
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const PanelBlock = forwardRefAs((_a, ref) => {
        var { active, className } = _a, rest = __rest(_a, ["active", "className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("panel-block", { "is-active": active }, className), ref: ref }, rest)));
    }, { as: "div" });
    PanelBlock.displayName = "Panel.Block";
    PanelBlock.propTypes = {
        active: PropTypes.bool,
    };

    const PanelHeading = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("panel-heading", className), ref: ref }, rest)));
    }, { as: "div" });
    PanelHeading.displayName = "Panel.Heading";

    const PanelIcon = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("panel-icon", className), ref: ref }, rest)));
    }, { as: "span" });
    PanelIcon.displayName = "Panel.Icon";

    const PanelTabGroup = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("panel-tabs", className), ref: ref }, rest)));
    }, { as: "div" });
    PanelTabGroup.displayName = "Panel.Tab.Group";

    const PanelTab = Object.assign(forwardRefAs((_a, ref) => {
        var { active, className } = _a, rest = __rest(_a, ["active", "className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames({ "is-active": active }, className), ref: ref }, rest)));
    }, { as: "a" }), { Group: PanelTabGroup });
    PanelTab.displayName = "Panel.Tab";
    PanelTab.propTypes = {
        active: PropTypes.bool,
    };

    const Panel = Object.assign(forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("panel", className), ref: ref }, rest)));
    }, { as: "nav" }), {
        Block: PanelBlock,
        Heading: PanelHeading,
        Icon: PanelIcon,
        Tab: PanelTab,
    });
    Panel.displayName = "Panel";

    const TabGroup = forwardRefAs((_a, ref) => {
        var { align, children, className, fullwidth, kind, size } = _a, rest = __rest(_a, ["align", "children", "className", "fullwidth", "kind", "size"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("tabs", {
                [`is-${align}`]: align,
                [`is-${size}`]: size,
                "is-fullwidth": fullwidth,
                [`is-${kind}`]: kind,
                "is-toggle": kind === "toggle" || kind === "toggle-rounded",
                "is-toggle-rounded": kind === "toggle-rounded",
            }, className), children: React.createElement("ul", null, children), ref: ref }, rest)));
    }, { as: "div" });
    TabGroup.displayName = "Tab.Group";
    TabGroup.propTypes = {
        align: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        fullwidth: PropTypes.bool,
        kind: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const Tab = Object.assign(forwardRefAs((_a, ref) => {
        var { active } = _a, rest = __rest(_a, ["active"]);
        return (React.createElement("li", { className: classNames({ "is-active": active }) },
            React.createElement(Generic, Object.assign({ ref: ref }, rest))));
    }, { as: "a" }), { Group: TabGroup });
    Tab.displayName = "Tab";
    Tab.propTypes = {
        active: PropTypes.bool,
    };

    const ColumnGroup = forwardRefAs((_a, ref) => {
        var { className, breakpoint, centered, desktop, fullhd, gapless, gapSize, mobile, multiline, tablet, widescreen, touch, vcentered } = _a, rest = __rest(_a, ["className", "breakpoint", "centered", "desktop", "fullhd", "gapless", "gapSize", "mobile", "multiline", "tablet", "widescreen", "touch", "vcentered"]);
        const breakpoints = {
            desktop,
            fullhd,
            mobile,
            tablet,
            touch,
            widescreen,
        };
        const gapSizeClassNames = classNames({ [`is-${gapSize}`]: typeof gapSize === "number" }, Object.keys(breakpoints)
            .map(key => {
            const value = breakpoints[key];
            return value === undefined
                ? {}
                : { [`is-${value.gapSize}-${key}`]: value.gapSize !== undefined };
        })
            .reduce((acc, cv) => (Object.assign({}, acc, cv)), {}));
        return (React.createElement(Generic, Object.assign({ className: classNames("columns", {
                [`is-${breakpoint}`]: breakpoint,
                "is-centered": centered,
                "is-gapless": gapless,
                "is-multiline": multiline,
                "is-variable ": gapSizeClassNames !== "",
                "is-vcentered": vcentered,
            }, gapSizeClassNames, className), ref: ref }, rest)));
    }, { as: "div" });
    ColumnGroup.displayName = "Column.Group";
    const ColumnGroupBreakpointPropTypes = {
        gapSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };
    ColumnGroup.propTypes = Object.assign({}, DEFAULTS.breakpoints
        .map(breakpoint => ({
        [breakpoint]: PropTypes.shape(ColumnGroupBreakpointPropTypes),
    }))
        .reduce((acc, cv) => (Object.assign({}, acc, cv)), {}), ColumnGroupBreakpointPropTypes, { breakpoint: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), centered: PropTypes.bool, gapless: PropTypes.bool, multiline: PropTypes.bool, vcentered: PropTypes.bool });

    const Column = Object.assign(forwardRefAs((_a, ref) => {
        var { className, mobile, tablet, desktop, widescreen, fullhd, touch, narrow, offset, size } = _a, rest = __rest(_a, ["className", "mobile", "tablet", "desktop", "widescreen", "fullhd", "touch", "narrow", "offset", "size"]);
        const breakpoints = {
            desktop,
            fullhd,
            mobile,
            tablet,
            touch,
            widescreen,
        };
        return (React.createElement(Generic, Object.assign({ className: classNames("column", {
                [`is-${size}`]: size !== undefined,
                [`is-offset-${offset}`]: offset !== undefined,
                "is-narrow": narrow,
            }, Object.keys(breakpoints)
                .map(breakpoint => {
                const value = breakpoints[breakpoint];
                return value === undefined
                    ? {}
                    : {
                        [`is-${value.size}-${breakpoint}`]: value.size !== undefined,
                        [`is-narrow-${breakpoint}`]: value.narrow,
                        [`is-offset-${value.offset}-${breakpoint}`]: value.offset !== undefined,
                    };
            })
                .reduce((acc, cv) => (Object.assign({}, acc, cv)), {}), className), ref: ref }, rest)));
    }, { as: "div" }), { Group: ColumnGroup });
    Column.displayName = "Column";
    const ColumnSizeModifierPropTypes = {
        narrow: PropTypes.bool,
        offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };
    Column.propTypes = Object.assign({}, DEFAULTS.breakpoints
        .map(breakpoint => ({
        [breakpoint]: PropTypes.shape(ColumnSizeModifierPropTypes),
    }))
        .reduce((acc, cv) => (Object.assign({}, acc, cv)), {}), ColumnSizeModifierPropTypes);

    const Tile = forwardRefAs((_a, ref) => {
        var { className, kind, size, vertical } = _a, rest = __rest(_a, ["className", "kind", "size", "vertical"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("tile", {
                [`is-${kind}`]: kind,
                [`is-${size}`]: size !== undefined,
                "is-vertical": vertical,
            }, className), ref: ref }, rest)));
    }, { as: "div" });
    Tile.displayName = "Tile";
    Tile.propTypes = {
        kind: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        vertical: PropTypes.bool,
    };

    const Divider = forwardRefAs((_a, ref) => {
        var { children, className, color, vertical } = _a, rest = __rest(_a, ["children", "className", "color", "vertical"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("is-divider", {
                [`is-${color}`]: color,
                ["is-divider-vertical"]: vertical,
            }, className), "data-content": children, ref: ref }, rest)));
    }, {
        as: "div",
        children: "",
    });
    Divider.displayName = "Divider";
    Divider.propTypes = {
        children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        vertical: PropTypes.bool,
    };

    const Footer = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("footer", className), ref: ref }, rest)));
    }, { as: "div" });
    Footer.displayName = "Footer";

    const HeroBody = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("hero-body", className), ref: ref }, rest)));
    }, { as: "div" });
    HeroBody.displayName = "Hero.Body";

    const HeroFoot = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("hero-foot", className), ref: ref }, rest)));
    }, { as: "div" });
    HeroFoot.displayName = "Hero.Foot";

    const HeroHead = forwardRefAs((_a, ref) => {
        var { className } = _a, rest = __rest(_a, ["className"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("hero-head", className), ref: ref }, rest)));
    }, { as: "div" });
    HeroHead.displayName = "Hero.Head";

    const Hero = Object.assign(forwardRefAs((_a, ref) => {
        var { className, color, gradient, size } = _a, rest = __rest(_a, ["className", "color", "gradient", "size"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("hero", {
                "is-bold": gradient,
                [`is-${color}`]: color,
                [`is-${size}`]: size,
            }, className), ref: ref }, rest)));
    }, { as: "section" }), {
        Body: HeroBody,
        Foot: HeroFoot,
        Head: HeroHead,
    });
    Hero.displayName = "Hero";
    Hero.propTypes = {
        color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        gradient: PropTypes.bool,
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    const Section = forwardRefAs((_a, ref) => {
        var { className, size } = _a, rest = __rest(_a, ["className", "size"]);
        return (React.createElement(Generic, Object.assign({ className: classNames("section", { [`is-${size}`]: size }, className), ref: ref }, rest)));
    }, { as: "section" });
    Section.displayName = "Section";
    Section.propTypes = {
        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    exports.Block = Block;
    exports.Box = Box;
    exports.Breadcrumb = Breadcrumb;
    exports.Button = Button;
    exports.Card = Card;
    exports.Checkbox = Checkbox;
    exports.Column = Column;
    exports.Container = Container;
    exports.Content = Content;
    exports.Control = Control;
    exports.Delete = Delete;
    exports.Divider = Divider;
    exports.Dropdown = Dropdown;
    exports.Field = Field;
    exports.Fieldset = Fieldset;
    exports.File = File;
    exports.Footer = Footer;
    exports.Generic = Generic;
    exports.Heading = Heading;
    exports.Help = Help;
    exports.Hero = Hero;
    exports.Highlight = Highlight;
    exports.Icon = Icon;
    exports.Image = Image;
    exports.Input = Input;
    exports.Label = Label;
    exports.Level = Level;
    exports.List = List;
    exports.Loader = Loader;
    exports.Media = Media;
    exports.Menu = Menu;
    exports.Message = Message;
    exports.Modal = Modal;
    exports.Navbar = Navbar;
    exports.Notification = Notification;
    exports.Numeric = Numeric;
    exports.PageLoader = PageLoader;
    exports.Pagination = Pagination;
    exports.Panel = Panel;
    exports.Progress = Progress;
    exports.Radio = Radio;
    exports.Section = Section;
    exports.Select = Select;
    exports.Tab = Tab;
    exports.Table = Table;
    exports.Tag = Tag;
    exports.Textarea = Textarea;
    exports.Tile = Tile;
    exports.Title = Title;
    exports.forwardRefAs = forwardRefAs;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=rbx.umd.js.map