import { Card, CardHeader } from "@mui/material"
import { homework } from "../types"
import IconButton from '@mui/material/IconButton'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete';
import CardContent from '@mui/material/CardContent';
import axios from 'axios'
import moment from 'moment'
import { useState } from 'react'
import { HWAPI, HWAPIKEY } from '../constants'

interface props {
    homework: homework
}

const handleFinish = (isDone: boolean, setDone: any, id: string) => {
    axios.patch(`${HWAPI}/homework/finish?apikey=${HWAPIKEY}&id=${id}`)
    setDone(!isDone)
}

const handleDelete = (id: string) => {
    axios.delete(`${HWAPI}/homework/delete?apikey=${HWAPIKEY}&id=${id}`)
}

function Homework(props: props) {
    const [Done, setDone] = useState<boolean>(props.homework.isDone)
    return  (
        <Card variant="outlined" key={props.homework.homeworkId}>
            <CardHeader 
                title={`${props.homework.name} - ${props.homework.subject}`} 
                subheader={Done? `is done`: `is not done`}
                action={
                    <>
                        <IconButton onClick={(e) => {handleFinish(Done, setDone, props.homework.homeworkId)}}>{Done? <CloseIcon color="error"/> : <CheckIcon color="success"/>}</IconButton>
                        <IconButton onClick={(e) => {handleDelete(props.homework.homeworkId)}}><DeleteIcon /></IconButton>
                    </>
                }
            />
            <CardContent>
                {Done? 
                    `assigned on ${moment.unix(props.homework.assigned_on).format('MMMM Do YYYY, h:mm:ss a')}` : `Due in ${moment.unix(props.homework.due_on).format('MMMM Do YYYY, h:mm:ss a')}`
                }
                {`${props.homework.homeworkId}`}
            </CardContent>
        </Card>
    )
}

export default Homework