import React, { useEffect, useState, } from 'react'
import { Formik, useFormik } from 'formik';
import { addEditPostValidationSchema, getInitValues, getPost, POST_FORM_STATUS } from './helper';
import { showErrorToast, showToast, updateRawData } from '@utils/index';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import PageLayout from '@layout/PageLayout';
import { Flex } from '@atom/Flex';
import { H1Typography } from '@constant/typography/Typography';
import { PageTitle } from '@molecules/PageTitle';
import ScrollToFieldError from '@utils/formikFocus';
import { Button } from '@atom/Buttons';
import { ButtonWrapper } from './style';
import { Spin } from 'antd';
import AddEditPostForm from './AddEditPostForm';

function AddEditPostPage() {
  
  const { tab, id } = useParams();
  
  const navigate = useNavigate();
  
  const [initialValues, setInitialValues] = useState<any>({});
  const [isPostLoading, setIsPostLoading] = useState(true);
  const [postData, setPostData] = useState<any>({});
  const { post } = useSelector((state: any) => state.rawData);
  
  const onSubmit = async (values: any) => {
    
    console.log('values on on submit', values)
    // actions.setSubmitting(true);
    // try {
    //   const res: any = await addEditProduct(
    //     ingredients,
    //     {
    //       ...values,
    //       status:
    //         productData?.status == PRODUCT_STATUS.ACTIVE ||
    //         productData?.status == PRODUCT_STATUS.INACTIVE
    //           ? productData?.status
    //           : PRODUCT_STATUS.ACTIVE
    //     },
    //     id
    //   );
    //   if (res?.success) {
    //     actions.resetForm();
    //     navigate(`/menu/tab/${tab || MENU_MANAGEMENT_TABS.ACTIVE}`);
    //     showToast({
    //       message: 'Success!',
    //       description: 'Product Added.'
    //     });
    //   } else {
    //     showErrorToast({
    //       message: 'Failed!',
    //       description: 'Something went wrong'
    //     });
    //   }
    // } catch (error) {
    //   showErrorToast({
    //     message: 'Failed!',
    //     description: 'Something went wrong'
    //   });
    // }
    // actions.setSubmitting(false);
  };
  
  
  const postFormik: any = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: addEditPostValidationSchema,
    onSubmit
  });
  
  const {values, errors, handleSubmit, isSubmitting} = postFormik
  
  useEffect(() => {
    updateInitialValues();
  }, []);
  
  useEffect(() => {
    return () => {
      updateRawData({ ingredientsFormState: POST_FORM_STATUS.UNCHANGED });
    };
  }, []);
  
  const updateInitialValues = async () => {
    setIsPostLoading(true);
    let res = {} as any;
    if (id) {
      try {
        res = await getPost(id);
        if (res?.success) {
          setPostData(res?.data);
        }
      } catch (error) {
        showErrorToast({
          message: 'Failed!',
          description: 'Filed to fetch Product details'
        });
      }
    }
    const initVal = getInitValues(id && res?.success ? res?.data : null);
    setInitialValues(initVal);
    setIsPostLoading(false);
  };
  
  
 
  return (
    <PageLayout>
    {isPostLoading ? (
      <Spin />
    ) : (
      <>
        <Flex direction="column" style={{ width: '100%' }}>
          <PageTitle
            text="Post"
            bordered={true}
            isBack={true}
            path={`/`}
          />
            <>
              <ButtonWrapper>
                <Flex justifyContent={'space-between'}>
                  <H1Typography>{`${id ? 'Edit' : 'Add'} Post`}</H1Typography>
                  <div className="hide-mobile-device">
                    <Flex className="footerButton fix-mobile">
                      <Button
                        variant="secondary"
                        text="Cancel"
                        onClick={() => navigate(id ? `/create` : '/')}
                      />
                      <Button
                        variant="primary"
                        size="large"
                        text="Post"
                        onClick={() => !errors.post && handleSubmit(values)}
                        isLoading={isSubmitting}
                        isDisable={isSubmitting}
                      />
                    </Flex>
                  </div>
                </Flex>
              </ButtonWrapper>
              <Flex direction="column" top={30}>
                <AddEditPostForm postFormik={postFormik}/>
              </Flex>
            </>
        </Flex>
      </>
    )}
  </PageLayout>

  )
}

export default AddEditPostPage
