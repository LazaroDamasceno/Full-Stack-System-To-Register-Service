import {useState} from "react";
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

    //const [services, setServices] = useState([])

    function handleChange(event) {
        setService({...service, [event.target.name]:event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        axios
            .post("http://localhost:8080/services/add", service)
            .then(result => {
                console.log(result)
            })
    }
    return (
        <div className="container">
            <h1>Registration of services</h1>
            <br />
            <section>
                <form onSubmit={handleSubmit}>
                    <div className="col-6">
                        <div>
                            <label>client's name:</label>
                            <input name="clientName"
                                   type="text"
                                   className="form-control"
                                   value={service.clientName}
                                   onChange={handleChange}
                            />
                        </div>
                        <br />
                        <div>
                            <label>starting date:</label>
                            <input  name="startingDate"
                                    type="date"
                                    className="form-control"
                                    value={service.startingDate}
                                    onChange={handleChange}
                            />
                        </div>
                        <br />
                        <div>
                            <label>ending date:</label>
                            <input name="endingDate"
                                   type="date"
                                   className="form-control"
                                   value={service.endingDate}
                                   onChange={handleChange}
                            />
                        </div>
                        <br />
                        <div>
                            <label>description:</label>
                            <input name="description"
                                   type="text"
                                   className="form-control"
                                   value={service.description}
                                   onChange={handleChange}
                            />
                        </div>
                        <br />
                        <div>
                            <label>price:</label>
                            <input name="price"
                                   type="number"
                                   className="form-control"
                                   value={service.price}
                                   onChange={handleChange}
                            />
                        </div>
                        <br />
                        <div>
                            <label>amount paid:</label>
                            <input name="amountPaid"
                                   type="number"
                                   className="form-control"
                                   value={service.amountPaid}
                                   onChange={handleChange}
                            />
                        </div>
                        <br />
                        <div>
                            <label>payment day:</label>
                            <input name="paymentDay"
                                   type="date"
                                   className="form-control"
                                   value={service.paymentDay}
                                   onChange={handleChange}
                            />
                        </div>
                        <br />
                        <input type="submit" value="Register" className="btn btn-success"/>
                    </div>
                </form>
            </section>
            <br />
            <section>

            </section>
        </div>
    )
}
