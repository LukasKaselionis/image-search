import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
    state = { query: ''}

    onInputChange = (event) => {
        this.setState({query: event.target.value})
    }

    onFormSubmit= (event) => {
        event.preventDefault()
        this.props.userSubmit(this.state.query)
    }

        render (){
            return (
            <div className="search-section">
                <label><h2>Image Search: </h2></label>
                 <form onSubmit={this.onFormSubmit} className="search_form">
                        <input
                            className="search_input"
                            type="search"
                            value={this.state.query}
                            placeholder="Enter images title"
                            onChange={this.onInputChange}
                        />
                        <div className="button">
                            <button className="search_button" onClick={this.onFormSubmit}>Search</button>
                            <button className="save_button">Save</button>
                        </div>
                    </form>
            </div>
            )
        }   
}

export default SearchBar;