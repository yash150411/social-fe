import 'react-phone-input-2/lib/style.css';

import React, { FC, useEffect, useState } from 'react';

import Error from '@atom/Error';
import { Flex } from '@atom/Flex';
import { Input } from '@atom/Input';
import PhoneInput from 'react-phone-input-2';

interface ContactDetailsType {
  code: string;
  phone: string;
  ext: string;
}

interface InputPhoneProps {
  id: string;
  name: string;
  value?: ContactDetailsType;
  error?: string;
  phonePlaceHolder?: string;
  extPlaceHolder?: string;
  onBlur?: (a: any) => void;
  onChange?: (a: ContactDetailsType) => void;
}

const initialContactDetails = {
  code: '',
  phone: '',
  ext: ''
};

const InputPhone: FC<InputPhoneProps> = ({
  id,
  name,
  value,
  error,
  phonePlaceHolder,
  extPlaceHolder = 'Extension',
  onBlur,
  onChange
}) => {
  const [contactDetails, setContactDetails] = useState<ContactDetailsType>(initialContactDetails);
  useEffect(() => {
    if (value) {
      setContactDetails(value);
    }
    return () => {
      setContactDetails(initialContactDetails);
    };
  }, [value]);

  // useEffect(() => {
  //   onChange && onChange(contactDetails);
  // }, [contactDetails]);

  const onExtensionChange = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    if (value?.length > 5) return;
    const newContactDetails = { ...contactDetails, ext: value };
    setContactDetails(newContactDetails);
    onChange && onChange(newContactDetails);
  };

  const onPhoneChange = (value: string, dialCode: string) => {
    const dialCodeLength = dialCode?.length ?? 0;
    const phone = value.substring(dialCodeLength);
    const newContactDetails = { ...contactDetails, code: dialCode, phone };
    setContactDetails(newContactDetails);
    onChange && onChange(newContactDetails);
  };

  return (
    <div style={{ marginBottom: '24px' }}>
      <Flex>
        <div style={{ flex: '1 1 70%', display: 'flex' }}>
          <PhoneInput
            inputProps={{
              id: `${id}`,
              name: `${name}`
            }}
            value={`${contactDetails?.code} ${contactDetails?.phone}`}
            onChange={(phone, data: { dialCode: string }) => {
              onPhoneChange(phone, data.dialCode);
            }}
            countryCodeEditable={false}
            onBlur={onBlur}
            inputStyle={{
              height: '100%',
              borderBottomRightRadius: '0px',
              borderTopRightRadius: '0px',
              width: '100%'
            }}
            placeholder={phonePlaceHolder}
            country={'ca'}
            preferredCountries={['ca']}
            priority={{ ca: 0, us: 1, kz: 0, ru: 1 }}
          />
        </div>
        <div style={{ flex: '1 1 30%' }}>
          <Input
            type="number"
            className="bottom-0"
            id={`${id}-ext`}
            name={`${name}-ext`}
            value={contactDetails.ext}
            placeholder={extPlaceHolder}
            onChange={onExtensionChange}
            style={{
              borderBottomLeftRadius: '0px',
              borderTopLeftRadius: '0px',
              borderWidth: '1px 1px 1px 0'
            }}
            onBlur={onBlur}
            // error={touched.phone && errors.phone}
          />
        </div>
      </Flex>
      {!!error && (
        <span className="errormsg" style={{ display: 'flex' }}>
          <Flex flex={1}>{error ? <Error error={error} /> : ''}</Flex>
        </span>
      )}
    </div>
  );
};

export default InputPhone;
