import React, { useEffect, useState } from "react";

const Ladies_Bag = () => {
  const [Ladies_Bag, setLadies_Bag] = useState([]);
  console.log(Ladies_Bag);

  useEffect(() => {
    fetch("http://localhost:5000/Product")
      .then((res) => res.json())
      .then((data) => {
        const Ladies_Bag = data?.filter(
          (Ladies_Bag) => Ladies_Bag?.Catagory === "Ladies_Bag"
        );
        setLadies_Bag(Ladies_Bag);
      });
  }, []);
  return <div></div>;
};

export default Ladies_Bag;
