import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Timer.css'
import { MdSend } from 'react-icons/md';
import axios from 'axios';

const Timer = () => {
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
    const [date, setTdate] = useState({});
    const oferdate = date.Month
    console.log(oferdate)

    let interval;
    const settimers = () => {

        const conuntdwndata = new Date(`may 17 2022`).getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = conuntdwndata - now;

            const Days = Math.floor(distance / (24 * 60 * 60 * 1000));

            const Hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );

            const Minutes = Math.floor(
                (distance % (60 * 60 * 1000)) / (1000 * 60)
            );
            const Seconds = Math.floor(
                (distance % (60 * 1000)) / (1000)
            );


            if (distance < 0) {
                clearInterval(interval.current)
            } else {

                setTimerDays(Days)
                setTimerHours(Hours)
                setTimerMinutes(Minutes)
                setTimerSeconds(Seconds)
            }




        });

    };
    useEffect(() => {
        settimers()
    }, [])

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        setTdate(data)
        reset()
    };

    // ........................................



    return (
        <div className='set-time-fild'>
            <div className='row mx-5 ' >
                <div className='col-lg-6 col-sm-12 mt-5 mb-5'>
                    <div className='time'>
                        <h4 className='day'>{timerDays} <p className='day-time'>Days</p> </h4>
                        <h4 className='day'>{timerHours} <p className='day-time'>Hours</p>  </h4>
                        <h4 className='day'>{timerMinutes} <p className='day-time'>Minutes</p> </h4>
                        <h4 className='day'>{timerSeconds}<p className='day-time'>Seconds</p> </h4>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12 mt-5 mb-5' >


                </div>

            </div>
        </div>


    );
};

export default Timer;