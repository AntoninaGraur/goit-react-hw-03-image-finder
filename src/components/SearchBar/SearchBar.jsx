import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';


import {Header, SearchBtn, SearchForm, SearchInput} from '../SearchBar/SearchBar.styled'

class Searchbar extends Component {
  state = { query: '' };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') return;
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Header className="Searchbar">
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit" >
            <FaSearch style={{ height: '20px', width: '30px' }} />
          </SearchBtn>

          <SearchInput
            
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;