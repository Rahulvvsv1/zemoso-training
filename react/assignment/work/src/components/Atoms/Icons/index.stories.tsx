import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon1 } from '.';

export default{

    title:"Icon_Details",
    component:Icon1,
    argTypes:{
        number:{
            control:"radio",
            options:["one","two","three"]
        },
 
    }



} as ComponentMeta<typeof Icon1>


const Template:ComponentStory<typeof Icon1> = (args) => (<Icon1{...args} />)
export const Details = Template.bind({})
Details.args={
    number:"one",
  

}