import { RouterProvider } from "react-router-dom";
import Header from "./layout/Header";
import { routes } from "./Routes/Routes";


function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
