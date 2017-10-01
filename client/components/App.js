import React from 'react';
import axios from 'axios';
import BookList from './BookList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
    };
  }
  componentDidMount() {
    axios.get('http://localhost:6789/api/books')
      .then((res) => {
        this.setState({
          books: res.data,
        });
      });
  }
  render() {
    return (
      <BookList books={this.state.books} />
    );
  }
}

export default App;
