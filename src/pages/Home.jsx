import { Button } from "semantic-ui-react";
import  Header from "../components/Header";
import { Link } from "react-router-dom";


const Home = () => {
  return (
      <Header title="FAMILY RECIPES" bgClass="bg-image">
        <Button 
          content="SEARCH RECIPES"
          color="primary"
          as={Link}
          to='/Recipes-finder/recipes'
          size="big"
        />
      </Header>
  )
}

export default Home;