import React, {Component} from 'react';
import {AiOutlineDelete} from "react-icons/ai";
export class Order extends Component{
    render(){
        return (
            <div className='item'>
                <img src={'./img/' + this.props.item.img}/>
                <h2>{this.props.item.title}</h2>
                <p>{this.props.item.price}$</p>
                <AiOutlineDelete onClick={() => this.props.onDelete(this.props.item.id)} className='delete-icon'/>
            </div>
        )
    }
}

export default Order;