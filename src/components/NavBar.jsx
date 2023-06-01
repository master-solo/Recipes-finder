import { Menu } from 'semantic-ui-react';
import { logo } from '../constants/constant';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Menu borderless fixed='top'>
      <Menu.Item>
        <img src={logo} alt="logo" style={{width: 120}}/>
      </Menu.Item>
      <Menu.Item name='Home' as={Link} to='/Recipes-finder' />
      <Menu.Item name='Recipes' as={Link} to='/Recipes-finder/recipes' />
    </Menu>
  )
};

export default NavBar;
