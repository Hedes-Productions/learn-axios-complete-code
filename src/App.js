import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [deviceName, setDeviceName] = useState('');
  const [deviceYear, setDeviceYear] = useState('');
  const [devicePrice, setDevicePrice] = useState('');
  const [updateID, setUpdateID] = useState('');
  const [deviceID, setDeviceID] = useState('');
  const [deviceNameWithID, setDeviceNameWithID] = useState('');
  const [deviceYearWithID, setDeviceYearWithID] = useState('');
  const [devicePriceWithID, setDevicePriceWithID] = useState('');

  const handleSubmit = async (event) => {
    const url = 'https://api.restful-api.dev/objects';
    event.preventDefault();
    try {
      const submitData = {
        name: deviceName,
        data: {
          year: deviceYear,
          price: devicePrice,
        },
      };
      const response = await axios.post(url, submitData);
      console.log(response);
      setUpdateID(response.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (event) => {
    const url = `https://api.restful-api.dev/objects/${updateID}`;
    event.preventDefault();
    try {
      const submitData = {
        name: deviceName,
        data: {
          year: deviceYear,
          price: devicePrice,
        },
      };
      const response = await axios.put(url, submitData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (event) => {
    const url = `https://api.restful-api.dev/objects/${updateID}`;

    event.preventDefault();
    try {
      const response = await axios.delete(url);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetDevice = async (event) => {
    const url = `https://api.restful-api.dev/objects/${deviceID}`;

    event.preventDefault();
    try {
      const response = await axios.get(url);
      console.log(response);
      setDeviceNameWithID(response.data.name);
      setDeviceYearWithID(response.data.data.year);
      setDevicePriceWithID(response.data.data.price);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="background">
      {/* This form gets data according ID*/}
      <form onSubmit={handleGetDevice}>
        <p>Get your device with ID</p>
        <input
          type="text"
          name="deviceID"
          placeholder="Enter your device ID"
          value={deviceID}
          onChange={(inputDeviceID) => {
            setDeviceID(inputDeviceID.target.value);
          }}
        />
        <div>{`Device Name: ${deviceNameWithID}`}</div>
        <div>{`Device Year: ${deviceYearWithID}`}</div>
        <div>{`Device Price: ${devicePriceWithID}`}</div>
        <br />

        <button type="submit">Get your device</button>
      </form>
      {/* This form posts data */}
      <form onSubmit={handleSubmit}>
        <p>Submit your device</p>
        <div>Device Name</div>
        <input
          type="text"
          name="deviceName"
          placeholder="Enter your device name"
          value={deviceName}
          onChange={(inputDeviceName) => {
            setDeviceName(inputDeviceName.target.value);
          }}
        />
        <div>Device Year</div>
        <input
          type="text"
          name="deviceYear"
          placeholder="Enter your device year"
          value={deviceYear}
          onChange={(inputDeviceYear) => {
            setDeviceYear(inputDeviceYear.target.value);
          }}
        />
        <div>Device Price</div>
        <input
          type="text"
          name="devicePrice"
          placeholder="Enter your device price"
          value={devicePrice}
          onChange={(inputDevicePrice) => {
            setDevicePrice(inputDevicePrice.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">Submit your device</button>
      </form>

      {/* This form updates data */}
      <form onSubmit={handleUpdate}>
        <p>Update your device</p>
        <div>Device Name</div>
        <input
          type="text"
          name="deviceName"
          placeholder="Enter your device name"
          value={deviceName}
          onChange={(inputDeviceName) => {
            setDeviceName(inputDeviceName.target.value);
          }}
        />
        <div>Device Year</div>
        <input
          type="text"
          name="deviceYear"
          placeholder="Enter your device year"
          value={deviceYear}
          onChange={(inputDeviceYear) => {
            setDeviceYear(inputDeviceYear.target.value);
          }}
        />
        <div>Device Price</div>
        <input
          type="text"
          name="devicePrice"
          placeholder="Enter your device price"
          value={devicePrice}
          onChange={(inputDevicePrice) => {
            setDevicePrice(inputDevicePrice.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">Update your device</button>
      </form>

      <br />
      {/* This form delete data */}
      <button type="submit" onClick={handleDelete}>
        Delete your device
      </button>
    </div>
  );
}

export default App;
