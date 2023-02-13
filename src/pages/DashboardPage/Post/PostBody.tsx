import { POST_WIDTH } from "@constants/postConstants"
import SlidesPost from "./SlidesPost"
import { Post } from './types'

interface PostBodyPros {
  post: Post
}

const PostBody = ({post}: PostBodyPros ) => {
  return (
    <div style={{width : POST_WIDTH,}}>
      {post.type === 'image' && <img src={post.path} style={{width:'100%'}}/>}
      {post.type === 'gif' && <img src={post.path} style={{width:'100%'}}/>}
      {post.type === 'slides' && <SlidesPost post={post}/>}
    </div>
  )
}

export default PostBody