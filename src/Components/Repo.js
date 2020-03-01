import React from "react"

import "./Repo.css"

function Repo(props){

    console.log(props.repo.owner.avatar_url)
    return(<div className="repo" data-test="repositorio">
        <h1 className="heading">{props.repo.name}</h1>
        <hr></hr>
        <img className="avatar" src={props.repo.owner.avatar_url} alt="Avatar"></img>
        <span>Stars: {props.repo.stargazers_count}</span>
        <br></br>
        <span className="date">{props.repo.created_at}</span>
    </div>);
}

export default Repo