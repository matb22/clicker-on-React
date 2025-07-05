import React from "react";


class Generator extends React.Component { 
    constructor(props){
        super(props)
        this.state={ 
            number:0  ,
        }
        this.NewNumber = this.NewNumber.bind(this)
    }
    
    render() { 
        return ( 
            <div className="main-app">
                <h2>Случайное число:</h2>
                
                <input placeholder="maximum number:" id="max"></input>
                <h1>{this.state.number}</h1>
                <button onClick={this.NewNumber}>Generate!</button>
            </div>
        )
    }


    


    NewNumber=()=> { 

        const maximum = document.getElementById('max')

        
        if (!(maximum === undefined)) {
        this.setState({ 
            number:parseInt(Math.random()*(maximum.value))
        })}
        
        else{
            this.setState({
                number:'Введите значение'
            })
        }

    }

}



export default Generator