import React from 'react';
import { CCarousel, CCarouselItem, CImage} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { Post } from '../types';
import { POST_HEIGHT } from '@constants/postConstants';


interface SlidesPostPros {
  post: Post
}

const SlidesPost = ({post}:SlidesPostPros) => {
  return (
    <div>
      <CCarousel controls indicators interval={false}>
        {post && post?.slideData &&  post?.slideData?.length > 0 && post.slideData?.map((x:any) => {
          return (
            <CCarouselItem key={x.path}>
              <CImage className="d-block w-100" src={x.path} alt="slide 1" height={POST_HEIGHT}/>
            </CCarouselItem>    
          )
        })}
      </CCarousel>
    </div>
    
  );
};

export default SlidesPost;