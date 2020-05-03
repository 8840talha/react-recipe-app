import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form'
import Recepes from './components/Recepes/Recepes';
const APPID = '9e55eae0';
const appKey = '047b0aa931edc7afc42551f1949e304c'
class App extends Component {
  state = {
    recepes: []
  }

  recepeHandler = async (e) => {
    e.preventDefault();
    const recepeName = e.target.elements.recepeName.value
    const api_call = await fetch(`https://api.edamam.com/search?q=${recepeName}&app_id=${APPID}&app_key=${appKey}&from=0&to=10`)
    const data = await api_call.json();

    this.setState({ recepes: data.hits })
  }

  componentDidMount() {
    const storedItems = JSON.parse(localStorage.getItem('recipes'));
    this.setState({ recepes: storedItems })
  }
  componentDidUpdate = () => {
    const storeItems = JSON.stringify(this.state.recepes);
    localStorage.setItem("recipes", storeItems)
  }
  render() {


    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecepe={this.recepeHandler} />
        <Recepes recepes={this.state.recepes} />
      </div>
    );
  }
}

export default App;