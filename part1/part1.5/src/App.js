import React from 'react'

const Header = ({ course }) => {
    return ( <
        div >
        <
        h1 > { course.name } < /h1> <
        /div>
    )
}

const Part = ({ part }) => {
    return ( <
        p > { part.name } { part.exercises } <
        /p>
    )
}

const Content = ({ course }) => {
    return ( <
        div > {
            course.parts.map(part => ( <
                Part key = { part.name }
                part = { part }
                />
            ))
        } <
        /div>
    )
}

const Total = ({ course }) => {
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return ( <
        div >
        <
        p > Number of exercises is { total } < /p> <
        /div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [{
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return ( <
        div >
        <
        Header course = { course }
        /> <
        Content course = { course }
        /> <
        Total course = { course }
        /> <
        /div>
    )
}

export default App