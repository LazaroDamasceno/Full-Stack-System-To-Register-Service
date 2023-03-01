import {useEffect, useState} from "react";
import axios from "axios";

export default function Service() {
    const [service, setService] = useState({
        clientName:'',
        startingDate:'',
        endingDate:'',
        description:'',
        price:'',
        pricePaid:'',
        paymentDay:''
    })

    const [services, setServices] = useState([])
    const [update, setUpdate] = useState()

    function handleChange(event) {
        setService({...service, [event.target.name]:event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios
            .post("http://localhost:8080/services/add", service)
            .then(result => {
                setUpdate(result)
            })
    }

    useEffect(() => {
        axios.get("http://localhost:8080/services/all").then(result => {
            setServices(result.data)
        })
    }, [update])

    return (
        <div className="container">
            <div className="col-6">
                <h1>Registration of Services</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="form-label">Client's name:</label>
                        <input onChange={handleChange} value={service.clientName} name="clientName" type="text" className="form-control" />
                    </div>
                    <br/>
                    <div>
                        <label className="form-label">Starting Date:</label>
                        <input onChange={handleChange} value={service.startingDate} name="startingDate" type="date" className="form-control" />
                    </div>
                    <br/>
                    <div>
                        <label className="form-label">Ending date:</label>
                        <input onChange={handleChange} value={service.endingDate} name="endingDate" type="date" className="form-control" />
                    </div>
                    <br/>
                    <div>
                        <label className="form-label">Description:</label>
                        <input onChange={handleChange} value={service.description} name="description" type="text" className="form-control" />
                    </div>
                    <br/>
                    <div>
                        <label className="form-label">Price:</label>
                        <input onChange={handleChange} value={service.price}  name="price" type="number" className="form-control" />
                    </div>
                    <br/>
                    <div>
                        <label className="form-label">Price paid:</label>
                        <input onChange={handleChange} value={service.pricePaid} name="pricePaid" type="number" className="form-control" />
                    </div>
                    <br/>
                    <div>
                        <label className="form-label">Payment date:</label>
                        <input onChange={handleChange} value={service.paymentDay} name="paymentDay" type="date" className="form-control" />
                    </div>
                    <br/>
                    <input type="submit" className="btn btn-success" value="registration"/>
                </form>
            </div>
            <hr/><hr/>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">client's name</th>
                        <th scope="col">description</th>
                        <th scope="col">price</th>
                        <th scope="col">starting date</th>
                        <th scope="col">ending date</th>
                        <th scope="col">status</th>
                    </tr>
                </thead>
                <tbody>
                {
                    services.map(data => (
                    <tr key={data.id}>
                        <td>{data.clientName}</td>
                        <td>{data.description}</td>
                        <td>{data.price}</td>
                        <td>{data.startingDate}</td>
                        <td>{data.endingDate}</td>
                        <td>{data.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
