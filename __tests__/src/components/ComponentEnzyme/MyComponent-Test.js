jest.unmock('../../../../src/components/ComponentEnzyme/MyComponent');
import React from "react";
import { shallow, mount, render } from 'enzyme';
import MyComponent from "../../../../src/components/ComponentEnzyme/MyComponent";
import Foo from "../../../../src/components/ComponentEnzyme/Foo";



describe("<MyComponent/>",()=>{
    it("should render three Foo components",()=>{
       /* const wrapper = shallow(<MyComponent />);
        expect(wrapper.find(Foo)).to.have.length(3);*/
    });

   /* it("",()=>{

    });*/
});