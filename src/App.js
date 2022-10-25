import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import './App.css'


function App() {
  return (
    <div className="bg">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
