import Page from "./components/authentication/Page";
import FetchResult from "./components/customHook/FetchResult";
import Users from "./components/useEffect/Users";

function App() {
  return (
    <>
      <h1>Hooks & Context API</h1>
      <div className="task">
        <h3>Задача 1. Список и детали</h3>
        <Users />
      </div>
      <div className="task">
        <h3>Задача 2. Кастомный хук useJsonFetch</h3>
        <div className="components">
          <FetchResult url={import.meta.env.VITE_FETCH_ERROR_URL} />
          <FetchResult url={import.meta.env.VITE_FETCH_DATA_URL} />
          <FetchResult url={import.meta.env.VITE_FETCH_LOADING_URL} />
        </div>
      </div>
      <div className="task">
        <h3>Задача 3. Authentication — необязательная задача.</h3>
        <Page />
      </div>
    </>
  );
}

export default App;
