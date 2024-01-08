import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
class BookList extends Component {
  state = {
    bookAsin: "",
    searchQuery: "",
    selected: false,
  };

  borderSelection = () => {
    this.setState({ selected: !this.state.selected });
  };

  getSelection = (bookCode) => {
    this.setState({ bookAsin: bookCode });
  };

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center"></Col>
        </Row>
        <Row xs={4} className="g-2 mt-3">
          <Col lg={8}>
            <Row>
              {this.props.books
                .filter((b) => b.title.toLowerCase().includes(this.state.searchQuery))
                .map((b) => (
                  <Col xs={12} md={4} key={b.asin}>
                    <SingleBook
                      book={b}
                      getSelection={this.getSelection}
                      bookId={this.state.bookAsin}
                      selected={this.state.selected}
                      borderSelection={this.borderSelection}
                    />
                  </Col>
                ))}
            </Row>
          </Col>

          <Col lg={4}>{this.state.bookAsin && <CommentArea asin={this.state.bookAsin} />}</Col>
        </Row>
      </>
    );
  }
}

export default BookList;
