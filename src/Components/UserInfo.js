import React from "react"

import Repo from "./Repo"

function UserInfo(props){
    console.log(props.repos)
    return(<div>
        {props.repos.map(repo => {
            return <Repo key={repo.id} repo={repo} />
        })}
    </div>);
}

export default UserInfo