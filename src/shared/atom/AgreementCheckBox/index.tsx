import Checkbox from '@atom/Checkbox';
import Error from '@atom/Error';
import { Flex } from '@atom/Flex';
import { Label } from '@atom/FormLable';
import { Input } from '@atom/Input';
import { H5Typography } from '@constant/typography/Typography';
import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CONTAINER_HEGHT, loadPDF, renderPDFPage, ZOOM_ACTIONS } from './helper';
import { PDFFrame, ZoomIn, ZoomOut } from './style';

function AgreementCheckBox(props: any) {
  const {
    src,
    onAgreementRead,
    agreementText,
    agreementError,
    agreementInputBoxId,
    agreementCheckboxId,
    agreementChecked,
    setAgreementChecked,
    agreementUserName,
    agreementuserError,
    setAgreementName,
    agreementCheckedDate,
    setAgreementCheckedDate
  } = props;
  const [containerId, setContainerId] = useState<any>(null);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [overflow, setOverflow] = useState<any>();
  const [convasContaners, setCanvasContainers] = useState([]);
  const [pages, setPages] = useState([]);
  const [currentScale, setCurrentScale] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [maxWidth, setMaxWidth] = useState('100%');

  const [agreementFullName, setAgreementFullName] = useState(agreementUserName);

  const user = useSelector((state: any) => state.user);

  useEffect(() => {
    const id = Math.random();
    setContainerId(id);
    setTimeout(async () => {
      if (src) {
        const { pages, contaners, allPages } = (await loadPDF(src, id)) as any;
        setCanvasContainers(contaners);
        setPages(allPages);
        if (pages === 1) {
          const firstCanvas = document.getElementById('canvas_1');
          //@ts-ignore
          if (firstCanvas?.height < CONTAINER_HEGHT) {
            setIsScrolledDown(true);
            // setOverflow("hidden");
          }
        }
        setIsLoading(false);
      }
    }, 300);
  }, [src]);

  useEffect(() => {
    if (!!agreementCheckedDate) {
      setIsLoading(true);
      setIsScrolledDown(true);
      setOverflow('hidden');
      setAgreementChecked && setAgreementChecked(true);
      setAgreementCheckedDate && setAgreementCheckedDate(true);
      setAgreementName && setAgreementName(user.firstName + ' ' + user.lastName);
      setAgreementFullName(user.firstName + ' ' + user.lastName);
      setIsLoading(false);
    }
  }, []);

  const onZoomInZoomOut = (type: string) => {
    const canvasContainer = document.getElementById(containerId);
    while (canvasContainer?.childNodes.length) {
      canvasContainer?.removeChild(canvasContainer?.childNodes[0]);
    }
    const newScale = eval(`${currentScale} ${type === ZOOM_ACTIONS.ZOOM_IN ? '+' : '-'} ${0.1}`);
    pages.forEach((i: any, index: number) => {
      renderPDFPage(i, index + 1, canvasContainer, type, newScale);
    });
    setTimeout(() => {
      if (canvasContainer) {
        canvasContainer.style.alignItems = 'center';
      }
    }, 100);
    setCurrentScale(newScale);
  };

  return (
    <Flex direction="column" style={{ position: 'relative', width: maxWidth }}>
      {isLoading && (
        <Flex style={{ width: '100%', height: 400 }} direction={'column'} justifyContent={'center'}>
          <Spin />
        </Flex>
      )}
      {!!containerId && (
        <>
          {!isLoading && (
            <Flex direction="row-reverse" style={{ padding: 10, position: 'absolute', right: 0 }}>
              <ZoomOut onClick={() => onZoomInZoomOut(ZOOM_ACTIONS.ZOOM_out)} />
              <ZoomIn
                style={{ cursor: currentScale >= 1.8 ? 'not-allowed' : 'pointer' }}
                onClick={() => currentScale <= 1.8 && onZoomInZoomOut(ZOOM_ACTIONS.ZOOM_IN)}
              />
            </Flex>
          )}
          <PDFFrame
            onScroll={(e) => {
              const myDiv = document.getElementById(containerId);
              if (myDiv && Math.round(myDiv.offsetHeight + myDiv.scrollTop) >= myDiv.scrollHeight) {
                setIsScrolledDown(true);
              }
            }}
            id={containerId}
            style={{
              overflowY: 'scroll',
              maxWidth: maxWidth,
              border: isLoading ? 0 : '1px solid #9792e3'
            }}
          />
        </>
      )}
      {!isLoading && (
        <>
          <H5Typography style={{ marginTop: 10 }}>
            You must read the entire agreement above before you can agree to the terms.
          </H5Typography>

          <>
            <Flex direction="column" top={10}>
              <Label text={'Enter your full name'} isMandatory={true} />
              <Input
                placeholder="Ex.: John Doe"
                id={agreementInputBoxId}
                name={agreementInputBoxId}
                value={agreementFullName}
                onChange={(e: any) => {
                  const { value } = e.target;
                  setAgreementName(value);
                  setAgreementFullName(value);
                }}
                error={agreementuserError}
              />
            </Flex>
            <Flex direction="column" top={10}>
              <Checkbox
                id={agreementCheckboxId}
                name={agreementText}
                disabled={!isScrolledDown}
                checked={agreementChecked || !!agreementCheckedDate}
                onChange={(e: any) => {
                  onAgreementRead && onAgreementRead(e.target.checked);
                  setAgreementCheckedDate &&
                    setAgreementCheckedDate(e.target.checked ? true : false);
                }}
              />
              {agreementError && <Error error={agreementError} />}
            </Flex>
          </>
        </>
      )}
    </Flex>
  );
}

export default AgreementCheckBox;
