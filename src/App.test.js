import { render, screen } from '@testing-library/react';
import App from './App';

import {  mount, shallow } from 'enzyme';
import Counter from './Counter';
import PersonList from './components/PersonList';

describe("Counting Testing", () => {
  let wrapper;
  let personWrapper;
  let personState;
  beforeEach(() => {
     wrapper = shallow(<Counter/>)
     personWrapper =shallow(<PersonList/>)
     personState = personWrapper.state()

  });
  // checking the title of the counter text
  test('renders the title of counter', () => {
    expect(wrapper.find("h3").text()).toContain("this is the counter app")

  });
  // for button test
  test("render the button with text`increment`", () => {
    expect(wrapper.find("#increment_btn").text('increment')).toBe("increment")
  })
  // inital test state
  test("initial value of state in app", () => {
      expect(wrapper.find("#counter_value").text()).toBe("0");

  })
  // onclick handling
  test("increment btn on click test",()=>{
    wrapper.find("#increment_btn").simulate('click')
    expect(wrapper.find("#counter_value").text()).toBe("1")
  })

   // onclick decrement value
   test("decrement btn on click test",()=>{
    wrapper.find("#increment_btn").simulate('click')
    expect(wrapper.find("#counter_value").text()).toBe("1")

    wrapper.find("#decrement_btn").simulate('click')
    expect(wrapper.find("#counter_value").text()).toBe("0")

  })
  // finding the person list

  it("finds the person",()=>{
    // const Person = wrapper.find(PersonList)

    expect(personWrapper).toHaveLength(1)
    expect(personState).not.toBeNull()

  })

  it("people property checking",()=>{
    expect(personState.people).toBeDefined()

  })

  // checking the people proprty is available or not 

  // it('',()=>{
  //     expect(personWrapper.props().people).toEqual(personState.people)
  // })

})



