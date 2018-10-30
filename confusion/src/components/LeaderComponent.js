import React from 'react';
import { Media } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl'; 

function RenderLeader({leader}) {
    return (
        <Media>
            <img className="align-self-start mr-3" src={baseUrl + leader.image} alt={leader.name}></img>
            <Media body>
                <h4 className="mt-0">{leader.name}</h4>
                <p>{leader.designation}</p>
                <p>{leader.description}</p>
            </Media>
        </Media>
    );
}

export default RenderLeader;