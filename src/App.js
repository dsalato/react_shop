import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
class App extends React.Component{
    constructor(props) {
        super(props)
        this.state={
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

            ]
        }
    }
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Items items={this.state.items}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
