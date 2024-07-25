import axios from "axios";
import { useEffect, useState } from "react";

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const [filter, setFilter] = useState("");
  const [mileage, setMileage] = useState("Descending");
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/get")
      .then((res) => setVehicles(res.data));
  }, []);

  const filtered = filter
    ? vehicles.filter((vehicle) => vehicle.make.includes(filter))
    : vehicles;

  if (mileage === "Ascending") {
    var mileageFilter =
      mileage === "Ascending"
        ? filtered.sort((a, b) => a.mileage - b.mileage)
        : filtered;
  } else {
    mileageFilter =
      mileage === "Descending"
        ? filtered.sort((a, b) => b.mileage - a.mileage)
        : filtered;
  }

  return (
    <div className='p-6 mx-auto'>
      <h2 className='text-lg text-blue-700 font-bold text-center'>
        Vehicle list
      </h2>
      <div className='flex justify-evenly p-6'>
        <div>
          <label className='font-medium'>Filter by manifacturer:</label>
          <input
            onChange={(e) => setFilter(e.target.value)}
            className='border-2 rounded-md m-1 p-1 pt-0'
            type='text'
          />
        </div>
        <div>
          <label className='font-medium'>Sort by mileage:</label>
          <select
            value={mileage}
            onChange={(e) => setMileage(e.target.value)}
            className='border-2 rounded-md m-1 p-1 pt-0'>
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </div>
      </div>
      <div>
        {mileageFilter.map((vehicle) => {
          return (
            <div className='border-2 rounded-xl p-2 m-2' key={vehicle._id}>
              <div className='flex'>
                <label>Make:</label>
                <p>{vehicle.make}</p>
              </div>
              <div className='flex'>
                <label>Mileage:</label>
                <p>{vehicle.mileage}</p>
              </div>
              <div className='flex'>
                <label>Service dates:</label>
                <p> {vehicle.serviceDates}</p>
              </div>
              <div className='flex'>
                <label>Owner:</label>
                <p>{vehicle.owner.name}</p>
                <p>{vehicle.owner.email}</p>
              </div>
              <div className='flex'>
                <label>Image</label>
                <p>{vehicle.image}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VehicleList;
