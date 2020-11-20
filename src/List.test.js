import List from "./List";
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

const header = ["first list"];
const card = [{ id: "a", title: "First card", content: "lorem ipsum" }];

describe("List Component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<List header={header} cards={card} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders the UI as expected", () => {
    const tree = renderer
      .create(<List header={header} cards={card} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
