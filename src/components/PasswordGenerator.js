import React, {Component} from "react";


export default class PasswordGenerator extends Component{

    constructor(props){
        super(props);
       this.state = {
            password: [],
        };

        this.generar = this.generar.bind(this);
    }

    generar(){
        let array = [];
        let number = 0;
        // rendondemos numeros menores a 99
        number = (Math.round(Math.random()*99));
        let letters = ["a","b","c","d","e","f","g","h","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];

        let letter = letters[(Math.round(Math.random()*(letters.length-1)))]
        console.log(letter);

        array.push(number);
        array.push(letter);
        console.log(array);

        this.setState({
            password: array,
        })
    }

    render(){
        return(
            <>
            <div>
                <h1>Generar Contraseña</h1>
                <div>
                    <p>{this.state.password}</p>
                    <button onClick={this.generar}>Generar</button>
                </div>
            </div>
            </>
        )
        
    }
}