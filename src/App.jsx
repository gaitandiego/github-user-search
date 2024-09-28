import { ToastContainer } from "react-toastify"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <ToastContainer />
    </div>
  )
}

export default App