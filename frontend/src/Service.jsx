import {useEffect, useState} from "react";
import axios from "axios";

export default function Service() {
    return (
        <div className="container">
            <h1>Registration of Services</h1>
            <form>
                <div className="col-6">
                    <div>
                        <label className="form-label">Client's name:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Starting date:</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Ending date:</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Description:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Price:</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div>
                        <label className="form-label">Price paid:</label>
                        <input type="number" className="form-control" />
                    </div>
                </div>
            </form>
        </div>
    )
}
