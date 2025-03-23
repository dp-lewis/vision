import { StorytileBasic, StorytileBig, StorytileWide, StorytileEditorPick } from './Storytile.styles';

export default {
  title: 'Patterns/Storytile',
  component: StorytileBasic,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    imageurl: 'https://placehold.co/125x125',
    title: 'Woman bites, kicks alleged attacker to escape sexual assault on north shore',
    standfirst: 'The 36-year-old woman was walking home from work when the man allegedly grabbed her from behind and pushed her into a garage door in Neutral Bay.',
  }
};

export const Default = {
};

export const Big = {
    args: {
        imageurl: 'https://placehold.co/420x280',
        tag: "General Insurance",
        tagurl: "https://smh.com.au"
      },
      render: (args) => (
          <StorytileBig {...args} />
      ),      
};

export const Wide = {
    args: {
        imageurl: 'https://placehold.co/445x295',
        type: 'Opinion',
      },
      render: (args) => (
          <StorytileWide {...args} />
      ),      
};

export const EditorsPick = {
    args: {
        imageurl: 'https://placehold.co/445x295',
        title: "‘A thought bubble no one asked for’: After two strong years, Dutton is wobbling",
        type: ""
      },
      render: (args) => (
          <StorytileEditorPick {...args} />
      ),      
};


