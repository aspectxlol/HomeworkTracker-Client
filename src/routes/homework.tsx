import { useState } from "react"
import axios from "axios"
import { homework } from "../types"
import HomeworkComponent from '../components/card'
import { HWAPI, HWAPIKEY } from '../constants'

const get = async () => {
    return await axios.get(`${HWAPI}/homework/get?apikey=${HWAPIKEY}`)
}

function HomeworkPage() {
    const [homework, setHomework] = useState<homework[]>()
    get().then((response) => {
      let data: homework[] = response.data
      setHomework(data)
    })
    return (
        <div>
            {
                homework?.length?
                    homework?.map(homework => 
                        <div className="homeworkClass" key={homework.homeworkId}>
                            <HomeworkComponent homework={homework}/>
                        </div>
                    ) : `There are currently no homework`
            }
        </div>
    )
}

export default HomeworkPage