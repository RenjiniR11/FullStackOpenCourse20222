import { useState } from 'react'



const Statistics = (props) => {
    const all = props.good + props.neutral + props.bad
    const average = (props.good - props.bad) / all
    const positive = (props.good / all) * 100



    return ( < div > <
        p > good { props.good } < /p> <
        p > neutral { props.neutral } < /p> <
        p > bad { props.bad } < /p> <
        p > all { all } < /p> <
        p > average { average || 0 } < /p> <
        p > positive { positive || 0 } % < /p>< /div >
    )
}



function App() {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)



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
        Statistics good = { good }
        neutral = { neutral }
        bad = { bad }
        /> < /
        div >
    )
}

export default App