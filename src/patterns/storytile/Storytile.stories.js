import { Storytile } from './Storytile';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { afrTheme } from '../../themes/afrTheme';


const BasicStorytile = styled(Storytile)`
    display: grid;
    grid-column-gap: ${props => props.theme.spacing.medium};
    grid-template-columns: auto 1fr;

  & h3 {
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.typography.fontSize.medium};
    font-family: ${props => props.theme.typography.fontFamily};
  }
    & img {
        max-width: 100%;
        grid-column-start: 1;
        grid-row: 1 / span 20;
    }
`;

const BigstoryWrapper = styled.div`
  padding: ${props => props.theme.spacing.medium};

  & h3 {
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.typography.fontSize.large};
    font-family: ${props => props.theme.typography.fontFamily};
  }  
`;


export default {
  title: 'Patterns/Storytile',
  component: Storytile,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    imageurl: 'https://placehold.co/600x400',
  }
};

export const Default = {};

export const BigstoryStyles = {
    decorators: [
      (Story) => (
          <BigstoryWrapper>
            <Story />
          </BigstoryWrapper>
      ),
    ],
  };

  export const WithDirectStyling = {
    render: (args) => (
        <BasicStorytile {...args} />
    ),
  };  

  export const WithChildren = {
    render: (args) => (
        <Storytile {...args}>
            <p>Here is some extra content passed as children!</p>
        </Storytile>
    ),
  };  