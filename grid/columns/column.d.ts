import React from "react";
import { HelpersProps } from "../../base/helpers";
import { Variables } from "../../base/helpers/variables";
import { Prefer } from "../../types";
export declare const COLUMN_DEFAULTS: {
    sizes: readonly [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "one-third", "two-thirds", "one-quarter", "half", "three-quarters", "one-fifth", "two-fifths", "three-fifths", "four-fifths", "full"];
};
export interface ColumnVariablesOverrides {
}
export interface ColumnVariablesDefaults {
    sizes: (typeof COLUMN_DEFAULTS["sizes"])[number];
}
export declare type ColumnVariables = Prefer<ColumnVariablesOverrides, ColumnVariablesDefaults>;
export declare type ColumnBreakpointOptions = {
    narrow?: boolean;
    offset?: ColumnVariables["sizes"];
    size?: ColumnVariables["sizes"];
};
export declare type ColumnModifierProps = {
    [B in Variables["breakpoints"]]?: ColumnBreakpointOptions;
} & ColumnBreakpointOptions;
export declare type ColumnProps = HelpersProps & ColumnModifierProps;
export declare const Column: Pick<React.ForwardRefExoticComponent<React.ElementType<any>>, "displayName" | "$$typeof"> & {
    <TAsComponent extends React.ElementType<any> = React.ElementType<any>>(props: {
        as?: TAsComponent | undefined;
    } & import("../../base/helpers").HelpersPropsOverrides & import("../../base/helpers/badge").BadgeHelpersProps & import("../../base/helpers/float").FloatHelpersProps & import("../../base/helpers/overflow").OverflowHelpersProps & import("../../base/helpers/overlay").OverlayHelpersProps & import("../../base/helpers/tooltip").TooltipHelpersProps & import("../../base/helpers/typography").TypographyHelpersProps & import("../../base/helpers/visibility").VisibilityHelpersProps & import("../../base/helpers/other").OtherHelpersProps & import("../../base/helpers/responsive").ResponsiveHelpersProps & {
        className?: string | undefined;
    } & {
        touch?: ColumnBreakpointOptions | undefined;
        mobile?: ColumnBreakpointOptions | undefined;
        tablet?: ColumnBreakpointOptions | undefined;
        desktop?: ColumnBreakpointOptions | undefined;
        widescreen?: ColumnBreakpointOptions | undefined;
        fullhd?: ColumnBreakpointOptions | undefined;
    } & ColumnBreakpointOptions & React.ComponentProps<TAsComponent> & React.RefAttributes<TAsComponent extends "symbol" | "object" | "big" | "link" | "small" | "sub" | "sup" | "track" | "progress" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "head" | "header" | "hgroup" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "map" | "mark" | "menu" | "meta" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "source" | "span" | "strong" | "style" | "summary" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "u" | "ul" | "var" | "video" | "wbr" | "circle" | "clipPath" | "defs" | "desc" | "ellipse" | "feBlend" | "feColorMatrix" | "feComponentTransfer" | "feComposite" | "feConvolveMatrix" | "feDiffuseLighting" | "feDisplacementMap" | "feDistantLight" | "feFlood" | "feFuncA" | "feFuncB" | "feFuncG" | "feFuncR" | "feGaussianBlur" | "feImage" | "feMerge" | "feMergeNode" | "feMorphology" | "feOffset" | "fePointLight" | "feSpecularLighting" | "feSpotLight" | "feTile" | "feTurbulence" | "filter" | "foreignObject" | "g" | "image" | "line" | "linearGradient" | "marker" | "mask" | "metadata" | "path" | "pattern" | "polygon" | "polyline" | "radialGradient" | "rect" | "stop" | "svg" | "switch" | "text" | "textPath" | "tspan" | "use" | "view" | "menuitem" | "keygen" | "noindex" | "webview" | "animate" | "animateMotion" | "animateTransform" | "feDropShadow" | "mpath" ? import("../../base/exotic").FromReactType<TAsComponent> : TAsComponent>): JSX.Element | null;
    defaultProps: {
        as: React.ElementType<any>;
    } & Partial<import("../../base/helpers").HelpersPropsOverrides & import("../../base/helpers/badge").BadgeHelpersProps & import("../../base/helpers/float").FloatHelpersProps & import("../../base/helpers/overflow").OverflowHelpersProps & import("../../base/helpers/overlay").OverlayHelpersProps & import("../../base/helpers/tooltip").TooltipHelpersProps & import("../../base/helpers/typography").TypographyHelpersProps & import("../../base/helpers/visibility").VisibilityHelpersProps & import("../../base/helpers/other").OtherHelpersProps & import("../../base/helpers/responsive").ResponsiveHelpersProps & {
        className?: string | undefined;
    } & {
        touch?: ColumnBreakpointOptions | undefined;
        mobile?: ColumnBreakpointOptions | undefined;
        tablet?: ColumnBreakpointOptions | undefined;
        desktop?: ColumnBreakpointOptions | undefined;
        widescreen?: ColumnBreakpointOptions | undefined;
        fullhd?: ColumnBreakpointOptions | undefined;
    } & ColumnBreakpointOptions & Pick<any, string | number | symbol>>;
    displayName: string;
    propTypes: React.WeakValidationMap<{
        [x: string]: any;
        [x: number]: any;
    }>;
} & {
    Group: import("../../base/exotic").ForwardRefAsExoticComponent<import("./column-group").ColumnGroupProps, React.ElementType<any>>;
};