import { useEffect, useState } from "react";
import { getMeterData } from "../api_Integration/Individual_rawdata.js";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMeterData({
        meterId: "meter2",
        date: "2024-06-01"
      });
      setData(response);
    };

    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return <div>{JSON.stringify(data.latest_reading)}</div>;
}

export default Dashboard;