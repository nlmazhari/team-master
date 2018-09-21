import React, { Component } from 'react'
import { Button, Image } from 'react-bootstrap'
import users from '../assets/img/users.png'

class BoxHeader extends Component {

    render() {
        return (
            <div className="box__title">
                <p>your team for this test</p>
                <div className="title-wrap">
                    <Button className="team-btn" href="#">team page</Button>
                    <Image src={users} className='text-icon' />
                </div>
            </div>
        )
    }
}

export default BoxHeader