import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Select from '@mui/material/Select';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button'
import moment from 'moment'
import axios from 'axios';
import { HWAPI, HWAPIKEY } from '../constants'

const upload = async (name: string, subject: string, assigned_on: number, due_on: number) => {
    return await axios.post(
        `${HWAPI}/homework/add?apikey=${HWAPIKEY}`,
        {
            name: name,
            subject: subject,
            assigned_on: assigned_on, 
            due_on: due_on
        }
    )
}

function Main() {
    const [Name, setName] = useState<string>('task 1')
    const [Subject, setSubject] = useState<string>('Indonesian')
    const [AssignedTime, setAssignedTime] = useState<Date | null>(
        new Date()
    )
    const [DueTime, setDueTime] = useState<Date | null>(
        new Date()
    )

    const assignTime = (event: Date | null) => {
        setAssignedTime(event)
    }

    const dueTime = (event: Date | null) => {
        setDueTime(event)
    }

    return (
        <div>
            <div className='form'>

            <h1>Homework</h1>
            <TextField 
                placeholder='Name' 
                onChange={(event) => {setName((event.target as HTMLInputElement).value)}} 
                value={Name}
                required={true}
            />
            <FormControl>
                <InputLabel id='Subject'>Subject</InputLabel>
                <Select 
                    labelId='Subject'
                    label="Subject"
                    placeholder='Subject'
                    value={Subject}
                    onChange={(event) => {setSubject(event.target.value)}}
                    required={true}
                >
                    <MenuItem value="Indonesian">Indonesian</MenuItem>
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Sundanese">Sundanese</MenuItem>
                    <MenuItem value="Civic Education">Civic Education</MenuItem>                
                    <MenuItem value="Religion">Religion</MenuItem>
                    <MenuItem value="Biology">Biology</MenuItem>
                    <MenuItem value="Physysc">Physysc</MenuItem>
                    <MenuItem value="Social">Social</MenuItem>
                    <MenuItem value="Sports physical Education and health">Sports physical Education and health</MenuItem>
                    <MenuItem value="Math">Math</MenuItem>
                    <MenuItem value="arts and crafts">arts and crafts</MenuItem>
                </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DateTimePicker
                    label="Assigned On"
                    value={AssignedTime}
                    onChange={assignTime}
                    renderInput={(params) => <TextField {...params} />}
                />
                <DateTimePicker
                    label="Due On"
                    value={DueTime}
                    onChange={dueTime}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <Button 
                variant="contained" 
                onClick={(e) => {
                    (async () => {
                        const result = await upload(Name, Subject, moment(AssignedTime).unix(), moment(DueTime).unix())
                        console.log(JSON.parse(result.config.data))
                    })()
                }}
            >
                Submit
            </Button>
            </div>
        </div>
    )
}

export default Main