import React, { Component } from 'react'
import BoxHeader from './boxHeader'
import AddBox from './addBox'
import SelectBox from './select'
import MembersList from './membersList'
import ShowBtn from './showBtn'

class Box extends Component {

    render() {
        return (
            <div className="box">
                <BoxHeader />
                <div className="box__wrapper">
                    <AddBox />
                    <SelectBox />
                    <MembersList />
                </div>
                <ShowBtn />
            </div>
        )
    }
}

export default Box