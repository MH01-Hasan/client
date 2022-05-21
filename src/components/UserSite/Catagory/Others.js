import React, { useEffect, useState } from "react";

const Others = () => {
  const [Others, setOthers] = useState([]);
  console.log(Others);

  useEffect(() => {
    fetch("http://localhost:5000/Product")
      .then((res) => res.json())
      .then((data) => {
        const Others = data?.filter((Others) => Others?.Catagory === "Others");
        setOthers(Others);
      });
  }, []);
  return <div></div>;
};

export default Others;
