import React from "react";
import FlexDemo from "../FlexDemo";

import renderer from "react-test-renderer";

test("renders correctly", () => {
  const tree = renderer.create(<FlexDemo />).toJSON();

  expect(tree).toMatchSnapshot();
});
