import React, { useEffect, useImperativeHandle, useState, forwardRef } from 'react';
import { Button } from '@atom/Buttons';
import Checkbox from '@atom/Checkbox';
import { Flex } from '@atom/Flex';
import { Label } from '@atom/FormLable';
import ImagePreviewer from '@atom/ImagePreviewer';
import { Input } from '@atom/Input';
import { FILE_TYPES } from '@constants/userConstants';
import { FileDraggerComponent } from '@molecules/FileDraggerComponent';
import { showErrorToast } from '@utils/index';
import { Row, Col } from 'antd';
import { uploadFileHandler } from './helper';
import { IngredientsWrapper } from './style';
import TextArea from 'antd/lib/input/TextArea';
import Post from '@pages/DashboardPage/Post';
import { Post as PostType, User } from '@pages/DashboardPage/Post/types';


function AddEditPostForm(props: any) {
  const { postFormik } = props;
  const { values, handleBlur, setFieldValue, setValues, handleChange, setErrors, touched, errors, touchedValue } =
  postFormik;
    
    const [imageLoading, setImageLoading] = useState(false);
    const [caption, setCaption] = useState('')
    
    // Need to get the user
    
    const user3: User = {
      id: Math.random().toString(),  
      name: 'Yash Dave',
      username: 'Yash_dave_04__',
      profilePic: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651__340.png',
      bio: 'lorem Hello hiii this is yash here and wifey are now in Siddie’s hometown for a reception❤️❤️',
    }
    
    const onImageRemove = (image:string) => {
      const removedImagesArray = values.images.filter((x:string) => x !== image)
      setFieldValue && setFieldValue('images', removedImagesArray);
      setFieldValue && setFieldValue('imageName', '');
    };
  
    const handleFileUpload = async (file: File) => {
      setImageLoading(true);
      const result: any = await uploadFileHandler(file, FILE_TYPES.PROFILE_PIC);
      setImageLoading(false);
      if (result.error) {
        return showErrorToast({
          message: `Unable to Post`,
          description: result.error || 'Please try again'
        });
      }
      const tempImages = [...values.images, result.data?.Location]
      setFieldValue && setFieldValue('images', tempImages);
      setFieldValue && setFieldValue('imageName', file?.name);
    };
    
    const handleChangeCaption = (event:any) => {
      const inputString = event.target.value
      const arrayOfString: string[]= inputString.split(' ')
      let temphashtagsStringArray: string[] = []
      arrayOfString.forEach(x => {
        if(x.length > 1 && x.startsWith('#')){
          // its a hashTag
          const y = `<a href="http://google.com">${x}</a>`
          temphashtagsStringArray = [...temphashtagsStringArray, y]
        }else {
          temphashtagsStringArray = [...temphashtagsStringArray, x]
        }
      })
      const newAtagCaption = temphashtagsStringArray.join(' ')
      setCaption(newAtagCaption)
      setFieldValue && setFieldValue('caption', inputString);
    }
    
  return (
    
    <IngredientsWrapper>
        <Row style={{ width: '100%' }}>
          <Col md={24} xs={24}>
            <Row>
              <Col md={24} xs={24}>
                  <>
                    <Flex style={{ width: '100%', padding: '12px' }} direction="column">
    
                      <Flex>
                        <Row gutter={[16, 16]} style={{ width: '100%' }}>
                          <Col md={24} xs={24}>
                            <Row style={{ width: '100%' }}>
                              {values?.images?.length > 0 && <>
                                  {values.images.map((img:any) => {
                                    return (
                                      <Col key={img}>
                                        <ImagePreviewer
                                          image={img || ''}
                                          closable
                                          onClose={onImageRemove}
                                        />
                                      </Col>
                                    )
                                  })}
                                </>
                              }
                              <FileDraggerComponent
                                  loading={imageLoading}
                                  onChangeHandle={handleFileUpload}
                                  format="pdf"
                                  accept="image/png, image/jpeg, image/gif"
                                />
                            </Row>
                          </Col>
                        </Row>
                      </Flex>
                      
                      <Flex>
                        <Row gutter={[16, 16]} style={{ width: '100%' }}>
                          
                          <Col md={18} xs={24}>
                            <Label text="Caption" />
                            <TextArea
                              // type="text"
                              name="caption"
                              id="caption"
                              placeholder="Enter Caption"
                              value={values?.caption}
                              onChange={handleChangeCaption}
                              onBlur={handleBlur}
                              rows={4}
                            />
                          </Col>

                        </Row>
                      </Flex>
                      
                    </Flex>
                  </>
              </Col>
            </Row>
          </Col>
        </Row>
      </IngredientsWrapper>
  )
}

export default AddEditPostForm