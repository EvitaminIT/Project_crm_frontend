import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
// import * as pdfjs from 'pdfjs-dist'; 
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = ({ pdfUrl }) => {
  return (
    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
      <Viewer fileUrl={pdfUrl} />
    </Worker>
  );
};

export default PdfViewer;
