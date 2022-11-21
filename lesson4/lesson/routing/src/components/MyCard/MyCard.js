import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function MyCard({ meal, smolDisc }) {
  const myStyle = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
  return (
    <Card className="mt-4">
      <Card.Img variant="top" src={meal.strMealThumb} />
      <Card.Body>
        <Card.Title>{meal.strMeal}</Card.Title>
        <Card.Text style={smolDisc && myStyle}>
          {meal.strInstructions}
        </Card.Text>
        <Link to={'/meal/' + meal.idMeal}>
          <Button variant="primary">{meal.idMeal}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
