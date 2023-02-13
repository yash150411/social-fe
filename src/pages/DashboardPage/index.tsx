import { Flex } from '@atom/Flex';
import { POST_DIVIDER_WIDTH } from '@constants/postConstants';
import PageLayout from '@layout/PageLayout';
import React from 'react';
import Post from './Post';
import { Post as PostType, User } from './Post/types';

function DashboardPage() {

  const user1: User = {
    id: Math.random().toString(),  
    name: 'Yash',
    username: '__Yash__',
    profilePic: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651__340.png',
    bio: 'Sid-Ki reach Delhi! The freshly minted hubs and wifey are now in Siddie’s hometown for a reception❤️❤️',
  }
  
  const user2: User = {
    id: Math.random().toString(),  
    name: 'Yash Dave',
    username: '_D_Yash_Dave',
    profilePic: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651__340.png',
    bio: 'lorem Hello hiii this is yash here and wifey are now in Siddie’s hometown for a reception❤️❤️',
  }
  
  const user3: User = {
    id: Math.random().toString(),  
    name: 'Yash Dave',
    username: 'Yash_dave_04__',
    profilePic: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651__340.png',
    bio: 'lorem Hello hiii this is yash here and wifey are now in Siddie’s hometown for a reception❤️❤️',
  }
  
  const posts:PostType[] = [
    {
      id: Math.random().toString(),
      type: 'image',
      path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png',
      caption: 'lorem Hello hiii this is yash here and wifey are now in Siddie’s hometown for a reception❤️❤️',
      creator: user1
    },
    {
      id: Math.random().toString(),
      type: 'gif',
      path: 'https://www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif',
      caption: `${'Mujhe India ki police pe bharosa hai!'}`,
      creator: user2
    },
    {
      id: Math.random().toString(),
      type: 'slides',
      slideData: [
        {
          id: Math.random().toString(),
          type: 'image',
          path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
        },
        {
          id: Math.random().toString(),
          type: 'gif',
          path: 'https://www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif'
        },
        {
          id: Math.random().toString(),
          type: 'image',
          path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png'
        },
        {
          id: Math.random().toString(),
          type: 'gif',
          path: 'https://www.galvanizeaction.org/wp-content/uploads/2022/06/Wow-gif.gif'
        },
      ],
      caption: `${`Must follow 👉 @privatelabelmasters and DM him “READY” If you’re serious about changing your life by learning a high-income skill.
      -
      
      
      
      
      
      <a href="https://google.com">Follow 👉🏻 @privatelabelmasters</a>
      Follow 👉🏻 @privatelabelmasters
      Follow 👉🏻 @privatelabelmasters
      Follow 👉🏻 @privatelabelmasters
      
      -
      -
      
      PS. - Follow @privatelabelmasters now, thank yourself later!`}`,
      creator: user3
    }
  ]
  
  return (
    <PageLayout title={'Dashboard'}>
      <Flex direction='column' alignItems={'center'}>
        {posts.map((post: PostType) => {
          return (
            <React.Fragment key={post.id}>
              <Post post={post} key={post.id}/>
              <hr style={{width: POST_DIVIDER_WIDTH}}/>
            </React.Fragment>
          )
        })}  
      </Flex>
    </PageLayout>
  );
}

export default DashboardPage;
