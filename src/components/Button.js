import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component{
    // LanguageContextをセットする
    static contextType = LanguageContext

    render(){

        //セットしたcontextの値を取得する
        const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
        return (
            <button className="ui button primary">{text}</button>
        )
    }
}

export default Button
