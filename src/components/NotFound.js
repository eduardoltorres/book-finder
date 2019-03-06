import React from "react";
import Emoji from "./Emoji";

const NotFound = () => (
  <div style={{ textAlign: "center", background: "white" }}>
    <h1>
      Not Found! <Emoji symbol="😱" label="fear" />
    </h1>
  </div>
);

export default NotFound;
