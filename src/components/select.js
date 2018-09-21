import React, { Component } from 'react'
import Select from 'react-select'
import initialState from '../assets/initialState.json'
import { Image } from 'react-bootstrap'

const options = initialState.allTeamMembers.map(i => { return { label: i.username, value: i.username, pic: i.picture, key: i.id } })
const noResultsText = ['Team member not found.', <br />, <span className='text'>Maybe she/he is not yet in your </span>, <span className='underlined'>team?</span> ]

class SelectBox extends Component {

    state = {
        selectedOption: null
    }
    
    handleChange = selectedOption => {
        this.setState({ selectedOption })
        this.addMember(selectedOption)
        document.getElementById("select-wrap").style.display = 'none'
    }

    addMember = selectedOption => {
        let members = JSON.parse(localStorage.getItem('members'))
        // if there is no members yet create an emtry array
        if (members === null) { members = [] }
        //if you clear the option, selectedOption will be null
        if (selectedOption !== null) {
            var addedMember = initialState.allTeamMembers.find(teamMember => teamMember.username === selectedOption.label)
        }
        // if member is not already in the list
        if (selectedOption !== null && !members.find(teamMember => teamMember.username === selectedOption.label)) {
            let key = Object.keys(members).length
            members[key] = addedMember
        }
        localStorage.setItem('members', JSON.stringify(members))
        window.location.reload()
    }

    // to have images as an extra option
    optionRenderer = option => {
        //the url where the images are uploaded
        let url = `http://karajamlaak.ir/images/${option.pic}`
        return (
            <div>
                <Image className='avatar-sm' src={url} />
                {option.label}
            </div>
        )
    }
    
    //hide select box when clicked outside
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef = node => {
        this.wrapperRef = node
    }

    handleClickOutside = event => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            document.getElementById("select-wrap").style.display = 'none'            
        }
    }

    render() {
        const { selectedOption } = this.state
        return (
            <div className="select-wrap" id="select-wrap" ref={this.setWrapperRef}>
                <Select
                    className="select"
                    id="select"
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    clearable
                    noResultsText= {noResultsText}
                    optionRenderer= {this.optionRenderer}
                />
            </div>
        )
    }
}

export default SelectBox