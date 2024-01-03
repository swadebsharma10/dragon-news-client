import Card from 'react-bootstrap/Card';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    
    const {_id,title,author, rating, total_view, details,image_url  } = news;
    return (
        <div>
        <Card className="mb-3">
        <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center'>
              <img src={author?.img} alt="" height={40} width={40} className='rounded-circle me-2' />
              <div>
              <p className='mb-0'>{author?.name}</p>
              <p>{author?.published_date}</p>
              </div>
            </div>

            <div>
            <FaBookmark className='me-2'/>  
            <FaShareAlt />
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
           { details.length > 200 ? <p>{details.slice(0,200) + '....'} <Link to={`/news/${_id}`}>Read More</Link> </p>
            : <p>{details}</p>
        }
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
         <div >
            <FaStar className="text-warning me-2"></FaStar> <span>{rating.number}</span>
         </div>
         <div>
         <span className='me-2'>{total_view}</span>
         <FaEye></FaEye>
         </div>
        </Card.Footer>
      </Card>
        </div>
    );
};

export default NewsCard;