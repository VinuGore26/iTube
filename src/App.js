import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Paragraph from "./Components/Paragraph";

function App() {
  return (
    <>
      <div className="flex items-center justify-center m-auto">
        <div className="flex flex-col w-[14%] h-[100vh] fixed top-0 left-0 right-0 flex-nowrap">
          <Sidebar/>
        </div>
        <div className="w-[86%] fixed top-0 left-[14%] right-0 z-10">
          <Navbar/>
        </div>
        <div className="flex-col w-[86%] relative top-12 left-[7%] right-0 p-10">
          <Paragraph/>
        </div>
      </div>
    </>
  );
}

export default App;
