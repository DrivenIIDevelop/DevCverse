
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { UserContext } from './context/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<UserContext.Provider value={{ user: null, login: () => {}, signup: () => {} }}>
  <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserContext.Provider>
)
