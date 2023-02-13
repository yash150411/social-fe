

export interface User { 
  id: string,
  name: string,
  username: string,
  profilePic: string
  bio: string
  following?: User[]
  followers?: User[]
}

export type SlideDataTypeEnum = 'image' | 'gif'

export interface SlideData {
  id: string, // To be thinks why to give id
  type: SlideDataTypeEnum // img or gif as its single data
  path: string
}

export interface HastagType {
  id: string // This will be mongoose id 
  hashtagId: string// This is will unique for every has tags
  text: string // example #Love
}

export type PostTypes = 'image' | 'gif' | 'slides'

export interface Post {
  id?: string,
  type: PostTypes
  path?: string
  slideData?: SlideData[]
  caption?: string
  hashTag?: HastagType[]
  creator: User,
  likes?: User[]
  dislikes?: User[]
}

