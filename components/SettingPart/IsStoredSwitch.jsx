import OriginalSwitch from "../OriginalSwitch"
import { useState } from "react"

const IsStoredSwitch = () => {
    
    const [isStored, setIsStored] = useState(false)
    
    return (
        <>
            <OriginalSwitch
                id='is-stored'
                value={ isStored }
                setValue= { setIsStored }
            >
                isStored?
            </OriginalSwitch>
            <p>{isStored ? 'true' : 'false'}</p>
        </>
    ) 
}

export default IsStoredSwitch