import React from 'react'
import style from './time.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DateTimePicker from 'react-datetime-picker';

export default function Time() {

    const onChange =(value)=>{

    }

    return (
        <div className={style.page}>
            <h3>Time</h3>
            <Row>
                <Col>
                    <label>From</label>
                    <DateTimePicker className={style.picker}
                        onChange={value=>{
                            onChange(value)
                        }}
                        value={new Date()}
                    />

                </Col>
                <Col>
                    <label>To</label>
                    <DateTimePicker className={style.picker}
                         onChange={e=>{
                            // onChange()
                        }}
                        value={new Date()}
                    />

                </Col>
            </Row>
        </div>
    )
}
