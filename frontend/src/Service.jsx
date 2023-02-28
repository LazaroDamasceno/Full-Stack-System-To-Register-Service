import React from "react";
import {useState} from "react";
import {useEffect} from "react";

export default function Service() {

    const [service, setService] = useState({
        recipient:'',
        startingDate:'',
        endingDate:'',
        description:'',
        price:'',
        pricePaid:'',
        paymentDate:''
    })

    const [services, setServices] = useState([])

    function handleChange(event) {
        setService({...service, [event.target.name]:event.target.value})
    }

    return (
        <div className="container">
            <h1>Registration of Services</h1>
            <form>
                <div className="col-6">
                    <div>
                        <label className="form-label">Client's name: </label>
                        <input onChange={handleChange} value={service.recipient} name="recipient" type="text" className="form-control"/>
                    </div>
                    <div>
                        <label className="form-label">Starting date: </label>
                        <input onChange={handleChange} value={service.startingDate} name="startingDate" type="date" className="form-control"/>
                    </div>
                    <div>
                        <label className="form-label">Ending date: </label>
                        <input onChange={handleChange} value={service.endingDate} name="endingDate" type="date" className="form-control"/>
                    </div>
                    <div>
                        <label className="form-label">Description: </label>
                        <input onChange={handleChange} value={service.description} name="description" type="text" className="form-control"/>
                    </div>
                    <div>
                        <label className="form-label">Price: </label>
                        <input onChange={} value={service.price} name="price" type="text" className="form-control"/>
                    </div>
                    <div>
                        <label className="form-label">Price paid: </label>
                        <input onChange={handleChange} value={service.pricePaid} name="pricePaid" type="number" className="form-control"/>
                    </div>
                    <div>
                        <label className="form-label">Payment Date: </label>
                        <input onChange={handleChange} value={service.paymentDate} name="paymentDate" type="date" className="form-control"/>
                    </div>
                </div>
            </form>
        </div>
    )

}
