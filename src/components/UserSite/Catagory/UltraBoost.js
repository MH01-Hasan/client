import React, { useEffect, useState } from "react";

const UltraBoost = () => {
  const [Ultra_Boost, setUltra_Boost] = useState([]);
  console.log(Ultra_Boost);

  useEffect(() => {
    fetch("http://localhost:5000/Product")
      .then((res) => res.json())
      .then((data) => {
        const Ultra_Boost = data?.filter(
          (Ultra_Boost) => Ultra_Boost?.Catagory === "Ultra_Boost"
        );
        setUltra_Boost(Ultra_Boost);
      });
  }, []);
  return <div></div>;
};

export default UltraBoost;
