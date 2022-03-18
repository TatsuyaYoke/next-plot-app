import OriginalSwitch from "../OriginalSwitch"
import { useState } from "react"

const IsStoredSwitch = () => {
    const [isStored, setIsStored] = useState(false)
    const toggle = () => {
        setIsStored((value) => !value)
    }
    
    return (
        <>
            <OriginalSwitch
                id='is-stored'
                value={ isStored }
                setValue= { toggle }
            >
                isStored?
            </OriginalSwitch>
            <p>{isStored ? 'true' : 'false'}</p>
        </>
    ) 
}

export default IsStoredSwitch