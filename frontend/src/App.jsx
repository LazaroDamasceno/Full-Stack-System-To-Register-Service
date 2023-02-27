function App() {
  return (
    <div className="container">
      <h1>Registration of Services</h1>
      <form>
          <div className="col-6">
              <div>
                  <label className="form-label">Name of the client: </label>
                  <input type="text" className="form-control"/>
              </div>
              <div>
                  <label className="form-label">Starting date: </label>
                  <input type="date" className="form-control"/>
              </div>
              <div>
                  <label className="form-label">Ending date: </label>
                  <input type="date" className="form-control"/>
              </div>
          </div>
      </form>
    </div>
  )
}

export default App
