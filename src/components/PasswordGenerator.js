import React, {Component} from "react";


export default class PasswordGenerator extends Component{

    constructor(props){
        super(props);
       this.state = {
            password: 0,
        };

        this.generar = this.generar.bind(this);
    }
  

    generar(){
        let number = 0;
        //rendondemos numeros menores a 99
        number = (Math.round(Math.random()*99));

        this.setState({
            password: number,
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