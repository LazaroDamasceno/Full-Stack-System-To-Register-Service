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

    return (
        <div className="container">
            <h1>Registration of Services</h1>
            <form>
                <div className="col-6">
                    <div>
                        <label className="form-label">Client's name: </label>
                        <input value={service.recipient} name="recipient" type="text" className="form-control"/>
                    </div>
                    <div>
                        <label className="form-label">Starting date: </label>
                        <input value={service.startingDate} name="startingDate" type="date" className="form-control"/>
                    </div>
                    <div>
                        <label className="form-label">Ending date: </label>
                        <input value={service.endingDate} name="endingDate" type="date" className="form-control"/>
                    </div>
                    <div>
                        <label className="form-label">Description: </label>
                        <input value={service.description} name="description" type="text" className="form-control"/>
                    </div>
                    <div>
                        <label className="form-label">Price: </label>
                        <input value={service.price} name="price" type="text" className="form-control"/>
                    </div>
                    <div>
                        <label className="form-label">Price paid: </label>
                        <input value={service.pricePaid} name="pricePaid" type="number" className="form-control"/>
                    </div>
                    <div>
                        <label className="form-label">Payment Date: </label>
                        <input value={service.paymentDate} name="paymentDate" type="date" className="form-control"/>
                    </div>
                </div>
            </form>
        </div>
    )

}
