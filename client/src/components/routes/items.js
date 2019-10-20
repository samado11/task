

import React, { Component } from 'react';

import { ApiService } from '../services/data.service';
import { connect } from 'react-redux';
import Title from '../text/Title';
import Navbar from '../layout/Navbar';
import { toast } from 'react-toastify';


const mapStateToProps = state => ({ id: state.id })



class Items extends Component {
    constructor(props) {
        super(props)
        this.state = { items: [] }
    }
    componentDidMount() {
        this.fetchItems()
    }
    fetchItems() {
        return ApiService.getItems().then(x => {

            this.setState({ items: x })
        })
    }

    addToCart(id) {
      console.log(id);
      toast.success("Added to cart successfully")
        return ApiService.addToCart(window.localStorage.getItem('id'),id)
    }
    render() {
        return (
            <div>
                <Navbar />


                <div>
       <ul>
         {this.state.items.map(item => (
           <div>
           <div class="card">
  <img src={ require(`../img/${item['image']}`) } style={{width:'200px'},{height:'200px'}} />
  <h1>{item['name']}</h1>
  <p>{item['description']}</p>
    <p><button onClick={(e) => {this.addToCart(item['_id'])}}  >Add to Cart</button></p>
</div>


           </div>
         ))}
       </ul>
     </div>

            </div>

        );
    }
}



export default Items
