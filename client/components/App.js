import React from 'react';

import BookList from './BookList';
// const App = () => {
//     return (
//         <h2>Hello Component</h2>
//     );
// };

class App extends React.Component {
    render() {
        return (
            <BookList />
        );
    }
}

export default App;