import "./styles.css";
//import * as PI from "./math";
import pi, { doublePi, triplePi } from "./math";
export default function App() {
  return (
    <div>
      <h1 className="header">HEy! </h1>
      <ul>
        <li>{pi}</li>
        <li>{doublePi()}</li>
        <li>{triplePi()}</li>
      </ul>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
