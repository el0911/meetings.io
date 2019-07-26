import React from 'react'
import style from './duration.module.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function Duration() {

    const durations = [
        {
            amountTime: 30,
            display: '30 minutes',
            active: true
        },
        {
            amountTime: 45,
            display: '45 minutes',
            active: false
        },
        {
            amountTime: 60,
            display: '1 hour',
            active: false
        },
        {
            amountTime: 90,
            display: '1.5 hours',
            active: false
        }, {
            amountTime: 120,
            display: '2 hours',
            active: false
        }, {
            amountTime: 150,
            display: '2.5 hours',
            active: false
        }, {
            amountTime: 180,
            display: '3 hours',
            active: false
        }, {
            amountTime: 210,
            display: '3.5 hours',
            active: false
        }, {
            amountTime: 240,
            display: '4 hours',
            active: false
        }, {
            amountTime: 270,
            display: '4.5 hours',
            active: false
        }, {
            amountTime: 300,
            display: '5 hours',
            active: false
        }, {
            amountTime: 720,
            display: 'All day',
            active: false
        }

    ]

    return (
        <div className={style.page}>

            <h3>Duration</h3>

            <Row>
                {durations.map((x) => {
                    return (
                        <Col className={style.col} xs={3}>
                            <div className={x.active ? style.activeduration : style.nactiveduration}><p>{x.display}</p></div>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}
