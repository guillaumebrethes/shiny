import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
// import { Navlink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

//  === Import  ===;

//  === Import : local  ===;

//  === Component ===;
const Category = () => {
  console.log('Composant Category => ');

  return (
    <List>
      <NavLink to="/cuisine/Italian">
        <FaPizzaSlice />
        <h4>Pizza</h4>
      </NavLink>
      <NavLink to="/cuisine/American">
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to="/cuisine/Thai">
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to="/cuisine/Japanese">
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </List>
  );
};

const List = styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`;

export default Category;
