import DataProvider from "./Context/DataProvider";
import AppRouter from "./Router/AppRouter";

function App() {

  return (
    <DataProvider>
      <AppRouter />
    </DataProvider>
  );
}

export default App;
