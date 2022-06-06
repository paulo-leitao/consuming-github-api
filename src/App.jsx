import React from 'react'
import Blank from './components/blank';
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from './components/repositories';
import useGithub from './hooks/github-hooks';

const App = () => {
  const { profileState } = useGithub();

  return (
    <Layout>
      { profileState.hasData ?  
        (<>
          { profileState.loading ?
            (
              <p>Loading</p>
              ):(
                <>
                <Profile/>
                <Repositories/>
              </>
            )
          }
        </>):(
          <Blank/>
        )
      }
    </Layout>
  );
};

export default App;
