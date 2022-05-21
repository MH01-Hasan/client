import React, { useEffect, useState } from 'react';

const AirJorden = () => {
    const [Air_Jorden, setAir_Jorden] = useState([])
    console.log(Air_Jorden)


    useEffect(() => {
        fetch("http://localhost:5000/Product")
            .then(res => res.json())
            .then(data => {
                const filterjorten = data?.filter(flterdata => flterdata?.Catagory === "Air_Jorden")
                setAir_Jorden(filterjorten)
            })
    }, [])
    return (
        <div>

        </div>
    );
};

export default AirJorden;