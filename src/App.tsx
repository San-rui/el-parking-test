import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './redux/store';
import { Home } from './pages';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
