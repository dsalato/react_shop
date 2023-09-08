import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFull from "./components/ShowFull";
class App extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            orders:[],
            currentItems:[],
            showFull: false,
            fullItem:{},
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
                    title:'стол белый',
                    img:'table.jpg',
                    desc:'ййй',
                    category:'tables',
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
                    title:'стол белый',
                    img:'table.jpg',
                    desc:'ййй',
                    category:'tables',
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
        this.state.currentItems=this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
    }
    render() {
        return (
            <div className="wrapper">
                <Header onDelete={this.deleteOrder} orders={this.state.orders}/>
                <Categories chooseCategory={this.chooseCategory}/>
                <Items  onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>


                {this.state.showFull && <ShowFull onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}

                <Footer/>
            </div>
        );
    }
    onShowItem(item){
        this.setState({fullItem: item})
        this.setState({showFull:!this.state.showFull})
    }
    chooseCategory(category){
        if(category==='all'){
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState(
            {currentItems: this.state.items.filter(el=>el.category===category)}
        )
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
