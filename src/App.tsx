import { Provider } from "react-redux";
import { store } from './redux/store';
import { Home } from './pages';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        app
      </div>
    </Provider>
  );
}

export default App;
