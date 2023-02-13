import { Flex } from "@atom/Flex"
import { POST_WIDTH } from "@constants/postConstants"
import PostBody from "./PostBody"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"
import { Post as PostType } from './types'

interface PostPros {
  post: PostType
}
const Post = ({post}: PostPros) => {  
  return (
    <>
      <Flex direction="column" style={{width: POST_WIDTH}}>
        <PostHeader username={post.creator.username} profilePic={post.creator.profilePic}/>
        <PostBody post={post}/>
        <PostFooter post={post}/>  
      </Flex>
    </>
  )
}

export default Post