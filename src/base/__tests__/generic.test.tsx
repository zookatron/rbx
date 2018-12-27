import Enzyme from "enzyme";
import React from "react";

import { Generic } from "../generic";
import { transformHelpers } from "../helpers";

import {
  hasProperties,
  makeNodeFactory,
  MakeShallowWrapperFunction,
  testForwardRefAsExoticComponentIntegration,
  testTransformHelpersIntegration,
} from "../../__tests__/testing";

const COMPONENT = Generic;
const COMPONENT_NAME = "Generic";
const DEFAULT_ELEMENT = "div";
const BULMA_CLASS_NAME = undefined;

const makeNode = makeNodeFactory(Generic);

const makeShallowWrapper: MakeShallowWrapperFunction = (
  node: JSX.Element,
  contextValue = { transform: transformHelpers },
) => {
  const contextConsumerWrapper = Enzyme.shallow(node);
  const Children = (contextConsumerWrapper.props() as any).children;
  const wrapper = Enzyme.shallow(<Children {...contextValue} />);
  return wrapper;
};

describe(`${COMPONENT_NAME} component`, () => {
  hasProperties(COMPONENT, {
    defaultProps: { as: "div" },
  });

  testForwardRefAsExoticComponentIntegration(
    makeNode,
    makeShallowWrapper,
    DEFAULT_ELEMENT,
    BULMA_CLASS_NAME,
  );

  testTransformHelpersIntegration(makeNode, makeShallowWrapper);
});
