import {useEffect, useState} from "react";
import axios from "axios";

export default function Service() {
    const [service, setService] = useState({
        clientName:'',

    })

    return (
        <div className="container">
            <h1>Registration of Services</h1>
            <form>
                <div className="col-6">
                    <div>
                        <label className="form-label">Client's name:</label>
                        <input name="clientName" type="text" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Starting date:</label>
                        <input name="startingDate"  type="date" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Ending date:</label>
                        <input name="endingDate"  type="date" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Description:</label>
                        <input name="description"  type="text" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Price:</label>
                        <input name="price"  type="number" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">amount paid:</label>
                        <input name="amountPaid"  type="number" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Payment date:</label>
                        <input name="paymentDate"  type="date" className="form-control" />
                    </div>
                </div>
            </form>
        </div>
    )
}
