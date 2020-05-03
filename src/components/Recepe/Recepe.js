import React, { Component } from 'react';
import './Recepe.css';
import { Link } from 'react-router-dom';
const APPID = '9e55eae0';
const appKey = '047b0aa931edc7afc42551f1949e304c'


class Recepe extends Component {
    state = {
        title: '',
        img_url: '',
        publisher: '',
        ingredients: []
    }

    componentDidMount = async () => {

      
        const reqTitle = this.props.location.state.recipe;
        const req = await fetch(`https://api.edamam.com/search?q=${reqTitle}&app_id=${APPID}&app_key=${appKey}&from=0&to=1`)
        const res = await req.json();
        this.setState({
            title: res.hits[0].recipe.label,
            img_url: res.hits[0].recipe.image,
            publisher: res.hits[0].recipe.source,
            ingredients: res.hits[0].recipe.ingredients
        })

    }

    render() {

        const ingredientOutput = this.state.ingredients.map((item, index) => {
            return (
                <div key={index}>
                    <li>{item.text},{item.weight}</li>

                </div>
            )

        })

        return (


            <div className="col-md-4  margin">
                <div className="recepeBOX " >
                    <img src={this.state.img_url} alt="ImageFood" />
                    <h3 className="recepeBOXTEXTH1" >{this.state.title}</h3>
                    <h5 className="recepeBOXTEXT">Detailed Ingredients:</h5>
                    <hr></hr>
                    <div className="recepeBOXTEXT">
                        {ingredientOutput}
                    </div>
                    <hr></hr>

                    <p className="p recepeBOXTEXT">Publisher:<span>{this.state.publisher}</span> </p>
                    <button className="button recepeBOXTEXT"><Link to="/">Prev</Link></button>


                </div>

            </div>



        )
    }

}


export default Recepe;