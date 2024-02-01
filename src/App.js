import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/matchers";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Ноутбук HP Pavilion 15-eg2020ua',
          img: 'HP_Pavilion.jpg',
          category: 'Laptops',
          price: '37299'
        },
        {
          id: 2,
          title: 'Смартфон Samsung Galaxy A24',
          img: 'Samsung_A24.jpg',
          category: 'Phones',
          price: '8999'
        },
        {
          id: 3,
          title: 'Смартфон Apple iPhone 13',
          img: 'iPhone13.jpg',
          category: 'Phones',
          price: '32599'
        },
        {
          id: 4,
          title: 'Телевізор TCL QLED 43C725',
          img: 'TCL.jpg',
          category: 'TV',
          price: '16999'
        },
        {
          id: 5,
          title: 'Маршрутизатор TP-LINK ARCHER C64',
          img: 'TP_Link.jpg',
          category: 'Electronics',
          price: '1399'
        },
        {
          id: 6,
          title: 'Навушники TECNO Buds 1',
          img: 'Tecno.jpg',
          category: 'Accessories',
          price: '599'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory} />
        <Items  onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'All') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
