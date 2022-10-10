import React from "react";
import { useState } from "react";

function ToggleButton() {
  const [toggle, settoggle] = useState(false);
  return (
    <div>
      <button onClick={() => settoggle(!toggle)}>
        {toggle ? "Drak" : "Light"}
      </button>
    </div>
  );
}

export default ToggleButton;
