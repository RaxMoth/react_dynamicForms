import React from 'react'
import { fields } from "../data";
import { fields2 } from "../data2";
import { Form } from "../Form";

function Sidebar() {
  return (
    <div className='flex float-right w-12 bg-red-500'>
        <Form fields={fields} />
        <Form fields={fields2} />

    </div>
  )
}

export default Sidebar      