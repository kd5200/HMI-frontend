// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function MyComponent() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/")
//       .then((response) => setData(response.data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div>
//       <h1>My Data</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.weather}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default MyComponent;
