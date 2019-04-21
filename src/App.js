import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './Tabs/Tabs'
import Accordion from './Accordion/Accordion'


const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

const sections = [
  {
    title: 'Section 1',
    content: 'This is the content of section 1',
  },
  {
    title: 'Section 2',
    content: 'SECTION 2 CONTENT IS RIGHT HERE BOOOOYAHH',
  },
  {
    title: 'Section 3',
    content: 'aNDDDD SECTION 3 GOESSS  HEREEEE',
  },
]

class App extends Component {

  render() {
    return (
      <div className="App">
        <Tabs
        tabs = {tabsProp}
        >
        </Tabs>

        <Accordion
        sections = {sections}
        >
        </Accordion>
      </div>
    );
  }
}

export default App;
