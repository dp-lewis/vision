import React from 'react';
import styled from 'styled-components';

import { Navigation } from '../../patterns/navigation/Navigation';
import { StorytileBasic, StorytileBig, StorytileWide } from '../../components/storytile/Storytile.styles';

// A mapping from JSON "component" values to actual components.
const storytileComponents = {
  basic: StorytileBasic,
  big: StorytileBig,
  wide: StorytileWide,
};

const StyledSection = styled.section`
  max-width: 764px;
  margin: ${props => props.theme.spacing.medium} auto;
  display: grid;
  grid-gap: ${props => props.theme.spacing.large};
  grid-template-areas: "story1      story2"
                       "story1      story3"
                       "story4      story4"
                       "story5      story6";
  
  > article:nth-child(1) {
    grid-area: story1;
  }

  > article:nth-child(2) {
    grid-area: story2;
  }

  > article:nth-child(3) {
    grid-area: story3;
  }

  > article:nth-child(4) {
    grid-area: story4;
  }

  > article:nth-child(5) {
    grid-area: story5;
  }

  > article:nth-child(6) {
    grid-area: story6;
  }

   > article {
      position: relative;
  }

    > article::before, 
  > article::after {
   content: '';
   position: absolute;
   background-color: ${props => props.theme.colors.border};
   z-index: 1;

  }


       > article:nth-child(1)::before {
   width: 1px;
   left: calc(100% + ${props => props.theme.spacing.large} / 2);
   top: 0;
    bottom: 0;
    width: 1px;
    }
}


  `;

  const storyData = [
    {
      "component": "big",
      "title": "Exclusive: Prime Minister Announces New Economic Measures",
      "standfirst": "In a landmark address, the PM has outlined sweeping policies aimed at boosting the economy amid global challenges.",
      "type": "Exclusive",
      "tag": "Politics",
      "tagurl": "https://www.smh.com.au/politics",
      "imageurl": "https://placehold.co/350x233",
      "imagealt": "Prime Minister addressing a podium"
    },
    {
      "component": "basic",
      "title": "Market Rebound: Tech Stocks Lead the Rally",
      "standfirst": "Investors cheer as major technology shares bounce back, driving market indices to record levels.",
      "type": "",
      "tag": "Business",
      "tagurl": "https://www.smh.com.au/business",
      "imageurl": "https://placehold.co/125x125",
      "imagealt": "Stock market display"
    },
    {
      "component": "basic",
      "title": "Thrilling Victory: Local Team Clinches Championship",
      "standfirst": "In a dramatic final, the underdogs secured the title with a last-minute goal that stunned fans.",
      "type": "",
      "tag": "Sports",
      "tagurl": "https://www.smh.com.au/sport",
    },
    {
      "component": "wide",
      "title": "Breakthrough: Renewable Energy Innovation Shakes Up Science",
      "standfirst": "New research developments promise to revolutionize the renewable energy landscape with cutting-edge technology.",
      "type": "",
      "tag": "Science",
      "tagurl": "https://www.smh.com.au/science",
      "imageurl": "https://placehold.co/366x351",
      "imagealt": "Solar panels in research facility"
    },
    {
      "component": "basic",
      "title": "Culture Unveiled: Sensational Art Exhibit Draws Crowds",
      "standfirst": "The latest gallery show is captivating audiences with its bold, thought-provoking installations.",
      "type": "",
      "tag": "Culture",
      "tagurl": "https://www.smh.com.au/culture",
      "imageurl": "https://placehold.co/125x125",
      "imagealt": "Modern art display"
    },
    {
      "component": "basic",
      "title": "Travel Inspo: Discover Hidden Gems This Summer",
      "standfirst": "Expert recommendations reveal secret destinations perfect for escaping the usual tourist traps.",
      "type": "",
      "tag": "Travel",
      "tagurl": "https://www.smh.com.au/travel"
    }
  ];

export const Homepage = () => {
  return (
    <div>
      <Navigation />
      <StyledSection>
      {storyData.map((item, index) => {
            const Component = storytileComponents[item.component];
            return <Component key={index} {...item} />;
          })}
      </StyledSection>
    </div>
  );
};
