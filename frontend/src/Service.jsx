export default function Service() {
    return (
        <div className="container">
            <h1>Registration of services</h1>
            <br />
            <form>
                <div className="col-6">
                    <div>
                        <label>client's name:</label>
                        <input name="clientName"
                               type="text"
                               className="form-control"/>
                    </div>
                    <br />
                    <div>
                        <label>starting date:</label>
                        <input  name="startingDate"
                                type="date"
                                className="form-control"/>
                    </div>
                    <br />
                    <div>
                        <label>ending date:</label>
                        <input name="endingDate"
                               type="date"
                               className="form-control"/>
                    </div>
                    <br />
                    <div>
                        <label>description:</label>
                        <input name="description"
                               type="text"
                               className="form-control"/>
                    </div>
                    <br />
                    <div>
                        <label>price:</label>
                        <input name="price"
                               type="number"
                               className="form-control"/>
                    </div>
                    <br />
                    <div>
                        <label>amount paid:</label>
                        <input name="amountPaid"
                               type="number"
                               className="form-control"/>
                    </div>
                    <br />
                    <div>
                        <label>payment day:</label>
                        <input name="paymentDay"
                               type="date"
                               className="form-control"/>
                    </div>
                </div>
            </form>
        </div>
    )
}
