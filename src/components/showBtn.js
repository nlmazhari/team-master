import React, { Component } from 'react'
import { Button, Image } from 'react-bootstrap'
import arrow from '../assets/img/down-arrow.png'

let toggle = false

class ShowBtn extends Component {
    state = { 
        btnText: 'all'
    }
    
    toggleShow = () => {
        let members = JSON.parse(localStorage.getItem('members'))
        if (Object.keys(members).length > 5) {
            toggle = !toggle
        }
        if (toggle) {
            document.getElementById("membersList").classList.add('showAll')
            this.setState({ btnText: 'less' })
        }
        else {
            document.getElementById("membersList").classList.remove('showAll')
            this.setState({ btnText: 'all' })
        }
    }

    render () {
        const { btnText } = this.state
        return (
            <Button 
                className="show-btn" 
                id="show-btn" 
                onClick={() => this.toggleShow()}
            >
                show {btnText}
                <Image src={arrow} className="text-icon" />
            </Button>
        )
    }
}

export default ShowBtn