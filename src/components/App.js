import React from 'react'
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'

class App extends React.Component{

    state = { language: 'dutch'}

    onLanguageChange = language => {
        this.setState({ language })
    }

    render(){
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')}/>
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
                </div>
                {/* ここでLanguageContextとthis.stateをバインドする this.stateの値が優先 */}
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default App
