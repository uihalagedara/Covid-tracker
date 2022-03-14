import Home from "./Components/Home";
import Login from "./Components/contactForm"

function App() {
  return (
    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(2,0,36,1), rgba(9,9,121,1), rgba(2,0,36,1))`}}>
      <Home />
      <Login />
    </div>
  );
}

export default App;
