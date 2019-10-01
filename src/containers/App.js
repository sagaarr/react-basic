import React, {Component} from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
class App extends Component  {
    constructor() {
        super()
        this.state = {
            robots:[],
            searchfield:''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(responce => {
            console.log(responce)
            return responce.json()
        }).then(user => {
            this.setState({ robots: user })
        })
    }

    onSearchChange = (event) =>{
        this.setState({ searchfield: event.target.value })
    }

    
    render() {
        const {searchfield, robots} = this.state 
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !this.state.robots.length? 
                <h1>Loading</h1> :
                 (
            <div className="tc">
                <h1>Robots</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
}


export default App;

