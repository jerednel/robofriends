import React, {useState, useEffect} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

const App = () => {
    const onSearchChange = (event) => {
        setsearchfield(event.target.value);
        //this.setState({searchfield: event.target.value})
    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users => setRobots(users))

    })

    const [robots, setRobots] = useState([])
    const [searchfield, setsearchfield] = useState("")

    const filteredRobots = robots.filter(robot => {
                    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
                })
    if(!robots.length){
                    return <h1>Loading</h1>
                }else{
                    return (
        
                        <div className='tc'>
                        <h1 className='f2'>RoboFriends!</h1>
                        <SearchBox searchChange={onSearchChange} />
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