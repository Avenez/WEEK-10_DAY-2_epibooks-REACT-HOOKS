import { Component, useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const bookDataFetch = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxYzlhYzBkOGEyMDAwMThhNDhhM2MiLCJpYXQiOjE3MDQ3MTk5MzIsImV4cCI6MTcwNTkyOTUzMn0.p4FkfXQ_psQrLx9sS5QJWWGy0uySa5OcdzIriiAw7sE",
        },
      });
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        // this.setState({ comments: comments, isLoading: false, isError: false });
        setComments(comments);
        setIsLoading(false);
        setIsError(false);
      } else {
        // this.setState({ isLoading: false, isError: true });
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      // this.setState({ isLoading: false, isError: true });
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    bookDataFetch();
  }, [props.asin]);

  return (
    <div className="text-center" data-testid="CommentArea">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
