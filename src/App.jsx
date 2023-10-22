import { useEffect, useState } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import { ToastContainer } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Home />
      <ToastContainer />
    </div>
  );
}

export default App;
