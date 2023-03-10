import { useState } from 'react'

function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = good / all * 100

    return ( <
        div >
        <
        h1 > give feedback < /h1> <
        button onClick = {
            () => setGood(good + 1)
        } > good < /button> <
        button onClick = {
            () => setNeutral(neutral + 1)
        } > neutral < /button> <
        button onClick = {
            () => setBad(bad + 1)
        } > bad < /button> <
        h2 > statistics < /h2> <
        p > good { good } < /p> <
        p > neutral { neutral } < /p> <
        p > bad { bad } < /p> <
        p > all { all } < /p> <
        p > average { average || 0 } < /p> <
        p > positive { positive || 0 } % < /p> < /
        div >
    )
}

export default App