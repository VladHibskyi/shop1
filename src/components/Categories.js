import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'All',
                    name: 'Все'
                },
                {
                    key: 'Laptops',
                    name: 'Ноутбуки'
                },
                {
                    key: 'Phones',
                    name: 'Смартфони'
                },
                {
                    key: 'TV',
                    name: 'Телевізори'
                },
                {
                    key: 'Electronics',
                    name: 'Електроніка'
                },
                {
                    key: 'Accessories',
                    name: 'Аксесуари'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
            {this.state.categories.map(el => (
                <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    )
  }
}

export default Categories