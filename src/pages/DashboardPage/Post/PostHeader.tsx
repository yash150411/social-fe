import { Flex } from "@atom/Flex"
import { Image } from "antd"

interface PostHeaderProps {
  username: string,
  profilePic: string
}

const PostHeader = ({username, profilePic}: PostHeaderProps) => {
  return (
    <Flex direction="row" alignItems={'center'}>
      <div>
        <img src={profilePic} height={'60px'} style={{borderRadius: '50%'}}/>
      </div>
      <div>
        <b style={{margin: 0, fontSize:'14px'}}>{username}</b>
      </div>
    </Flex>
  )
}

export default PostHeader