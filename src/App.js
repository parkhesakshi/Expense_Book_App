import logo from "./logo.svg";
import "./App.scss";
import LayoutComponent from "./app/layout/layout.component";

function App() {
  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <LayoutComponent />
    </div>
  );
}

export default App;
