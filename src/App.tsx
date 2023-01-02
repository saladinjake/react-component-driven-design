import { useEffect } from "react";
import Router from "./routes";
import { useAuth } from "./context/AuthContext";
import { useIdleTimer } from "react-idle-timer";
import "./styles/main.scss"
function App() {
  const { loadAuthUser, logout } = useAuth();

  useEffect(() => {
    loadAuthUser();
  }, []);

  const onIdle = () => {
    logout();
  };

  useIdleTimer({ onIdle, timeout: 1000 * 60 * 5 });

  return <Router />;
}

export default App;
