import React from 'react'
import mess from './meetings.module.css'

export default function Meetings() {

    const images = [
        'https://media.licdn.com/dms/image/C4E03AQEcd5iAomLimw/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=HE56f1IHTXlSpRNEyZja4fAsiwQQ7tttSU_QxyDb2Z4',
        'https://media.licdn.com/dms/image/C4E03AQEcd5iAomLimw/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=HE56f1IHTXlSpRNEyZja4fAsiwQQ7tttSU_QxyDb2Z4',
        'https://media.licdn.com/dms/image/C4E03AQEcd5iAomLimw/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=HE56f1IHTXlSpRNEyZja4fAsiwQQ7tttSU_QxyDb2Z4',
        'https://media.licdn.com/dms/image/C4E03AQEcd5iAomLimw/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=HE56f1IHTXlSpRNEyZja4fAsiwQQ7tttSU_QxyDb2Z4',
        'https://media.licdn.com/dms/image/C4E03AQEcd5iAomLimw/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=HE56f1IHTXlSpRNEyZja4fAsiwQQ7tttSU_QxyDb2Z4',
        'https://media.licdn.com/dms/image/C4E03AQEcd5iAomLimw/profile-displayphoto-shrink_200_200/0?e=1568246400&v=beta&t=HE56f1IHTXlSpRNEyZja4fAsiwQQ7tttSU_QxyDb2Z4'
          ]

    return (
        <div className={mess.page} >
            <div className={mess.up}>
                <section>Urgent</section>
                <p>10:30-11:30</p>
                <h4> Meeting with Tom </h4>
                <h5>View agenda</h5>
            </div>
            <div className={mess.down}>
                { images.map((image)=>{
                    return (<img src={image} ></img>)
                }) }
            </div>
        </div>
    )
}
