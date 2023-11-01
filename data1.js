fetch("data1.csv")
  .then((response) => response.text())
  .then((text) => {
    const rows = text.split("\n");
    const headers = rows[0].split("\t");
    const data = [];

    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].split("\t");
      const portData = {};

      for (let j = 0; j < headers.length; j++) {
        portData[headers[j]] = cells[j];
      }

      data.push(portData);
    }

    populateTable(data);
  })
  .catch((error) => {
    console.error(error);
  });
