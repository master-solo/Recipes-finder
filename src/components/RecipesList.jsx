import { Container, Grid, Header } from "semantic-ui-react";
import RecipesListItem from "./RecipesListItem";


const RecipesList = ({ recipes, searchQuery }) => {
  return (
    <Container>
      <Header 
        size="huge"
        content={`RECIPES LIST FOR : ${searchQuery}`}
        textAlign="center"
      />
      <Grid columns={4} doubling >
        {
          recipes && recipes.map((recipe) => {
            return <Grid.Column>
              <RecipesListItem recipe={recipe} />
            </Grid.Column>
          })
        }
      </Grid>
    </Container>
  )
}

export default RecipesList;