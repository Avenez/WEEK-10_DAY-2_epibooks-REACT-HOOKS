import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

const SingleBook = (props) => {
  const clickFunction = (bookAsin) => {
    props.getSelection(bookAsin);
    props.borderSelection();
  };

  return (
    <>
      <Card
        onClick={() => clickFunction(props.book.asin)}
        style={{
          border: props.selected && props.bookId === props.book.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
