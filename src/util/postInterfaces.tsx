interface IPostData {
  userId: number,
  id: number,
  title: string,
  body: string
}

interface ISubmitPostData {
  title: string,
  body: string
}

interface NewSubmitProps {
  submitPost: (post: ISubmitPostData) => void;
}

interface IReceiveAndSendPosts {
  postToBeSubmitted: ISubmitPostData | undefined;
  resetPostUpstream: () => void;
}

export type { IPostData, ISubmitPostData, NewSubmitProps, IReceiveAndSendPosts };