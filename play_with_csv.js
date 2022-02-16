const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

/**
 *
 * @param {string} txt - The contents of the csv file
 * @param {string} txt - The delimiter used to parse csv file
 * @returns {Array<Object>}
 */

const parseCSV = (csv_data, delimiter) => {
  const [heading_row, ...data_rows] = csv_data.split("\n");
  const columns = heading_row.split(delimiter).map((heading, index, arr) => {
    if (index === arr.length - 1 && heading.includes("\r"))
      return heading.slice(0, -1);

    return heading;
  });

  const parsedCsv = data_rows.map((data_row) => {
    const value = {};
    data_row.split(delimiter).forEach((cell_value, index, arr) => {
      if (index === arr.length - 1 && cell_value.includes("\r"))
        value[columns[index]] = cell_value.slice(0, -1);
      value[columns[index]] = cell_value;
    });
    return value;
  });

  return parsedCsv;
};

/**
 *
 *@param {Array<Object>}
 * @returns {string} csv text
 * @param {string} txt - The delimiter used tcreate csv file
 * @returns {Array<Object>}
 */

const createCSV = (data, delimiter) => {
  const heading_row = Object.keys(data[0]).join(delimiter) + "\n";

  const data_rows = data
    .map((item) => Object.values(item).join(delimiter))
    .join("\n");

  return heading_row + data_rows;
};

(async () => {
  try {
    const original_csv = await readFile("sample.csv", "utf-8");
    const parsed_csv = parseCSV(original_csv, ",");
    const csv_data = createCSV(parsed_csv, ",");
    await writeFile("cloned_csv_sample.csv", csv_data);
  } catch (err) {
    console.log(err);
  }
})();
