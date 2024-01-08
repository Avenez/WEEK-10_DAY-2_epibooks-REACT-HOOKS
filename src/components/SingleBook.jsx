import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  clickFunction = (bookAsin) => {
    this.setState({ selected: !this.state.selected });
    this.props.getSelection(bookAsin);
  };

  componentDidUpdate;

  render() {
    return (
      <>
        <Card
          onClick={() => this.clickFunction(this.props.book.asin)}
          style={{ border: this.state.selected ? "3px solid red" : "none" }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default SingleBook;
