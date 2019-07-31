import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
import style from './setmeetings.module.css'
import Customform from '../customform/customform';
import Duration from '../durations/duration';
import Time from '../time/time';
export default function Setmeetings() {
    return (
        <div className={style.page}>
            <FontAwesomeIcon icon={faStopwatch} />
            <h5>Set up meeting</h5>
            <h6>We'll email your coleuges and remind them <br></br> when is closer to time</h6>
            <Customform></Customform>
            <Duration></Duration>
            <Time></Time>

            <button className={style.sendmetohell}> Send invite</button>
        </div>
    )
}
