import React from "react";

import {
  FIELD_LABEL_DEFAULTS,
  FieldLabel,
} from "src/elements/form/field-label";
import {
  hasProperties,
  makeShallowWrapperFactory,
  testForwardRefAsExoticComponentIntegration,
  testThemeIntegration,
  validateStringOrNumberPropType,
} from "src/__tests__/testing";

const COMPONENT = FieldLabel;
const DISPLAY_NAME = "Field.Label";
const DEFAULT_ELEMENT = "div";
const BULMA_CLASS_NAME = "field-label";

describe(`${DISPLAY_NAME} component`, () => {
  hasProperties(COMPONENT, {
    defaultProps: { as: DEFAULT_ELEMENT },
    VARIABLE_DEFAULTS: FIELD_LABEL_DEFAULTS,
  });

  testForwardRefAsExoticComponentIntegration(COMPONENT, {
    bulmaClassName: BULMA_CLASS_NAME,
    defaultElement: DEFAULT_ELEMENT,
    displayName: DISPLAY_NAME,
  });

  testThemeIntegration(COMPONENT);

  describe("props", () => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    const { propTypes } = COMPONENT;

    const makeShallowWrapper = makeShallowWrapperFactory();

    describe("size", () => {
      validateStringOrNumberPropType(propTypes, "size");

      FIELD_LABEL_DEFAULTS.sizes.forEach(size => {
        it(`should be ${size}`, () => {
          const node = <FieldLabel size={size} />;
          const wrapper = makeShallowWrapper({ node });
          expect(wrapper.hasClass(`is-${size}`)).toBe(true);
        });
      });
    });
  });
});
