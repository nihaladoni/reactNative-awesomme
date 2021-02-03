import React from "react";
import { ScrollView } from "react-native";
import { Card, Subheading, Title } from "react-native-paper";

import MyButton from "./myButton";

class QuoteBox extends React.Component {
  state = {
    quoteObject: {},
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch("https://freequote.herokuapp.com/")
      .then((res) => res.json())
      .then((data) =>
        this.setState({ ...this.state.quoteObject, quoteObject: data })
      );
  };

  handleClick = () => {
    this.fetchData();
  };

  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    const { quoteObject } = this.state;

    return (
      <ScrollView>
        <Card style={{ marginVertical: 50, paddingVertical: 50 }}>
          <Card.Content>
            <Title style={{ marginBottom: 20 }}>{quoteObject.quote}</Title>
            <Subheading style={{ marginLeft: "auto" }}>
              --{quoteObject.author || "Anonymous"}
            </Subheading>
          </Card.Content>
          <Card.Actions></Card.Actions>
        </Card>
        <MyButton title="Get new Quote" onPress={this.handleClick} />
      </ScrollView>
    );
  }
}

export default QuoteBox;
