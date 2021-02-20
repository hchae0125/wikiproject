import react, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Header(){
    const history = useHistory()
    const [keyword, setKeyword] = useState('')

    

    const keyDownHandler = (e: React.KeyboardEvent) => {
        if (e.key == 'Enter'){
            history.push('/search/'+ keyword)
            history.go(0)
            //setKeyword(e.currentTarget.value)
        }
    }

    return (
        <div>
            <input type="text" placeholder="Search..." 
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            onKeyPress={keyDownHandler}
            ></input>
        </div>
    )
}

export default Header