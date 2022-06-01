import "./App.css";
// ---- COMPONENTS ---- //
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ResponsiveHeader from "./components/ResponsiveHeader/ResponsiveHeader";
// ---- PAGES ---- //
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <Header />
      <ResponsiveHeader />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
