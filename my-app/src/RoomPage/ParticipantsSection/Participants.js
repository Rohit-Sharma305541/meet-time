import React from 'react'
import {connect} from 'react-redux'
// const dummyParticipants = [
//     {
//         identity : 'Rohit'
//     },
//     {
//         identity : 'Shubh'
//     },
//     {
//         identity : 'Kartik'
//     },
//     {
//         identity : 'Ankit'
//     },
// ]

const SingleParticipant = (props) => {
    const {identity,lastItem,participant} = props

    return (
      <>
        <p className="participants_paragraph">{identity}</p>
        {!lastItem && <span className="participants_separator_line"></span>}
      </>
    );
}

const Participants = ({participants}) => {
  return (
    <div className="participants_contianer">
        {participants.map((participant,index)=> {
            return (
                <SingleParticipant
                    key={participant.identity}
                    lastItem={participants.length === index+1}
                    participant={participant}
                    identity={participant.identity}
                />
            )
        })}
    </div>
  )
}

const mapStoreStateToProps = (state)=> {
    return {
        ...state
    }
} 



export default connect(mapStoreStateToProps)(Participants)