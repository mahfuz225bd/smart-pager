# SmartPager

**SmartPager** is a JavaScript class designed to handle pagination of data. It offers functionality to manage paginated data efficiently, providing methods to retrieve data for specific pages, calculate the total number of pages, and more.

## Documentation

### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Constructor](#constructor)
  - [Properties](#properties)
  - [Methods](#methods)
- [Example](#example)
- [License](#license)

### Installation

You can import `SmartPager` into your JavaScript file using:

```javascript
import SmartPager from 'path/to/SmartPager';
```

### Usage

#### Constructor

```javascript
new SmartPager(data, perPage);
```

- **data** _(Array)_ - The data to be paginated (default: empty array).
- **perPage** _(Number)_ - The number of items per page (default: 10).

Example:

```javascript
const pager = new SmartPager(myDataArray, 20);
```

#### Properties

##### `data`
The data to be paginated. 

- **Type**: Array
- **Setter**: Updates the data array.
- **Getter**: Returns the data array.

Example:

```javascript
pager.data = newDataArray;
console.log(pager.data);  // Access the paginated data
```

##### `perPage`
The number of items per page.

- **Type**: Number
- **Setter**: Sets the number of items per page (must be a positive number).
- **Getter**: Returns the number of items per page.

Example:

```javascript
pager.perPage = 15;
console.log(pager.perPage);  // Access the number of items per page
```

##### `totalRec`
The total number of records available.

- **Type**: Number
- **Getter**: Returns the total number of records in the data.

Example:

```javascript
console.log(pager.totalRec);  // Get the total records
```

##### `totalPages`
The total number of pages based on `perPage` and `data`.

- **Type**: Number
- **Getter**: Returns the total number of pages.

Example:

```javascript
console.log(pager.totalPages);  // Get the total number of pages
```

#### Methods

##### `getPageRanges()`
Generates an array of page ranges. Each range is an array with two values: the start index and the end index for the page data.

- **Returns**: Array of arrays, where each sub-array represents the start and end indices of a page range.

Example:

```javascript
const pageRanges = pager.getPageRanges();
console.log(pageRanges);  // Outputs: [[0, 20], [20, 40], ...]
```

##### `getPageData(from, to)`
Retrieves the data for a specific page, based on the start (`from`) and end (`to`) indices.

- **Parameters**:
  - `from` _(Number)_ - The start index of the data slice.
  - `to` _(Number)_ - The end index of the data slice.
- **Returns**: Array of data for the specified page.

Example:

```javascript
const pageData = pager.getPageData(0, 20);
console.log(pageData);  // Outputs the data from index 0 to 20
```

#### `getPaginatedData()`
Returns all the data split into pages. The data is returned as an array of arrays, where each sub-array represents a page of data.

- **Returns**: Array of arrays, where each sub-array represents a page of data.

Example:

```javascript
const allPagesData = pager.getPaginatedData();
console.log(allPagesData);  // Outputs an array of arrays for each page
```

#### Example

Here is an example of how to use the `SmartPager` class:

```javascript
import SmartPager from './SmartPager';

const myData = [...Array(100).keys()];  // Example data array with 100 items
const pager = new SmartPager(myData, 10);  // Create pager with 10 items per page

// Access total records
console.log(pager.totalRec);  // 100

// Access total pages
console.log(pager.totalPages);  // 10

// Get paginated data
const paginatedData = pager.getPaginatedData();
console.log(paginatedData);  // Outputs an array of 10 pages, each with 10 items
```