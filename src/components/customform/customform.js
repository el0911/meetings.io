import React from 'react'
import Form from 'react-bootstrap/Form'
import style from './customform.module.css'


export default function Customform() {
    return (
        <div className={style.page}>
            <Form>
                <Form.Control placeholder="To:" />
                <Form.Control placeholder="Subject" />
                <Form.Control placeholder="Location" />
            </Form>
        </div>
    )
}
