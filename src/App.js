import React, { PureComponent } from "react";
import Header from "./componets/Header";
import SearchInput from "./componets/SearchInput";
import EmojiResults from "./componets/EmojiResults";
import filterEmoji from "./componets/filterEmoji";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <div className="App-container">
          <Header />
          <SearchInput textChange={this.handleSearchChange} />
          <EmojiResults emojiData={this.state.filteredEmoji} />
        </div>
      </div>
    );
  }
}
export default App;
