function App() {
  return (
    <div className="container">
      <h1>Registration of Services</h1>
      <form>
          <div className="col-6">
              <div>
                  <label className="form-label">Name of the client: </label>
                  <input name="recipient" type="text" className="form-control"/>
              </div>
              <div>
                  <label className="form-label">Starting date: </label>
                  <input name="startingDate" type="date" className="form-control"/>
              </div>
              <div>
                  <label className="form-label">Ending date: </label>
                  <input name="endingDate" type="date" className="form-control"/>
              </div>
              <div>
                  <label className="form-label">Description: </label>
                  <input name="description" type="text" className="form-control"/>
              </div>
              <div>
                  <label className="form-label">Price paid: </label>
                  <input name="pricePaid" type="number" className="form-control"/>
              </div>
              <div>
                  <label className="form-label">Payment Date: </label>
                  <input name="paymentDate" type="date" className="form-control"/>
              </div>
          </div>
      </form>
    </div>
  )
}

export default App
