import React, { useState } from 'react';
import Posts from './components/Posts';
import Postform from './components/Postform';
import { ISubmitPostData } from './util/postInterfaces';

const App: React.FC = () => {

  const [postToBeRerouted, setPostToBeRerouted] = useState<ISubmitPostData | undefined>();

  const reroutePost = (post: any) => {
    setPostToBeRerouted(post)
  }

  const resetPost = () => {
    setPostToBeRerouted(undefined);
  }

  return (
    <div className="App">
      <Postform submitPost={reroutePost} />
      <hr />
      <Posts postToBeSubmitted={postToBeRerouted} resetPostUpstream={resetPost} />
    </div>
  );
}

export default App;
