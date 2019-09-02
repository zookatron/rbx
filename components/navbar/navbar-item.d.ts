import React from "react";
import { NavbarItemContainer, NavbarItemContainerProps } from "./navbar-item-container";
export declare type NavbarItemProps = Omit<NavbarItemContainerProps, "as" | "innerRef">;
export declare const NavbarItem: Pick<React.ForwardRefExoticComponent<React.ElementType<any>>, "displayName" | "$$typeof"> & {
    <TAsComponent extends React.ElementType<any> = React.ElementType<any>>(props: {
        as?: TAsComponent | undefined;
    } & Pick<NavbarItemContainerProps, "active" | "hidden" | "up" | "overlay" | "expanded" | "italic" | "relative" | "tab" | "tooltip" | "className" | "badge" | "badgeColor" | "badgeOutlined" | "badgeRounded" | "badgeSize" | "clearfix" | "pull" | "marginless" | "paddingless" | "radiusless" | "shadowless" | "unselectable" | "clipped" | "responsive" | "textAlign" | "textSize" | "tooltipActive" | "tooltipColor" | "tooltipMultiline" | "tooltipPosition" | "tooltipResponsive" | "backgroundColor" | "textColor" | "textTransform" | "textWeight" | "invisible" | "srOnly" | "hoverable" | "managed" | "dropdown" | "onClick"> & React.ComponentProps<TAsComponent> & React.RefAttributes<TAsComponent extends "symbol" | "object" | "big" | "link" | "small" | "sub" | "sup" | "track" | "progress" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "map" | "mark" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "source" | "span" | "strong" | "style" | "summary" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "wbr" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "svg" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | "menuitem" | "keygen" | "noindex" | "webview" | "animate" | "animateMotion" | "animateTransform" | "feDropShadow" | "mpath" ? import("../../base/exotic").FromReactType<TAsComponent> : TAsComponent>): JSX.Element | null;
    defaultProps: {
        as: React.ElementType<any>;
    } & Partial<Pick<NavbarItemContainerProps, "active" | "hidden" | "up" | "overlay" | "expanded" | "italic" | "relative" | "tab" | "tooltip" | "className" | "badge" | "badgeColor" | "badgeOutlined" | "badgeRounded" | "badgeSize" | "clearfix" | "pull" | "marginless" | "paddingless" | "radiusless" | "shadowless" | "unselectable" | "clipped" | "responsive" | "textAlign" | "textSize" | "tooltipActive" | "tooltipColor" | "tooltipMultiline" | "tooltipPosition" | "tooltipResponsive" | "backgroundColor" | "textColor" | "textTransform" | "textWeight" | "invisible" | "srOnly" | "hoverable" | "managed" | "dropdown" | "onClick"> & Pick<any, string | number | symbol>>;
    displayName: string;
    propTypes: React.WeakValidationMap<{
        [x: string]: any;
        [x: number]: any;
    }>;
} & {
    Container: typeof NavbarItemContainer;
};
