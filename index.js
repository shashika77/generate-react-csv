// CsvDownload.js

function generateCSV(dataArray, fileName) {
    function convertDataToCSV(data) {
      const headerRow = Object.keys(data[0]).join(',');
      const csvRows = data.map((row) => Object.values(row).join(','));
      return [headerRow, ...csvRows].join('\n');
    }
  
    function downloadCSVFile(data) {
      const csvContent = convertDataToCSV(data);
      const csvBlob = new Blob([csvContent], { type: 'text/csv' });
      const csvUrl = URL.createObjectURL(csvBlob);
  
      const downloadLink = document.createElement('a');
      downloadLink.href = csvUrl;
      downloadLink.download = `${fileName}.csv`;
      downloadLink.click();
  
      URL.revokeObjectURL(csvUrl);
    }
  
    downloadCSVFile(dataArray);
  }
  


module.exports = generateCSV;