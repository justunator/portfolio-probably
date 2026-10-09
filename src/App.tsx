import "./App.css";
import About from "./components/About.tsx";
import Contacts from "./components/Contacts.tsx";
import Header from "./components/Header.tsx";
import Home from "./components/Home.tsx";
import Projects from "./components/Projects.tsx";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contacts />
    </>
  );
}

export default App;
