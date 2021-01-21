import React from 'react'
import ReactDOM from 'react-dom'
// import SeasonDisplay from './SeasonDisplay'

class App extends React.Component{

    constructor(props){
        super(props)

        this.state = { lat: null }

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setState
                this.setState({ lat: position.coords.latitude})
                // DO NOT right this
                // this.state.lat = lat: position.coords.latitude 
            } ,
            (err) => console.log(err)
        )
    }

    // Classed Component have to extend React.Component
    // and override render methods
    render(){
        return <div>Latitude: {this.state.lat}</div>
    }
}


ReactDOM.render(<App />, document.querySelector('#root'))
