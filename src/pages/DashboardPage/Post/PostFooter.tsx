import { Flex } from "@atom/Flex"
import Icon, { LikeOutlined, DislikeOutlined, ShareAltOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Post } from "./types";
import { useEffect, useState } from "react";
import ModalComponent from '@organism/Modal/Modal';
import { H1Typography, H4Typography } from "@constant/typography/Typography";
import { Divider } from "antd";

interface PostBodyPros {
  post: Post
}

const PostFooter = ({post}: PostBodyPros) => {
  
  const [caption, setCaption] = useState<string | undefined>('')
  const [isShareModalVisible, setIsShareModalVisible] = useState(false)
  
  const [like, setLiked] = useState(false)
  
  const addNameToCaption = () => {
    const nameString: string = `<b>${post.creator.username} </b>`
    setCaption(nameString + post.caption)
  }
  
  useEffect(() => {
    addNameToCaption()
  },[])
  
  let fxProps = {
    count: 3,
    interval: 200,
    colors: ['#cc3333', '#4CAF50', '#81C784'],
    calc: (props:any, i:any) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
      y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
    })
  }
  
  return (
    <Flex direction={'column'} style={{paddingTop: '14px'}}>
      {post && post?.id && <Flex>
        {!like
        ? <HeartOutlined style={{fontSize: '25px', paddingRight: '10px'}} onClick={() => setLiked(true)}/>
        : <HeartFilled style={{fontSize: '25px', paddingRight: '10px', color: 'rgb(237, 73, 86)'}} onClick={() => setLiked(false)}/>
        }
        <ShareAltOutlined style={{fontSize: '25px', paddingRight: '10px'}} onClick={() => setIsShareModalVisible(true)}/>
      </Flex>}
      <Flex alignItems={'baseline'}>
        <p style={{whiteSpace: 'pre-wrap', fontSize: '14px', color: 'black', paddingTop:'16px', fontWeight: 400, letterSpacing: '0.3px'}} dangerouslySetInnerHTML={{ __html: caption as string }} />
      </Flex>
      {
        <ModalComponent
        visible={isShareModalVisible}
        onCancel={() => setIsShareModalVisible(false)}
        modalWidth="798px !important"
        align="left !important"
      >
        <h4>Share</h4>
        <Divider style={{ marginTop: '0px', borderColor: '#c4c4c4' }} />
      </ModalComponent>
      }
    </Flex>
  )
}

export default PostFooter