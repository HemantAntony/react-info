import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main"

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  
  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(prevMode => !prevMode)}/>
      <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;
