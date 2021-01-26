import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'


class SongList extends React.Component{

    renderList() {
        return this.props.songs.map((song) => {
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={()=>this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

    render(){
        return <div className="ui divided list">{this.renderList()}</div>
    }
}


const mapStateToProps = (state) => {
    return { songs: state.songs}
}


// connectを使ってproviderで保持しているcombineReducersと紐付ける
// 第一引数にstate 第二引数にaction(メソッド)コールバック関数でレンダリングを実行
export default connect(mapStateToProps, {selectSong})(SongList)
