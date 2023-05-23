import { getRecipe } from "../services/api"
import { useContext, useEffect,useState } from "react"
import { Link, useParams } from "react-router-dom";
import { Button, Grid, Header, Segment } from "semantic-ui-react";
import Context from "../constants/Context";
import Loader from "./Loader";


const RecipeDatails = () => {

  const { setLoading, loading } = useContext(Context);

  const  [recipe, setRecipe] = useState({});

  const { recipeId } = useParams();

  useEffect(() => {
    const getData = async () => {
      let result = await getRecipe(recipeId)
      if (result && result.recipe) {
        setRecipe(result.recipe);
      } 
      setLoading(false);
    }
    getData()
    setLoading(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    loading ? <Loader /> :
    Object.keys(recipe).length > 0 ? 
      <Grid container stackable columns={2} className="deatilsPageContent" >
        <Grid.Column>
          <Button 
            as={Link}
            to={'/recipes'}
            content='Back to recipes list'
            color="yellow"
            style={{ marginBottom: 40}}
          />
          <img src={recipe.image_url} alt="" className="d-img" />
        </Grid.Column>
        <Grid.Column>
          <Header size="medium">{recipe.title}</Header>
          <p>Provided by : {recipe.publisher}</p>
          <Button 
            as={'a'}
            href={recipe.publisher_url}
            targe='_blank'
            content='Publisher Webpage'
            color="blue"
          />
          <Button 
            as={'a'}
            href={recipe.source_url}
            targe='_blank'
            content='Recipe URL'
            color="green"
          />
          <Header size="large" content="Ingredients" />
          <Segment.Group>
            {
              recipe && recipe.ingredients.map((data) => {
                return (
                  <Segment>
                    <h5>{data}</h5>
                  </Segment>
                )
              })
            }
          </Segment.Group>
        </Grid.Column>
      </Grid> : null
  )
}

export default RecipeDatails;