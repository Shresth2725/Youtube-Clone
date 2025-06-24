import { Provider } from "react-redux";
import Store from "./utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import MainCOntainer from "./components/MainCOntainer";
import WatchPage from "./components/WatchPage";
import SearchOutput from "./components/SearchOutput";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '',
        element: <MainCOntainer />,
      },
      {
        path: 'watch',
        element: <WatchPage />,
      },
      {
        path: 'search',
        element: <SearchOutput />
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
