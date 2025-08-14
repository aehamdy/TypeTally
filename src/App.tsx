import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  return (
    <main className="h-full py-5 px-2">
      <Header />

      <div className="w-full h-full">
        <MainContent />
      </div>
    </main>
  );
}

export default App;
