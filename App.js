import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => (
  <h1 className="head" tabIndex="5">
    Hi from JSX!
  </h1>
);

const HeadingComponent = () => (
  // return (
    <div id="container">
      {<Heading />}
      {Heading()}
      <Heading />
      <Heading></Heading>
      <h1 className="heading">This is React Component!</h1>
    </div>
  );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
