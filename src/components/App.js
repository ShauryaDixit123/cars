import React from "react";
import SearchBar from "./SearchBar";
import ImageDisplay from "./Images";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <h1>Hi</h1>
        <div className="ui container">
          <SearchBar onSubmit={this.onSearchSubmit} />
          num of images = {this.state.images.length}
          <ImageDisplay images={this.state.images} />
        </div>
      </div>
    );
  }
}
export default App;
