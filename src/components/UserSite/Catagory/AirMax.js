import React, { useEffect, useState } from "react";

const AirMax = () => {
  const [Air_Max, setAir_Max] = useState([]);
  console.log(Air_Max);

  useEffect(() => {
    fetch("http://localhost:5000/Product")
      .then((res) => res.json())
      .then((data) => {
        const AirMax = data?.filter(
          (Air_Max) => Air_Max?.Catagory === "Air_Max"
        );
        setAir_Max(AirMax);
      });
  }, []);
  return <div></div>;
};

export default AirMax;
