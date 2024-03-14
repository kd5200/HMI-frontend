import React, { useState, useEffect } from "react";
import axios from "axios";

const GoogleSheetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/sheets/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Google Sheet data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Google Sheet Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default GoogleSheetData;
