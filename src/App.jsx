import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Card from "./Components/Card";
import MetricChart from "./Components/Chartcomponent";
import Navbox from "./Components/Navbox";
import DeviceInfoBar from "./Components/DeviceInfobar";
import "./App.css";
import EmsOverview from "./assets/Pages/EmsOverview";
import Login from "./assets/Pages/Login";
import IndividualMeterScreen from "./assets/Pages/Individual-meter-screen";
import IndividualMeterScreen_dev   from "./assets/Pages/MeterDashboard";
// import IndividualMeterScreen_dev   from "./assets/Pages/Individual_screen_dev";

import PanelDetails from "./assets/Pages/PanelDetails";
import PanelAlarms from "./assets/Pages/PanelAlarms";


function App() {
  const [data, setData] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedData, setSelectedData] = useState(null);

  // useEffect(() => {
  //   axios.get("http://localhost:3000/getData")
  //     .then(res => setData(res.data))
  //     .catch(err => console.error(err));
  // }, []);

  const handleSelect = (title, data) => {
    setSelectedTitle(title);
    setSelectedData(data);
  };

  // if (!data) return <p>Loading...</p>;

  return (
    <Router>
      <Routes>

        {/* 🔹 EMS Overview Route */}
        <Route path="/ems-overview" element={<EmsOverview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/machine-status" element={<IndividualMeterScreen />} />
        <Route path="/machine-status-dev" element={<IndividualMeterScreen_dev />} />


        <Route path="/ems/panel/:panelId/details" element={<PanelDetails />} />
<Route path="/ems/panel/:panelId/alarms" element={<PanelAlarms />} />

        {/* 🔹 Main Dashboard Route */}
        <Route
          path="/"
          element={
            <div className="container">
              
              <div className="top">
                <DeviceInfoBar />
                <div className="datetime">
                  Date:16-01-2024 Time:11:30
                </div>
              </div>

              <Navbox />

              {/* 🔹 Cards */}
              <div className="card-container">
                {/* {Object.entries(data).map(([key, value]) => ( */}
                {Object.entries(data || {}).map(([key, value]) => (
                  <Card
                    key={key}
                    title={key}
                    data={value}
                    onSelect={handleSelect}
                    isActive={selectedTitle === key}
                  />
                ))}
              </div>

              {/* 🔹 Chart */}
              <div className="chart-container">
                <MetricChart title={selectedTitle} data={selectedData} />
              </div>
            </div>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
