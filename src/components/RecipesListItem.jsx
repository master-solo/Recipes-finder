import { Card, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const RecipesListItem = ({recipe}) => {
  return (
    <Card>
      <img src={recipe.image_url} alt="thumbnail" style={{height : 170}} />
      <Card.Content>
        <Card.Header content={recipe.title} />
        <Card.Description>
          <h4>{recipe.publisher}</h4>
        </Card.Description>
      </Card.Content>
      <Card.Content>
        <Button 
          as={Link}
          to={`/recipes/${recipe.recipe_id}`}
          content="Details"
          color="blue"
          size="tiny"
          style={{marginBottom : 10}}
        />
        <Button 
          href = {recipe.source_url}
          target = '_blank'
          content="Recipe URL"
          color="green"
          size="tiny"
        />
      </Card.Content>
    </Card>
  )
}

export default RecipesListItem;