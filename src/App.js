import "./styles.css";
var hello = "Good Morning";
const customStyle = {
  color: "red",
  contentEditiable: "false"
};
var date = new Date().getHours();
console.log(date);
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
export default function App() {
  return (
    <div>
      <h1 style={customStyle} className="header">
        {hello}
      </h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
