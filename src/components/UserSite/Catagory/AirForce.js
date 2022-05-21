import React, { useEffect, useState } from 'react';

const AirForce = () => {
    const [AirForce, setAirForce] = useState([])
    console.log(AirForce)


    useEffect(() => {
        fetch("http://localhost:5000/Product")
            .then(res => res.json())
            .then(data => {
                const AirForce = data?.filter(AirForce => AirForce?.Catagory === "Air_Force")
                setAirForce(AirForce)
            })
    }, [])
    return (
        <div>

        </div>
    );
};

export default AirForce;