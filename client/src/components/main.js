import React, { Component, useState } from 'react'
import axios from 'axios'

function Main (){
    const [entry, setTarget] = useState('')
    const submit = () => {
        console.log({entry})
    }
    return (
        <div>
            <form>
                <input type="text" 
                    placeholder="Search..." 
                    value={entry} 
                    onChange={e => setTarget(
                        e.target.value
                )}/>
            </form>
            <button onClick={submit}>Search</button>
        </div>
    )
}
  
export default Main