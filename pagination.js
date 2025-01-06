class SmartPager {
  constructor(data = [], perPage = 10) {
    this._data = data; // Private-like property (not strictly private)
    this._perPage = perPage;
  }

  // Setter for data
  set data(newData) {
    if (!Array.isArray(newData)) {
      throw new Error("Data must be an array.");
    }
    this._data = newData;
  }

  // Getter for data
  get data() {
    return this._data;
  }

  // Setter for perPage
  set perPage(newPerPage) {
    if (typeof newPerPage !== "number" || newPerPage <= 0) {
      throw new Error("Per page value must be a positive number.");
    }
    this._perPage = newPerPage;
  }

  // Getter for perPage
  get perPage() {
    return this._perPage;
  }

  // Getter for total records
  get totalRec() {
    return this._data.length;
  }

  // Getter for total pages
  get totalPages() {
    return Math.ceil(this.totalRec / this._perPage);
  }

  // Method to generate page ranges
  getPageRanges() {
    return Array.from({ length: this.totalPages }, (_, i) => {
      const start = i * this._perPage;
      const end = Math.min(start + this._perPage, this.totalRec);
      return [start, end];
    });
  }

  // Method to get data for a specific page
  getPageData(from, to) {
    return this._data.slice(from, to);
  }

  // Method to get all paginated data
  getPaginatedData() {
    return this.getPageRanges().map(([from, to]) => this.getPageData(from, to));
  }
}

export default SmartPager;
