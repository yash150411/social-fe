import React, { useState, useEffect } from 'react';
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService';
import { Input } from '@atom/Input';
import Vector from '@assets/icons/vector.svg';
import { Ul, Li, Dropdown, DropdownInput, Img } from './style';
export interface GoogleAutoCompleteProps {
  apiKey?: string;
  placeholder?: string;
  defaultVal?: string;
  id?: string;
  name?: string;
  value?: string;
  onPlaceSelect: (place: any) => void;
  error?: any;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
}

export const GoogleAutoComplete: React.FC<GoogleAutoCompleteProps> = (props) => {
  const { placeholder, defaultVal, onPlaceSelect, id, name, error, value, onChange, onBlur } =
    props;

  const [val, setVal] = useState<string>('');
  const [showSuggestion, setsuggestion] = useState(false);

  useEffect(() => {
    if (value) setVal(value);
  }, [value]);

  const { placePredictions, getPlacePredictions } = usePlacesService({
    apiKey: process.env.REACT_APP_GOOGLEAPI_KEY
  });

  const placeSelectHandler = (place: any) => {
    setVal(place.description);
    onPlaceSelect(place);
    setsuggestion(false);
    onChange && onChange(place.description);
  };

  return (
    <Dropdown>
      <DropdownInput>
        <Input
          placeholder={placeholder}
          name={name || ''}
          value={val}
          id={id}
          onBlur={(e: any) => {
            const checkAutofillPlace = placePredictions?.find(
              (place: any) => place?.description === val
            );
            if (checkAutofillPlace) {
              placeSelectHandler(checkAutofillPlace);
              setsuggestion(false);
            }
            onBlur && onBlur(e);
          }}
          onChange={(evt: any) => {
            if (evt.target.value.length === 0 || evt.target.value === undefined) {
              setVal(evt.target.value);
              setsuggestion(false);
              onPlaceSelect({});
            } else {
              getPlacePredictions({
                input: evt.target.value,
                componentRestrictions: { country: 'ca' }
              });
              setVal(evt.target.value);
              setsuggestion(true);
            }
            onChange && onChange(evt.target?.value);
          }}
          error={error}
        />
      </DropdownInput>
      {showSuggestion && (
        <Ul>
          {placePredictions.map((place) => {
            return (
              <Li
                id={place}
                key={place.place_id}
                onClick={(e: any) => {
                  placeSelectHandler(place);
                }}
              >
                <Img src={Vector} alt="" />
                {place.description}
              </Li>
            );
          })}
        </Ul>
      )}
    </Dropdown>
  );
};

// {
//     placePredictions.map((place: any) => {
//         return (
//             <>
//                 <Option
//                     id={place}
//                     onClick={(e: any) => {
//                         setVal(place.description)
//                         onPlaceSelect(place);
//                         setsuggestion(false);
//                     }}
//                     value={place.description}
//                 >{place.description}
//                 </Option>
//             </>
//         );
//     })
// }
