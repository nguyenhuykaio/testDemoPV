import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      value: '',
      valueSearch: '',
      resultSearch: '',
      data: [],
      valueQ2: '',
      resultQ2: [],
    }
  }

  componentWillMount = async () => {
    await this.sumArray();
    await this.codingQuestion1();
  }

  sumArray = () => {
    let arrayInter = [1, 2, 3, 4, 5];
    let totalArray = 0;
    for (let i = 0; i < arrayInter.length; i++) {
      totalArray = totalArray + arrayInter[i];
    }
    this.setState({
      total: totalArray
    })
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleChangeSearch(event) {
    this.setState({ valueSearch: event.target.value });
  }

  handleChangeSearch(event) {
    this.setState({ valueQ2: event.target.value });
  }

  fibo(num) {
    let res;
    if (num == 1 || num == 2) {
      return res = 1;
    }
    res = this.fibo(num - 1) + this.fibo(num - 2);
    return res;
  }

  handleSubmit() {
    if (this.state.value < 0) {
      alert('Error : value > 0 : ' + this.state.value)
    } else {
      const num = this.state.value;
      if (num === "") {
        alert("Not blank")
      } else {
        if (num == 0) {
          alert("False")
        }
        else {
          alert(this.fibo(num));
        }
      }
    }
  }

  codingQuestion1 = async () => {
    const options = {
      'method': 'GET',
      'Content-Type': 'application/json'
    }
    let res = await fetch('https://xbot.com.vn/standards.json', options)
    if (res) {
      let data = await res.json();
      this.setState({
        data: data
      })


    }
  }


  handleSubmitSearch = async (key) => {
    let { data } = await this.state
    let list_find = [];
    data.map(item => {
      list_find = list_find.concat(item.criteria);
    });

    let result = list_find.find(x => x.name.toString().includes(key));
    this.setState({
      resultSearch: result

    })
  }

  handleSubmitQ2 = async (key) => {

    let { data } = await this.state;
    let list_criteria = [];
    data.map(item => {
      list_criteria = list_criteria.concat(item.criteria);
    });
    let list_indices = [];
    list_criteria.map(item => {
      list_indices = list_indices.concat(item.indices);
    })
    if (key == 1 || key == 2 || key == 3) {
      let arr = list_indices.filter(x => x.level === Number(key));
      this.setState({
        resultQ2: arr
      })
    } else {
      alert("Input false!")
    }
  }

  render() {
    return (
      <div style={{ marginLeft: 15 }}>
        <p>Write a program to calculate the sum of array of integers</p>
        <p>Input: arrayInter = [1, 2, 3, 4, 5]</p>
        <p>{this.state.total}</p>

        <p>Write a program to calculate the Nth number of the Fibonacci series.</p>

        <p>  Input:    </p>
        <input type="number"
          placeholder="please number"
          value={this.state.value}
          onChange={this.handleChange.bind(this)} />

        <button onClick={this.handleSubmit.bind(this)}> Submit </button>

        <p>  Coding question 1:    </p>

        <input
          type="text"
          placeholder="please !"
          value={this.state.valueSearch}
          onChange={this.handleChangeSearch.bind(this)} />

        <button onClick={() => this.handleSubmitSearch(this.state.valueSearch)}> Submit </button>

        <p>Result  Coding question 1:  {this.state.resultSearch.name}  </p>


        <p>  Coding question 2:    </p>
        <p>Level input 1,2,3</p>
        <input
          type="number"
          placeholder="please !"
          value={this.state.valueQ2}
          onChange={this.handleChangeSearch.bind(this)} />

        <button onClick={() => this.handleSubmitQ2(this.state.valueQ2)}> Submit </button>

        <p>Result  Coding question 2:   </p>
        <div>
          {this.state.resultQ2.map((item, index) => {
            return (
              <p key={index.toString()}>
              Name:  {item.name} -  Level: {item.level}
              </p>
            )
          })}
        </div>

      </div>
    );
  }
}

export default App;
