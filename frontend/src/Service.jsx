import {useEffect, useState} from "react";
import axios from "axios";

export default function Service() {
    const [service, setService] = useState({
        clientName:'',
        startingDate:'',
        endingDate:'',
        description:'',
        price:'',
        amountPaid:'',
        paymentDate:''
    })

    const [services, setServices] = useState([])

    function handleChange(event) {
        setService({...service, [event.target.name]:[event.target.value]})
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <div className="container">
            <h1>Registration of Services</h1>
            <form onSubmit={handleSubmit}>
                <div className="col-6">
                    <div>
                        <label className="form-label">Client's name:</label>
                        <input onChange={handleChange} value={service.clientName} name="clientName" type="text" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Starting date:</label>
                        <input onChange={handleChange} value={service.startingDate}  name="startingDate"  type="date" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Ending date:</label>
                        <input onChange={handleChange} value={service.endingDate}  name="endingDate"  type="date" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Description:</label>
                        <input onChange={handleChange} onChange={handleChange} value={service.description}  name="description"  type="text" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Price:</label>
                        <input onChange={handleChange} value={service.price}  name="price"  type="number" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">amount paid:</label>
                        <input onChange={handleChange} value={service.amountPaid}  name="amountPaid"  type="number" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Payment date:</label>
                        <input onChange={handleChange} value={service.paymentDate}  name="paymentDate"  type="date" className="form-control" />
                    </div>
                </div>
            </form>
        </div>
    )
}
