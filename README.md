# @layankumarasinghe/generate-react-csv

`@layankumarasinghe/generate-react-csv` is a simple utility for generating and downloading CSV (Comma-Separated Values) files in a React.js environment.

## Installation

```bash
npm install @layankumarasinghe/generate-react-csv

```


## Usage

```js

import React from 'react';
import generateCSV from '@layankumarasinghe/generate-react-csv';

const YourComponent = () => {
  // Example data
  const data = [
    { Name: 'John Doe', Age: 30, City: 'New York' },
    { Name: 'Jane Doe', Age: 25, City: 'San Francisco' },
    // Add more objects as needed
  ];

  // Handle CSV download
  const handleDownload = () => {
    generateCSV(data, 'exampleData');
  };

  return (
    <div>
      {/* Your React component content */}
      <button onClick={handleDownload}>Download CSV</button>
    </div>
  );
};

export default YourComponent;

```


## API

```
generateCSV(dataArray, fileName)

dataArray: An array of objects representing the data to be included in the CSV file.

fileName: A string representing the desired name for the generated CSV file.

```

