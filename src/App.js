import "./App.css";
import Content from "./Components/Content";
import Profile from "./Components/Profile";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="Dashboard">
      <Sidebar/>
	  <div className="dashboard-content">
			<Content/>
			<Profile/>
	  </div>
    </div>
  );
}

export default App;
