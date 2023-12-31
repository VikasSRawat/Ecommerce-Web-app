import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../components/layouts/Layout';

axios.defaults.baseURL = 'http://127.0.0.1:5000';
export default function Main() {
    const [name, setName] = useState("");
    const [season, setseason] = useState("");
    const [availability, setAvailability] = useState("");
    const [demand, setDemand] = useState("");
    const [state, setState] = useState("");
    const [output, setOutput] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === '' || state === '' || demand === '' || season === '' || availability === '') {
            setOutput('Please Select all Fields.');
            return;
        }
        const data = {
            id: "64e55f74b4ab1204db3dc142",
            name: name,
            season: season,
            state: state,
            availability: availability,
            demand: demand
        }
        const submitedData = await axios.put('/users', data);
        console.log(submitedData);
        fetch();
    }
    async function fetch() {
        const data = await axios.get('/users');
        console.log(data.data[0].output)
        setOutput(data.data[0].output);
    }
    return (
        <Layout>
            <div className='outer'>
                <div className='form-container'>
                    <div className='title'>
                        <h1>Price Predictor</h1>
                    </div>
                    <form>
                        <div className='row-mai'>
                            <div className='col mb-3 form-control'>
                                <span>Product Name:- </span>
                                <select onChange={(e) => setName(e.target.value)}>
                                    <option value={""} name='name' selected>--Name--</option>
                                    <option value={"0"} name='name'>Potato</option>
                                    <option value={"1"} name='name'>Onion</option>
                                    <option value={"2"} name='name'>Tomato</option>
                                    <option value={"3"} name='name'>Lady Finger</option>
                                    <option value={"4"} name='name'>Ginger</option>
                                </select>
                            </div>
                            <div className='col mb-3 form-control'>
                                <span>Season:- </span>
                                <select onChange={(e) => setseason(e.target.value)}>
                                    <option value={""} name='season'>--Season--</option>
                                    <option value={"0"} name='season'>Winter</option>
                                    <option value={"1"} name='season'>Spring</option>
                                    <option value={"2"} name='season'>Summer</option>
                                    <option value={"3"} name='season'>Monsoon</option>
                                    <option value={"4"} name='season'>Autumn</option>
                                    <option value={"5"} name='season'>Pre-Winter</option>
                                </select>
                            </div>
                            <div className='col mb-3 form-control'>
                                <span>Availability:- </span>
                                <select onChange={(e) => setAvailability(e.target.value)}>
                                    <option value={""} name='availability'>--Availability--</option>
                                    <option value={"0"} name='availability'>Low</option>
                                    <option value={"1"} name='availability'>Moderate</option>
                                    <option value={"2"} name='availability'>High</option>
                                </select>
                            </div>
                            <div className='col mb-3 form-control'>
                                <span>Demand:- </span>
                                <select onChange={(e) => setDemand(e.target.value)}>
                                    <option value={""} name='demand'>--Demand--</option>
                                    <option value={"0"} name='demand'>Low</option>
                                    <option value={"1"} name='demand'>Moderate</option>
                                    <option value={"2"} name='demand'>High</option>
                                </select>
                            </div>
                            <div className='col mb-3 form-control'>
                                <span>City:- </span>
                                <select onChange={(e) => setState(e.target.value)}>
                                    <option value={""} name='demand'>--City--</option>
                                    <option value={"0"} name='demand'>Delhi</option>
                                    <option value={"1"} name='city'>Dehradun</option>
                                </select>
                            </div>
                            <div className='col mb-3' style={{ justifyContent: 'center' }}>
                                <button className='btn' onClick={handleSubmit}>Predict</button>
                            </div>
                            <div className='op'>
                                Predicted Price:- {(output === 'Please Select all Fields.' && output) || (output && `${(parseFloat(output).toFixed(2))} Rs/Kg`)}
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </Layout>
    )
}