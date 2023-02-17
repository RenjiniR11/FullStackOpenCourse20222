import { useState } from 'react'



const Statistic = (
    props) => ( <
    tr >
    <
    td > { props.text } < /td> <
    td > { props.value } < /td> < /
    tr >
)

const Statistics = (props) => {
    const all = props.good + props.neutral + props.bad
    const average = (props.good - props.bad) / all
    const positive = (props.good / all) * 100
    if (all === 0) {
        return <p > No feedback given < /p>
    }


    return ( <
        table >
        <
        tbody >
        <
        Statistic text = "good"
        value = { props.good }
        /> <
        Statistic text = "neutral"
        value = { props.neutral }
        /> <
        Statistic text = "bad"
        value = { props.bad }
        /> <
        Statistic text = "all"
        value = { all }
        /> <
        Statistic text = "average"
        value = { average }
        /> <
        Statistic text = "positive"
        value = { positive + '%' }
        /> < /
        tbody > <
        /table>
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