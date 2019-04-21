import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Accordion from './Accordion';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

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

describe(`Accordion Component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Accordion />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('The component renders no sections as active by default', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('opens a clicked section', () => {
  const wrapper = shallow(<Accordion sections={sections} />)
  wrapper.find('button').at(1).simulate('click')
  expect(toJson(wrapper)).toMatchSnapshot()
})


  it('only opens one section at a time', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
})


})
