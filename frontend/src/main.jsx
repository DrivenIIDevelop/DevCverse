
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext.jsx';
import { ProductContextProvider } from './context/ProductContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<UserContextProvider>
  <ProductContextProvider>
    <BrowserRouter>
        <App />
      </BrowserRouter>
  </ProductContextProvider>
</UserContextProvider>
)
