import { useState } from "react";
import "./App.css";
import AddVehicle from "./AddVehicle";
import VehicleList from "./VehicleList";

function App() {
  const [toggle, setToggle] = useState(false);
  const toggleAdd = () => {
    setToggle(() => !toggle);
  };

  return (
    <div className='container mx-auto p-3'>
      <h1 className='font-bold text-2xl text-center'>
        Vehicle Tracking System
      </h1>
      <button
        onClick={toggleAdd}
        className='bg-blue-500 p-2 pt-1 text-white rounded-md mt-6 mx-auto flex'>
        Add New Vehicle
      </button>
      {toggle ? (
        <AddVehicle toggle={toggle} setToggle={setToggle} />
      ) : (
        <VehicleList />
      )}
    </div>
  );
}

export default App;
