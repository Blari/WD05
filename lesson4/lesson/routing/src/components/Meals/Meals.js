import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyCard from '../MyCard/MyCard';
import Loader from '../Loader/Loader';

export default function Meals() {
  const [meals, setMeals] = useState([]);

  async function loadData() {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/search.php?s='
    );
    const data = await response.json();
    setMeals(data.meals);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Row>
        {!meals.length && <Loader />}
        {meals.length &&
          meals.map((meal) => {
            return (
              <Col xs={12} sm={6} xl={3}>
                <MyCard smolDisc meal={meal} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}
