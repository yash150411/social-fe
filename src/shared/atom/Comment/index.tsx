import React from 'react';
import { Container } from './style';

interface Reviewer {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  profile_photo: string;
  username: string;
}

export interface EmptyDivPros {
  name?: string;
  image?: any;
  redirects?: any;
  description?: string;
  style?: React.CSSProperties;
  reviewer?: Reviewer;
}

export const CommentBox = (props: EmptyDivPros): JSX.Element => {
  const { name, style, image, description, reviewer } = props;
  const { first_name, last_name, profile_photo } = reviewer || {};

  return (
    <Container style={style}>
      <div className="image">
        <img src={profile_photo || image} alt="" />
      </div>
      <div className="content">
        <h5>
          {name ? (
            name
          ) : (
            <>
              {first_name} {last_name}
            </>
          )}
        </h5>
        <p>{description}</p>
      </div>
    </Container>
  );
};
export default CommentBox;
