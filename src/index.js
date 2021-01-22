import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

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

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner message='Please accept location request' />
    }
    // Classed Component have to extend React.Component
    // and override render methods
    render(){
        console.log('start Render');
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )


    }

    // Life Circle Methods
    componentDidUpdate(){console.log('start ComponentDidUpdate')}
    componentWillUnmount(){console.log('start ComponentWillUnmount')}
        
    
}


ReactDOM.render(<App />, document.querySelector('#root'))
