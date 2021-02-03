import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component{
    // LanguageContextをセットする
    // static contextType = LanguageContext

    render(){

        //セットしたcontextの値を取得する for context アプローチ
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen'

        return (
            <ColorContext.Consumer>
                {(color)=>
                    <button className={`ui button ${color}`}>
                        {/* Consumerアプローチ */}
                        <LanguageContext.Consumer>
                            {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
                        </LanguageContext.Consumer>
                    </button>
                }
            </ColorContext.Consumer>
        )
    }
}

export default Button
