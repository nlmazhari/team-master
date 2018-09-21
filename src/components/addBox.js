import React, { Component } from 'react'
import addImg from '../assets/img/add.png'
import { Button, Image } from 'react-bootstrap'

class AddBox extends Component {

    render() {
        return (
            <div className="box__add">
                <Button className="add-btn"
                    onClick={() => document.getElementById("select-wrap").style.display='block'}
                >
                    <Image src={addImg} className='icon-sm' />
                </Button>
                <p className="green-title">
                    <span className="capital">add</span> team member<br />to this test
                </p>
            </div>
        )
    }
}

export default AddBox