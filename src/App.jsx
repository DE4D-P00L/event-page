import EventPage from "./components/EventPage/EventPage";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="bg-[#e2ddca] grid place-items-center min-h-screen">
      <Nav />
      <EventPage />
    </div>
  );
}

export default App;
