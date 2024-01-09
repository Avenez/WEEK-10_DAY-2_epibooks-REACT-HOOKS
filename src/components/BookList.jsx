import { Component, useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

function BookList(props) {
  const [bookAsin, setBookAsin] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState(false);

  const borderSelection = () => {
    setSelected(true);
  };

  const getSelection = (bookCode) => {
    setBookAsin(bookCode);
  };

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={4} className="text-center"></Col>
      </Row>
      <Row xs={4} className="g-2 mt-3">
        <Col xs={6} md={8}>
          <Row>
            {props.books
              .filter((b) => b.title.toLowerCase().includes(searchQuery))
              .map((b) => (
                <Col xs={12} md={6} lg={4} key={b.asin}>
                  <SingleBook
                    book={b}
                    getSelection={getSelection}
                    bookId={bookAsin}
                    selected={selected}
                    borderSelection={borderSelection}
                  />
                </Col>
              ))}
          </Row>
        </Col>

        <Col xs={6} md={4}>
          {bookAsin ? <CommentArea asin={bookAsin} /> : <h2>Clicca un libro per vedere i commenti !</h2>}
        </Col>
      </Row>
    </>
  );
}

export default BookList;
