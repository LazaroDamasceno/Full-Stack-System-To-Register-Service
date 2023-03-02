import {useEffect, useState} from "react";
import axios from "axios";

export default function Service() {

    const [service, setService] = useState({
        clientName:"",
        startingDate:"",
        endingDate:"",
        description:"",
        price:"",
        amountPaid:"",
        paymentDay:""
    });

    const [services, setServices] = useState([])

    const [update, setUpdate] = useState()

    function clear() {
        setService({
            clientName:"",
            startingDate:"",
            endingDate:"",
            description:"",
            price:"",
            amountPaid:"",
            paymentDay:""
        })
    }

    function handleChange(event) {
        setService({...service, [event.target.name]:event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (service.id == undefined) {
            axios
                .post("http://localhost:8080/services/add", service)
                .then((result) => {
                    setUpdate(result)
                })
        } else {
            axios.put("http://localhost:8080/services/update", service)
                .then((result) => {
                    setUpdate(result)
                })
        }
        clear()
    }

    function deleteById(id) {
        axios.delete("http://localhost:8080/services/delete/"+id)
            .then((result) => {
                setUpdate(result)
            })
    }

    function cancel(id) {
        axios.put("http://localhost:8080/services/cancel/"+id)
            .then((result) => {
                setUpdate(result)
            })
    }

    useEffect(() => {
        axios.get("http://localhost:8080/services/all").then(result => {
            setServices(result.data)
        })}, [update]
    )

    function getAll() {
        axios.get("http://localhost:8080/services/all").then(result => {
            setServices(result.data)
        })
    }

    function getServicesWithPendingPayment() {
        axios.get("http://localhost:8080/services/all/pending").then(result => {
            setServices(result.data)
        })
    }

    function getCancelledServices() {
        axios.get("http://localhost:8080/services/all/cancelled").then(result => {
            setServices(result.data)
        })
    }

    return (
        <div className="container">
            <h1>Registration of services</h1>
            <br />
            <section>

            </section>
            <form onSubmit={handleSubmit}>
                <div className="col-6">
                    <div>
                        <label>client's name:</label>
                        <input name="clientName"
                               type="text"
                               className="form-control"
                               value={service.clientName || ''}
                               onChange={handleChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>starting date:</label>
                        <input  name="startingDate"
                                type="date"
                                className="form-control"
                                value={service.startingDate || ''}
                                onChange={handleChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>ending date:</label>
                        <input name="endingDate"
                               type="date"
                               className="form-control"
                               value={service.endingDate || ''}
                               onChange={handleChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>description:</label>
                        <input name="description"
                               type="text"
                               className="form-control"
                               value={service.description || ''}
                               onChange={handleChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>price:</label>
                        <input name="price"
                               type="number"
                               className="form-control"
                               value={service.price || ''}
                               onChange={handleChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>amount paid:</label>
                        <input name="amountPaid"
                               type="number"
                               className="form-control"
                               value={service.amountPaid || ''}
                               onChange={handleChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>payment day:</label>
                        <input name="paymentDay"
                               type="date"
                               className="form-control"
                               value={service.paymentDay || ''}
                               onChange={handleChange}
                        />
                    </div>
                    <br />
                    <input type="submit" value="Register" className="btn btn-success"/>
                </div>
            </form>
            <br />

            <button onClick={getAll} type="button" className="btn btn-primary">Get All Services</button>&nbsp;&nbsp;
            <button onClick={getServicesWithPendingPayment} type="button" className="btn btn-secondary">Get Services With Pending Payment</button>&nbsp;&nbsp;
            <button onClick={getCancelledServices} type="button" className="btn btn-success">Get Cancelled Services</button>
            <br />
            <br />

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">name</th>
                    <th scope="col">description</th>
                    <th scope="col">price</th>
                    <th scope="col">status</th>
                    <th scope="col">options</th>
                </tr>
                </thead>
                <tbody>
                {services.map(serv => (
                    <tr key={serv.id}>
                        <td>{serv.clientName}</td>
                        <td>{serv.description}</td>
                        <td>{serv.price}</td>
                        <td>{serv.status}</td>
                        <td>
                            {
                                serv.status != 'CANCELLED' &&
                                <button onClick={() => setService(serv)} className="btn btn-primary">Update</button>
                            }&nbsp;&nbsp;
                            {
                                serv.status != 'CANCELLED' &&
                                <button onClick={() => deleteById(serv.id)} className="btn btn-danger">Delete</button>
                            }&nbsp;&nbsp;
                            <button onClick={() => cancel(serv.id)} className="btn btn-warning">Cancel</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )

}
