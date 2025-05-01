import React from 'react';

function ProfileCard(props) {
    return (
        <div className="card">
            <img src={ props.image}  className="mx-auto" />
            <h2>{props.name}</h2>
            <p>{props.post}</p>
            <p>{props.email}</p>
            <p>{props.location}</p>
        </div>
    );
}

export default ProfileCard;


