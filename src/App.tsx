import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './redux/store';
import { Dashboard, Home, Start } from './pages';
import { GlobalStyle } from './styles/GlobalStyle';



function App() {
  return (
    <Provider store={store}>
      <GlobalStyle/>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/home" component={Home} />
          <Route path="/" component={Start} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
