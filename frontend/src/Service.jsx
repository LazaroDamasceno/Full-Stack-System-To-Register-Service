import React from "react";

export default function Service() {
    return (
        <div className="container">
            <div className="col-6">
                <div>
                    <label className="form-label">Client's name:</label>
                    <input type="text" className="form-control" />
                </div>
                <div>
                    <label className="form-label">Starting Date:</label>
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
                <div>
                    <label className="form-label">Payment date:</label>
                    <input type="date" className="form-control" />
                </div>
            </div>
        </div>
    )
}
