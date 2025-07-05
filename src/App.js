import React from 'react'
import Header from './components/Header'

import Generator from './components/Generator'






class App extends React.Component {
    

    constructor (props) { 
        super(props)
        this.state={ 
            count : 0 ,
        }

        this.onClickPlus = this.onClickPlus.bind(this)
    }
    
    render() {
        
        
        
        return(
        <>


    
    <div className='main-app'>
        <Header title ='Счётчик:'/>

        <h1>{this.state.count}</h1>
            <>
                <button onClick={this.onClickMinus}>Минус -</button>
                <button onClick={this.onClickPlus}>Плюс +</button>
            </>
    </div>


    <Generator/>
        </>)

}

    
    onClickPlus=()=> { 
        this.setState({count:this.state.count + 1} )    
        }
    
    onClickMinus=()=> {
        this.setState({count:this.state.count-1})
    }
    

}





export default App 