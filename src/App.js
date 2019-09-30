import React from 'react';
import CardList from './CardList'
import {robots } from './robots';
import SearchBox from './SearchBox '
function App () {
    return (
        <div>
            <h1>Robots</h1>
            <SearchBox />
            <CardList robots={robots} />
        </div>
    )
}


export default App;