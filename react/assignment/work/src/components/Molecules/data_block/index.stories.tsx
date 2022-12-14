import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Block } from '.';




export default{

    title:"Data_block_Details",
    component:Block,
    argTypes:{
        number:{
            control:"text"
        },
        text1:{
            control:"text"
        },
        text2:{
            control:"text"
        }
    }



} as ComponentMeta<typeof Block>


const Template:ComponentStory<typeof Block> = (args) => (<Block{...args} />)
export const Details = Template.bind({})
Details.args={
    number:"one",
    text1:"hello there",
    text2:"hiiii"

}