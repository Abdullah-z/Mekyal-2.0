import * as React from 'react';
import PDFReader from 'rn-pdf-reader-js';

const PDFview2 = (props) => {
  const pdfurl = props.url;

  return (
    <PDFReader
      source={{
        uri: 'https://www.entnet.org/wp-content/uploads/2021/04/Instructions-for-Adding-Your-Logo-2.pdf',
      }}
    />
  );
};

export default PDFview2;
