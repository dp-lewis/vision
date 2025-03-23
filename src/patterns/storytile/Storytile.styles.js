import styled, { css } from 'styled-components';
import { Storytile } from './Storytile';

export const baseStyles = css`
  display: grid;
  grid-column-gap: ${props => props.theme.spacing.small};
  grid-row-gap: ${props => props.theme.spacing.small};
  grid-template-areas: "meta        meta"
                       "title       title"
                       "standfirst  image"
                       "time        image";

  grid-template-rows: auto auto auto 1fr;


  & h3 {
    grid-area: title;
    font-size: ${props => props.theme.typography.fontSize.large};
    font-family: ${props => props.theme.typography.fontFamily.primary};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    margin: 0;
    line-height: 1.1;
  }
  
  & img {
    grid-area: image;
    max-width: 100%;
  }

  & p {
    grid-area: standfirst;
    margin: 0;
    font-family: ${props => props.theme.typography.fontFamily.secondary};
    line-height: 1.2;
    }

  & time {
    grid-area: time;
    font-size: ${props => props.theme.typography.fontSize.small};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
  }  

  & .meta {
    grid-area: meta;
    font-size: ${props => props.theme.typography.fontSize.small};
  }

  & .meta a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }

  & .meta strong {
    margin-right: ${props => props.theme.spacing.small};
  }


`;

export const StorytileBase = styled(Storytile)`
  ${baseStyles}
`;

export const StorytileBasic = styled(StorytileBase)`
  & h3 {
    font-size: ${props => props.theme.typography.fontSize.large};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
  }

`;

export const StorytileBig = styled(StorytileBase)`

  grid-template-areas: "meta"
                       "title"
                       "image"
                       "standfirst"
                       "time";

  & h3 {
    font-size: ${props => props.theme.typography.fontSize.xlarge};
    line-height: 1.2;
    font-weight: ${props => props.theme.typography.fontWeight.bold};
  }
`;

export const StorytileWide = styled(StorytileBase)`

  grid-template-areas: "meta        image"
                       "title       image"
                       "standfirst  image"
                       "time        image";

  & h3 {
    font-size: ${props => props.theme.typography.fontSize.large};
    line-height: 1.2;
    font-weight: ${props => props.theme.typography.fontWeight.bold};
  }


  `;


  export const StorytileEditorPick = styled(StorytileBase)`

  grid-template-areas: "image"
                        "meta"
                       "title";
  
                       & p {
                       display: none;}

                       & time {
                       display: none;}

`;