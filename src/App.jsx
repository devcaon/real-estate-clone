import './App.css'
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Companies from "./components/companies/Companies";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
    </div>
  );
}

export default App;
