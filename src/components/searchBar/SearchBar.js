import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
    state = { val: ''}

    onInputChange = (event) => {
        this.setState({val: event.target.value})
    }

    onFormSubmit= (event) => {
        event.preventDefault()
        this.props.userSubmit(this.state.val)
        console.log(this.state.val)
    }

        render (){
            return (
            <div className="input-search">
                 <form onSubmit={this.onFormSubmit}>
                        <label><h2>Image Search: </h2></label>
                        <input
                            className="input"
                            type="search"
                            value={this.state.val}
                            onChange={this.onInputChange}
                        />
                        <button className="search-button" onClick={this.onFormSubmit}>Search</button>
                    </form>
            </div>
            )
        }   
}

export default SearchBar;