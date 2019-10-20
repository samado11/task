import React, { Component } from 'react';

import { DefaultInput } from '../ui-inputs/DefaultInput';
import Navbar from '../layout/Navbar';
import { ApiService } from '../services/data.service';
import { toast } from 'react-toastify';

class Contactinfo extends Component {
  constructor(props) {
   super(props);
   this.state = { phone: '' };
   this.state = { address: '' };
   this.state = { date: '' };
 }
 PhoneHandler = (event) => {
    this.setState({phone: event.target.value});
  }
  AddressHandler = (event) => {
    this.setState({address: event.target.value});
  }
  DateHandler = (event) => {
    this.setState({date: event.target.value});
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    toast.success("Order received successfully")
    return ApiService.makeOrder(this.state.phone,this.state.address,this.state.date,window.localStorage.getItem('id'))

  }
  render() {
      return (
        <div>
          <Navbar />
        <h2>Contact info</h2>
        <form onSubmit={this.mySubmitHandler}>
            <DefaultInput label="phone">
                <input type="text" name="phone" className="form-control" onChange={this.PhoneHandler} />
            </DefaultInput>
            <DefaultInput label="address">
                <input type="text" name="address" className="form-control" onChange={this.AddressHandler} />
            </DefaultInput>
            <DefaultInput label="date">
                <input type="date" name="date" className="form-control" onChange={this.DateHandler} />
            </DefaultInput>
    <button className="mt-4 btn btn-primary" type="submit" >  Make Order  </button>


        </form>

        </div>
      );

}
}

export default Contactinfo
