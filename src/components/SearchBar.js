import React from 'react'

class SearchBar extends React.Component{

    state = { term:'' }

    //onFormSubmit(event){} has not this.state.term
    // avoid the issue right this
    // onFormSubmit = (event) => {}
    // or calling onSubmit = {(event)=>this.onFormSubmit(event)}
    onFormSubmit = event => {
        event.preventDefault()

        // calling method that the parent defined
        this.props.onSubmit(this.state.term)
    }


    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
