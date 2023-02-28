export default function Service() {


    return (
        <div className="container">
            <div className="col-6">
                <div>
                    <label className="form-label">Client's name:</label>
                    <input name="clientName" type="text" className="form-control" />
                </div>
                <div>
                    <label className="form-label">Starting Date:</label>
                    <input name="startingDate" type="date" className="form-control" />
                </div>
                <div>
                    <label className="form-label">Ending date:</label>
                    <input name="endingDate" type="date" className="form-control" />
                </div>
                <div>
                    <label className="form-label">Description:</label>
                    <input name="description" type="text" className="form-control" />
                </div>
                <div>
                    <label className="form-label">Price:</label>
                    <input name="price" type="number" className="form-control" />
                </div>
                <div>
                    <label className="form-label">Price paid:</label>
                    <input name="pricePaid" type="number" className="form-control" />
                </div>
                <div>
                    <label className="form-label">Payment date:</label>
                    <input name="paymentDay" type="date" className="form-control" />
                </div>
            </div>
        </div>
    )
}
