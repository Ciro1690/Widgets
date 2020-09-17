import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date()
        }
        this.tick = this.tick.bind(this)
    }

    componentDidMount() {
        this.intervalId = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }


    tick() {
        this.setState({time: new Date()})
    }

    render() {
        let hours = this.state.time.getHours()
        let minutes = this.state.time.getMinutes()
        let seconds = this.state.time.getSeconds()
        
        
        return(
            <div>
                <h1>Clock</h1>
                <div className="date">
                    <p>Time: {hours}:{minutes}:{seconds}</p>
                    <p>Date: {this.state.time.toDateString()}</p>
                </div>
            </div>
        )
    }
}

export default Clock