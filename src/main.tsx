import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { PopUpsContext } from './context/PopUps.tsx';
import { UserContext } from './context/User.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <PopUpsContext>
      <UserContext>
          <App />
      </UserContext>
    </PopUpsContext>
    </BrowserRouter>

)
