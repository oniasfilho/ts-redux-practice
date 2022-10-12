import React, { SyntheticEvent, useState } from 'react'
import { IPostData, ISubmitPostData, NewSubmitProps } from '../util/postInterfaces'

const Postform: React.FC<NewSubmitProps> = (props) => {

  const dataReset = {
    "title": "",
    "body": ""
  }

  const [post, setPost] = useState<ISubmitPostData>(dataReset);

  const handlePostChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;

    setPost(oldVal => {
      return {
        ...oldVal,
        [name]: value
      }
    })
  }

  const submitPostHandler = (e: React.FormEvent) => {
    e.preventDefault()
    props.submitPost(post);
    setPost(dataReset)
  }

  return (
    <div>
      <h1>Add Post</h1>
      <form>
        <div>
          <label>Title: </label> <br />
          <input type="text" name="title" value={post.title} onChange={handlePostChange} />
        </div>
        <br />
        <div>
          <label>Body: </label> <br />
          <textarea name="body" value={post.body} onChange={handlePostChange} />
        </div>
        <br />
        <button onClick={submitPostHandler}>Submit</button>
      </form>
    </div>
  )
}

export default Postform