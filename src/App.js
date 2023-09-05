import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
class App extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            orders:[],
            items:[
                {
                    id:1,
                    title:'стул серый',
                    img:'chairGrey.jpg',
                    desc:'Lorem',
                    category:'chairs',
                    price:'49.99'
                },
                {
                    id:2,
                    title:'стул белый',
                    img:'chairGrey.jpg',
                    desc:'ййй',
                    category:'chairs',
                    price:'55.99'
                },
                {
                    id:3,
                    title:'стул белый',
                    img:'chairGrey.jpg',
                    desc:'ййй',
                    category:'chairs',
                    price:'55.99'
                },
                {
                    id:4,
                    title:'стул белый',
                    img:'chairGrey.jpg',
                    desc:'ййй',
                    category:'chairs',
                    price:'55.99'
                },
                {
                    id:5,
                    title:'стул белый',
                    img:'chairGrey.jpg',
                    desc:'ййй',
                    category:'chairs',
                    price:'55.99'
                },
                {
                    id:6,
                    title:'стул белый',
                    img:'chairGrey.jpg',
                    desc:'ййй',
                    category:'chairs',
                    price:'55.99'
                },

            ],

        }
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
    }
    render() {
        return (
            <div className="wrapper">
                <Header onDelete={this.deleteOrder} orders={this.state.orders}/>
                <Items items={this.state.items} onAdd={this.addToOrder}/>
                <Footer/>
            </div>
        );
    }
    deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el=>el.id !== id)})
    }
    addToOrder(item){
        let isInArray = false
        this.state.orders.forEach(el =>{
            if(el.id === item.id)
                isInArray = true
        })
        if(!isInArray)
        this.setState({orders:[...this.state.orders, item]})

    }
}

export default App;
