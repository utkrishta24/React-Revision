function customRender(reactElement, container) {
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);
  //   container.appendChild(domElement);

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElementAnchor = {
  type: "a",
  props: {
    href: "https://google.com",>
    target: "_blank",
  },
  children: "This is a custom anchor tag",
};

const reactElementHeading = {
  type: "h1",
  props: {},
  children: "This is a custom heading tag",
};

const mainContainer = document.querySelector("#root");

customRender(reactElementAnchor, mainContainer);
customRender(reactElementHeading, mainContainer);
