import React from "react";

class SearchBar extends React.Component {

    state = { term : ''};

    onFormSubmit = event => {
        //Evita que de refresh na pagina ao submeter um formulario.
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

   render() {
        return (
            <div className="ui segmento">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Imagem Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={e => this.setState({ term : e.target.value.toUpperCase() })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;