import React from 'react'
import { Media } from 'reactstrap'

function RenderLeader(props) {
    return (
        <Media>
            <img className="align-self-start mr-3" src={props.leader.image} alt={props.leader.name}></img>
            <Media body>
                <h4 className="mt-0">{props.leader.name}</h4>
                <p>{props.leader.designation}</p>
                <p>{props.leader.description}</p>
            </Media>
        </Media>
    );
}

export default RenderLeader;