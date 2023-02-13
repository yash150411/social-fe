import React, { FC, ReactNode } from 'react';

type CopyToClipboard = {
  text: any;
  onCopy: any;
  children: ReactNode;
};

const CopyToClipboard: FC<CopyToClipboard> = ({ text, onCopy, children }): JSX.Element => {
  async function copyTextToClipboard(text: any) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    }
    return document.execCommand('copy', true, text);
  }

  const handleCopyClick = () => {
    copyTextToClipboard(text)
      .then(() => {
        onCopy();
      })
      .catch((err) => {
      });
  };

  return (
    <div style={{ cursor: 'pointer' }} onClick={handleCopyClick}>
      {children}
    </div>
  );
};

export default CopyToClipboard;
