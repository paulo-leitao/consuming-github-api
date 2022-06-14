import React, { createContext, useCallback, useState } from 'react'
import api from '../services/api';

// Criando um objeto de contexto para compartilhar o dados de consumidos da Api
export const GithubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
  loading: false,
});

const GithubProvider = ({children}) => {
  const [ profileState, setProfileState ] = useState({
    loading: false,
    hasData: false,
    found: undefined,
    user:{
      login: undefined,
      id: undefined,
      avatar_url: undefined,
      html_url: undefined,
      followers_url: undefined,
      following_url: undefined,
      gists_url: undefined,
      starred_url: undefined,
      repos_url: undefined,
      name: undefined,
      bio: null,
      public_repos: 0,
      followers: 0,
      following: 0,
      created_at: undefined,
      updated_at: undefined
    },
    repositories: [],
    starred: []
  });

  // Chamada rest do tipo get para a nossa api, que será passado ao contexto, assim podemos compartilhar com qualquer componente da nossa aplicação.
  const getUser = ( username ) => {

    setProfileState( ( prevState ) => ({
      ...prevState,
      loading: true,
      found: undefined
    }));

    const userNotFound = () => {
      setProfileState( (prevState) => ({
        ...prevState,
        found: false
      }));
    }

    setTimeout(() => {
      api.get(`${username}`).then( ({ data }) => {
        setProfileState((prevState) => ({
          ...prevState,
          hasData: true,
          found: true,
          user: {
            login: data.login,
            id: data.id,
            avatar_url: data.avatar_url,
            html_url: data.html_url,
            followers_url: data.followers_url,
            following_url: data.following_url,
            gists_url: data.gists_url,
            starred_url: data.starred_url,
            repos_url: data.repos_url,
            name: data.name,
            bio: data.bio,
            public_repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            created_at: data.created_at,
            updated_at: data.updated_at
          }
        }));
      }).finally(() => {
        setProfileState( ( prevState ) => ({
          ...prevState,
          loading: false,
        }));
      }).catch((e) =>{
        if (e.response.data.message === "Not Found")
        {
          console.log("User not found!");
          userNotFound();
        }
      })
    }, 1000);
    
  };

  const getUserRepositories = ( username ) => {
    api.get(`${username}/repos`).then( ( {data} ) => {
      setProfileState( ( prevState ) => ({
        ...prevState,
        repositories: data
      }));
    })
  };

  const getUserStarred = ( username ) => {
    api.get(`${username}/starred`).then( ( {data} ) => {
      setProfileState( ( prevState ) => ({
        ...prevState,
        starred: data
      }));
    })
  };

  const contextValue = {
    profileState,
    getUser: useCallback(( username ) => getUser( username ), []),
    getUserRepositories: useCallback(( username ) => getUserRepositories( username ), []),
    getUserStarred: useCallback(( username ) => getUserStarred( username ), [])
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
}

export default GithubProvider;