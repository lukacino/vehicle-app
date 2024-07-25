import { useState } from "react";
import axios from "axios";

function AddVehicle({ toggle, setToggle }) {
  const [vehicle, setVehicle] = useState({
    make: "Toyota",
    mileage: "1",
    serviceDates: "",
    owner: {
      name: "John Does",
      email: "email@email.com",
    },
    image: "Enter image url",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/create", {
        vehicle,
      })
      .then(setToggle(() => !toggle));
  };

  return (
    <div className='m-6 p-3 mx-auto rounded-md border-2 w-2/5'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Make:</label>
          <input
            className='m-1 p-1 border-2 pt-0 rounded-xl text-center'
            type='text'
            placeholder={vehicle.make}
            onChange={(e) => setVehicle.make(e.target.value)}
          />
        </div>
        <div>
          <label>Mileage:</label>
          <input
            className='m-1 p-1 border-2 pt-0 rounded-xl text-center'
            type='text'
            placeholder={vehicle.mileage}
            onChange={(e) => setVehicle.mileage(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Service dates:</label>
          <input
            className='m-1 p-1 border-2 pt-0 rounded-xl text-center'
            type='date'
            onChange={(e) => setVehicle.serviceDates(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Owner name:</label>
          <input
            className='m-1 p-1 border-2 pt-0 rounded-xl text-center'
            type='text'
            placeholder={vehicle.owner.name}
            onChange={(e) => setVehicle.owner.name(e.target.value)}
          />
        </div>
        <div>
          <label>Owner email:</label>
          <input
            className='m-1 p-1 border-2 pt-0 rounded-xl text-center'
            type='email'
            placeholder={vehicle.owner.email}
            onChange={(e) => setVehicle.owner.email(e.target.value)}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            className='m-1 p-1 border-2 pt-0 rounded-xl text-center'
            type='text'
            placeholder={vehicle.image}
            onChange={(e) => setVehicle.image(e.target.value)}
          />
        </div>
        <button className='bg-blue-500 p-2 rounded-xl pt-1 mt-3 text-white hover:animate-pulse'>
          Add Vehicle
        </button>
      </form>
    </div>
  );
}

export default AddVehicle;
