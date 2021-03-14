import React from "react";
function Heading() {
  var date = new Date().getHours();
  let hello;
  const customStyle = {
    color: "red",
    contentEditiable: "false"
  };
  if (date < 12) {
    customStyle.color = "red";
    hello = "Good Morning";
  } else if (date >= 12 && date <= 18) {
    customStyle.color = "green";
    hello = "Good Afternoon";
  } else {
    customStyle.color = "blue";
    hello = "Good Evening";
  }

  return (
    <h1 className="header" style={customStyle}>
      {hello}
    </h1>
  );
}
export default Heading;
