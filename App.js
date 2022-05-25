import React from "react";
import { View, Text, Flatlist } from "react-native";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.callApi();

  }
  async callApi() {
    let resp = await fetch('https://facebook.github.io/react-native/movies.json')
    let respJson = await respJson();
    this.setState({ data: respJson.movies })

  }
  render() {
    return (
      <View>
        <Text>Api Called</Text>
        <Flatlist 
        data={this.state.data}
        renderItem={({item})=><Text>{item.title}</Text>}


        />

      </View>
    );
  }
}
export default App;