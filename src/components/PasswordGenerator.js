import React, {Component} from "react";


export default class PasswordGenerator extends Component{

    constructor(props){
        super(props);
       this.state = {
            password: [],
        };

        this.generar = this.generar.bind(this);
    }


    //  return a random number lower of 99
    randomNumbers(){
        let number = 0;
        number = (Math.round(Math.random()*9));

        return number;
    }

    // return a letter between a ~ z
    randomLetters(){

        let letters = ["a","b","c","d","e","f","g","h","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"];

        let letter = letters[(Math.round(Math.random()*(letters.length-1)))]
        console.log(letter);

        return letter;

    }


    generar(){
        let array = [];
        let number = this.randomNumbers();
        let letter = this.randomLetters();

        for(let i = 0; i<=7; i++){

            // array.push(number);
            // array.push(letter);
            array[i] = number;
            i++;
            array[i] = letter;
            number = this.randomNumbers();
            letter = this.randomLetters();
            
            console.log(array.length);
        }
            
       
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