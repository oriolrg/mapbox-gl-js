// This file is generated. Edit build/generate-style-code.js, then run `node build/generate-style-code.js`.
// @flow
/* eslint-disable */

const styleSpec = require('../../style-spec/reference/latest');

const {
    DataConstantProperty,
    DataDrivenProperty,
    CrossFadedProperty,
    HeatmapColorProperty
} = require('../properties');

import type Color from '../../style-spec/util/color';

export type LayoutProperties = {|
    "line-cap": DataConstantProperty<"butt" | "round" | "square">,
    "line-join": DataDrivenProperty<"bevel" | "round" | "miter">,
    "line-miter-limit": DataConstantProperty<number>,
    "line-round-limit": DataConstantProperty<number>,
|};

const layout: LayoutProperties = {
    "line-cap": new DataConstantProperty(styleSpec["layout_line"]["line-cap"]),
    "line-join": new DataDrivenProperty(styleSpec["layout_line"]["line-join"]),
    "line-miter-limit": new DataConstantProperty(styleSpec["layout_line"]["line-miter-limit"]),
    "line-round-limit": new DataConstantProperty(styleSpec["layout_line"]["line-round-limit"]),
};

export type PaintProperties = {|
    "line-opacity": DataDrivenProperty<number>,
    "line-color": DataDrivenProperty<Color>,
    "line-translate": DataConstantProperty<[number, number]>,
    "line-translate-anchor": DataConstantProperty<"map" | "viewport">,
    "line-width": DataDrivenProperty<number>,
    "line-gap-width": DataDrivenProperty<number>,
    "line-offset": DataDrivenProperty<number>,
    "line-blur": DataDrivenProperty<number>,
    "line-dasharray": CrossFadedProperty<Array<number>>,
    "line-pattern": CrossFadedProperty<string>,
|};

const paint: PaintProperties = {
    "line-opacity": new DataDrivenProperty(styleSpec["paint_line"]["line-opacity"]),
    "line-color": new DataDrivenProperty(styleSpec["paint_line"]["line-color"]),
    "line-translate": new DataConstantProperty(styleSpec["paint_line"]["line-translate"]),
    "line-translate-anchor": new DataConstantProperty(styleSpec["paint_line"]["line-translate-anchor"]),
    "line-width": new DataDrivenProperty(styleSpec["paint_line"]["line-width"]),
    "line-gap-width": new DataDrivenProperty(styleSpec["paint_line"]["line-gap-width"]),
    "line-offset": new DataDrivenProperty(styleSpec["paint_line"]["line-offset"]),
    "line-blur": new DataDrivenProperty(styleSpec["paint_line"]["line-blur"]),
    "line-dasharray": new CrossFadedProperty(styleSpec["paint_line"]["line-dasharray"]),
    "line-pattern": new CrossFadedProperty(styleSpec["paint_line"]["line-pattern"]),
};

module.exports = { paint, layout };