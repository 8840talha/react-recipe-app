import React from 'react';
import './Recepes.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Recepes = (props) => {


    return (
        <div className="container" >
            <div className="row">
                {props.recepes.map((recepe, index) => {
                    return (
                        <div key={index} className="col-md-4">
                            <div className="recepeBox">
                                <img src={recepe.recipe.image} alt="imagechicken" />

                                <h5 className="recepeBoxText recepeTitle">{recepe.recipe.label.length < 20 ? `${recepe.recipe.label}` :
                                    `${recepe.recipe.label.substring(0, 25)}...`}
                                </h5>
                                <p className="recepeBoxText">Publisher:<span>{recepe.recipe.source}</span> </p>
                                <button className="recepeButton">
                                    <Link to={{
                                        pathname: `/recipe/:${recepe.recipe.shareAs}`,
                                        state: { recipe: recepe.recipe.label }
                                    }}>View Recipe</Link>
                                </button>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )


}

export default Recepes;