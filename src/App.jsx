import React, { useEffect } from 'react'
import { Blank, Layout, Profile, Repositories, ProgressBar } from './components'
import useGithub from './hooks/github-hooks';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { profileState } = useGithub();

  useEffect(() => {
     const Toast = () => {
       toast.error('User Not Found!');
     }
    if ( profileState.found === false ) return Toast();
  }, [profileState.found]);

  return (
    <Layout>
      {profileState.loading ? (
        <ProgressBar color={"#58a6ff"} width={"100vw"} />
      ) : (
        <></>
      )}
      <ToastContainer theme='dark'/>
      {profileState.hasData ? (
        <>
          <Profile />
          <Repositories />
        </>
      ) : (
        <Blank />
      )}
    </Layout>
  );
};

export default App;
