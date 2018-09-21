import React, { Component } from 'react'
import avatar from '../assets/img/avatar-default.png'
import cross from '../assets/img/cancel.png'
import { Button, Image } from 'react-bootstrap'

class MembersList extends Component {
    
    removeUser = item => {
        let members = JSON.parse(localStorage.getItem('members'))
        let newMembers = members.filter(teamMember => teamMember.id !== item.id)
        localStorage.setItem('members', JSON.stringify(newMembers))
        window.location.reload()
    }

    render() {
        let members = JSON.parse(localStorage.getItem('members'))
        return (
            <div className="membersList" id="membersList">
                {
                    members &&
                    members.map((item, i) =>
                        <div className="box__info" key={i}>
                            <Image src={avatar} className='avatar' />
                            <Button className="remove-btn" data-tip="Remove user" onClick={() => this.removeUser(item)}>
                                <Image src={cross} className='icon-sm' />
                            </Button>
                            <div>
                                <p>
                                    {item ? item.role : ''}
                                    {(item && item.role === 'External') ? <sup className="star">*</sup> : null}
                                </p>
                                <p className='member'>{item ? item.username : ''}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default MembersList