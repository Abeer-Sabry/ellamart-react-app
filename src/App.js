import "./App.css";
// ---- COMPONENTS ---- //
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// ---- PAGES ---- //
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
