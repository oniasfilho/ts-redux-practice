import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IPostData, ISubmitPostData, IReceiveAndSendPosts } from '../util/postInterfaces'
import { BaseUrls } from '../util/auxEnums'

const { JSON_PLACEHOLDER } = BaseUrls;

const Posts: React.FC<IReceiveAndSendPosts> = (props) => {

  const [posts, setPosts] = useState<IPostData[] | []>([]);

  const retrievePostsRequest = async () => {
    try {
      const resp = await axios.get(`${JSON_PLACEHOLDER}/posts`);
      setPosts(resp.data)
    } catch (error) {
      console.log(error)
    }
  }

  const sendPostRequest = async (post: ISubmitPostData) => {
    try {
      const resp = await axios.post(`${JSON_PLACEHOLDER}/posts`, post)
      console.log(resp)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    retrievePostsRequest()

    if (props.postToBeSubmitted !== undefined) {
      console.log("valor do post ", props.postToBeSubmitted)
      sendPostRequest(props.postToBeSubmitted);
      props.resetPostUpstream();
    }



  }, [props.postToBeSubmitted])

  const submitPostHandler = (post: ISubmitPostData) => {

  }

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts