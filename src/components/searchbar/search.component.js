import React from "react";

import { Input } from "antd";

const Search = Input.Search;

class SearchBoxComponent extends React.Component {
  state = {
    dataSource: []
  };

  handleSearch = value => {
    console.log(value)
  };

  fetchArxivData() {

  }

  render() {
    return (
      <div style={{ flex: 1 }}>
        <div className="global-search-wrapper" style={{ 'padding-bottom': 50, 'padding-top': 100, 'padding-left': 290, 'width': 1100 }}>
          <Search
            placeholder="Search"
            enterButton
            onSearch={value => this.handleSearch(value)}
          />
        </div>
      </div>
    );
  }
}


export default (SearchBoxComponent);