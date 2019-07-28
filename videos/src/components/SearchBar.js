import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};

    onInputChange = event =>{
        this.setState({ term: event.target.value});
    };
    
    onFormSubmit = event =>{
        event.preventDefault(); //Gak muter load ee

        this.props.onFormSubmit(this.state.term); //terhubung dengan App.js

        //TODO : Make sure we call
        // callback from parent component
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className ="ui form">
                    <div className="field">
                        <label>Videos Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;