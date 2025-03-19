import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: ${props => props.useBrandColors 
    ? props.theme.colors.brand.background 
    : props.theme.colors.background};
  padding: ${props => props.theme.spacing.medium};
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: ${props => props.theme.spacing.medium};

  li {
    a {
      color: ${props => props.useBrandColors 
        ? props.theme.colors.brand.primary 
        : props.theme.colors.primary};
      text-decoration: none;
      font-size: ${props => props.theme.typography.fontSize.medium};
      
      &:hover {
        color: ${props => props.useBrandColors 
          ? props.theme.colors.brand.secondary 
          : props.theme.colors.secondary};
      }
    }
  }
`;

export const Navigation = ({ useBrandColors = false }) => {
  return (
    <Nav useBrandColors={useBrandColors}>
      <NavList useBrandColors={useBrandColors}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </NavList>
    </Nav>
  );
};

Navigation.propTypes = {
  useBrandColors: PropTypes.bool
};
