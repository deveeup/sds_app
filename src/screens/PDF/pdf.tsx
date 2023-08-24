import React from 'react';
import PDFReader from 'rn-pdf-reader-js';

export default function PDFDetails({ route }: any) {
    const { url } = route.params;

    return (
        <PDFReader
            source={{
                uri: url
            }}
        />
    )
}