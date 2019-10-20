

import React, { Component } from 'react';

import { ApiService } from '../services/data.service';
import { connect } from 'react-redux';
import Title from '../text/Title';
import Navbar from '../layout/Navbar';
import { toast } from 'react-toastify';


const mapStateToProps = state => ({ id: state.id })

var id=0;

class Orders extends Component {
    constructor(props) {
        super(props)
        this.state = { order: [] }
    }
    componentDidMount() {
        this.fetchItems()
    }
    fetchItems() {
        return ApiService.getItemsuser(window.localStorage.getItem('id')).then(x => {
            this.setState({ order: x })
        })
    }

    makeOrder(id) {
      console.log(id);
        return ApiService.makeOrder(id)
    }

    render() {
        return (
            <div>
                <Navbar />


                <div>
       <ul>
         {this.state.order.map(order => (
           <div>
          <div style={{display:'none'}}>
           {id=order['user_id']}
          </div>
           <div className="cardorder">
           <div className='row'>
           <div className='col-4'>
  <img src={ require(`../img/${order['orderdetails'][0]['image']}`) } style={{width:'20%'},{height:'200px'}} />
  </div>
  <div className='col-8'>
  <h1>{order['orderdetails'][0]['name']}</h1>
  <p>{order['orderdetails'][0]['description']}</p>
  </div>
  </div>
</div>


           </div>
         ))}
         <p style={{textAlign:'center'}}><a className="btn btn-primary" href='/contactinfo'  >Prossed to Order</a></p>
       </ul>
     </div>

            </div>

        );
    }
}



export default Orders
