import React from 'react'
import ReactDOM from 'react-dom'
// import SeasonDisplay from './SeasonDisplay'

class App extends React.Component{

    state = { lat: null, errorMessage:'' }

    constructor(){
        console.log('start constructor')
        super()
    }


    componentDidMount(){
        console.log('start ComponentDidMount')

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setState
                this.setState({ lat: position.coords.latitude})
                // DO NOT right this
                // this.state.lat = lat: position.coords.latitude 
            } ,
            err => {
                this.setState({errorMessage: err.message})
            }
        )
    }


    // Classed Component have to extend React.Component
    // and override render methods
    render(){
        console.log('start Render');

        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>

    }

    // Life Circle Methods
    componentDidUpdate(){console.log('start ComponentDidUpdate')}
    componentWillUnmount(){console.log('start ComponentWillUnmount')}
        
    
}


ReactDOM.render(<App />, document.querySelector('#root'))
