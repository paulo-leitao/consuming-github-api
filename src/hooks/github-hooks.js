import { useContext } from 'react'
import { GithubContext } from '../providers/github-provider'

const useGithub = () => {
  const { profileState, getUser, getUserRepositories, getUserStarred } = useContext( GithubContext );
  
  return { profileState, getUser, getUserRepositories, getUserStarred };
};

export default useGithub;