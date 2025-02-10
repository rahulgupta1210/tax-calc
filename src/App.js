import { Provider } from 'react-redux';
import './App.css';
import Login from './components/Login';
import appStore from './utils/appStore';
import Body from './components/Body';

function App() {
  return (
    <div className="text-3xl font-bold text-red-600">
      <Provider store={appStore}>
      <Body/>

      </Provider>
    </div>
  );
}

export default App;
