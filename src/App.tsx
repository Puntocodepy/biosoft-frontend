import './App.scss'
import Router from './routes/Router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="dark">
      <Router />
      <ToastContainer theme='dark'/>
    </div>
  )
}

export default App
