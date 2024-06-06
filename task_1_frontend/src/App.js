import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';


import './App.css';
import { ToastContainer } from 'react-toastify';
import RouteName from './Component/RouteName';

function App() {
  return (
    <div className="App">
      <RouteName />
      <ToastContainer className='mt-3' />
    </div>
  );
}

export default App;
