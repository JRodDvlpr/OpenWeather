import React from "react";
import '../components/weather.css';
 
  const Form = props => {
    return (
      <div className="container">
        <form onSubmit={props.loadweather}>
          <div>{props.error ? error() : ""}</div>
          <div>
          <div className="row">
              <input
                type="text"
                className="form-control"
                placeholder="City"
                name="city"
                autoComplete="off"
              />
            
            <div className="container">
              <input
                type="text"
                className="form-control"
                placeholder="Country"
                name="country"
                autoComplete="off"
              />
            </div>
            </div>
            <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
              <button className="btn btn-warning">Get Weather</button>
            </div>
          </div>
        </form>
      </div>
    );
  };
 
  const error = props => {
    return (
      <div className="alert alert-danger mx-5" role="alert">
        Please Enter City and Country!
      </div>
    );
  };
 
  export default Form;