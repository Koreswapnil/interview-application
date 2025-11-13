export const Questions = [
  {
    id: 1,
    Q: 'What is React?',
    A: 'React is popular JavaScript library used for building powerful user interface. It uses component-based architecture which allows developer to create reusable UI Components. React uses virtual DOM that minimizes direct DOM manipulation. It boosts performance of application.',
  },
  {
    id: 2,
    Q: 'What is SPA?',
    A: 'SPA is type of web application that loads a single HTML page and dynamically updates its content using javascript without requiring full page reloads for nevigation and data updates. Advantages- Faster Load time, Smoother user interaction. Disadventages- Slower intial Load, SEO challeges.',
  },
  {
    id: 3,
    Q: 'What is JSX and how does it differ from HTM?',
    A: 'JSX is a syntax extension for javascript that allows developer to write HTML like code directly into javascript file',
  },
  {
    id: 4,
    Q: 'Exaplain difference between functional and class components',
    A: 'class components are used before hooks. Functional components are used after hooks. Functional component is modern way to write code. class component is traditional way to write components. class components extends React.component and includes render() method which returns JSX. State change inside components are managed using this.state and update with this.setState. Functional component uses hooks like useState and useEffect to handle state and life-cycle events.',
  },
  {
    id: 5,
    Q: 'Difference between stateless and stateful component in React?',
    A: 'Stateless component do not manage state or data. They receive data via props and display it. Stateful component can manage their existing own state and can update their existing state based on user interaction and API calls.',
  },
  {
    id: 6,
    Q: 'What is props in react? How are they use?',
    A: 'Props is way to pass data from parent component to child component. Child component can not modify these value because props are read-only. props and state are used to control and manipulate how components behave and render.',
  },
  {
    id: 7,
    Q: 'Difference between state and props in react?',
    A: 'state is mutable onject that stores dynamic data. props is an immutable (can not modify) object. state is private and fully controlled by component it belongs to. props is controlled by the parent component and can not bechaged by children. ',
  },
  {
    id: 8,
    Q: 'Difference between controlled and uncontrolled components?',
    A: 'Controlled component are used when control is required over the data being entered into a form. Uncontrolled components are used when there is no need to dynamically inspect the user inputs. Controlled components are accessed through state attribute. Uncontrolled components are managed by ref. It is harder to access the value.',
  },
  {
    id: 9,
    Q: 'What are fragments in React?',
    A: 'Fragment in react are way to group together multiple elements without adding extra node to DOM',
  },
  {
    id: 10,
    Q: 'What is purpose of key attribute in react lists?',
    A: 'Key attribute identifies each item uniquely when the list Re-render and it  helps to track and update individual items in the list without having to re-render the entire list.',
  },
];
