import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark } from 'react-icons/fa';
import { HiOutlineShare } from 'react-icons/hi';
import { AiFillStar,AiFillEye } from 'react-icons/ai';


const NewsSummeryCard = ({ news }) => {
//   console.log(news);
  const { _id, author, title, image_url, details, total_view } = news;
  return (
    <div>
      <Card className="mb-5">
        <Card.Header className="d-flex justify-content-between align-items-center text-muted">
          <div className="d-flex">
            <Image 
            src={author.img}
            className="me-3"
            style ={{height:'60px'}} 
            roundedCircle></Image>
            <div>
            <span>{author.name}</span> 
             <p>Date: {author.published_date}</p>
          </div>
          </div>
          <div>
            <FaBookmark className='me-2'></FaBookmark>
            <HiOutlineShare></HiOutlineShare>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length > 250 ? (
              <p>
                {details.slice(0, 250) + "..."}{" "}
                <Link to={`/news/${_id}`}>Read more</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Text>
          <Button variant="info">Details</Button>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-items-center text-muted">
            <div>
                <AiFillStar className="text-warning me-2"></AiFillStar>
                <span>4.7</span>
            </div>
            <div>
                <AiFillEye className ="text-muted me-2"></AiFillEye>
                <span>{total_view}</span>
            </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummeryCard;
