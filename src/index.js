import React from 'react'
import ReactDOM from 'react-dom'
// import SeasonDisplay from './SeasonDisplay'

class App extends React.Component{

    constructor(props){
        super(props)

        this.state = { lat: null, errorMessage:'' }

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
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading!</div>

    }
}


ReactDOM.render(<App />, document.querySelector('#root'))
