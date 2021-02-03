import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Field extends React.Component{
    // LanguageContextをセットする
    static contextType = LanguageContext
    
    render() {
        //セットしたcontextの値を取得する
        const text = this.context === 'english' ? 'Name' : 'Naam'

        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        )
    }
}

export default Field
