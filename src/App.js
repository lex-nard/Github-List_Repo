import React from "react";
import "./App.css";

import { getRepos } from "./services/api";

import Header from "./Components/Header";
import UserInfo from "./Components/UserInfo";

function App() {
  const [username, setUsername] = React.useState("");
  const [query, setQuery] = React.useState(false);
  const [repos, setRepos] = React.useState([]);
  const [error, setError] = React.useState("");
  const [notFound, setNotFound] = React.useState(false);
  const [isEmpty, setIsEmpty] = React.useState(false);


  const handleChange = function(event) {
    const newUsername = event.target.value;
    setNotFound(false);
    const userRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

    if (!newUsername.match(userRegex)) {
      setError("O username é inválido");
    } else {
      setError("");
    }

    setUsername(newUsername);
  };

  const handleKeyPress = function(event) {
    if ((event.key === "Enter") && (!error) && (username)) {
      getRepos(username)
        .then(json => {
          if(json.message){
            setNotFound(true)
            setRepos([])
          }
          else{
            setRepos(json)
            setNotFound(false)
            let empty = json.length? false : true
            setIsEmpty(empty);
          }
        })
        .catch(e => {
          setNotFound(true);
          console.log("Erro", e);
        });
      setUsername("");
      setQuery(true)
    }
  };

  return (
    <div className="App">
      <Header
        handleChange={handleChange}
        value={username}
        error={error}
        onKeyPress={handleKeyPress}
      />
      {query? (notFound? (<h2 data-test="nao-encontrado">
          404 <br /> Não encontrado
        </h2>) : (isEmpty? (
        <h2 data-test="sem-repositorios">Sem repositórios</h2>
      ) : <UserInfo user={username} repos={repos} />) ): <div></div>}
    </div>
  );
}

export default App;
