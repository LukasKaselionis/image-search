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
            <div className="search-section">
                <label><h2>Image Search: </h2></label>
                 <form onSubmit={this.onFormSubmit} className="search_form">
                        <input
                            className="search_input"
                            type="search"
                            value={this.state.val}
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