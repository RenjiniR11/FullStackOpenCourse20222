import React from 'react'



const Course = ({ course }) => {
    const parts = course.parts

    let total = 0
    for (let i = 0; i < parts.length; i++) {
        total += parts[i].exercises
    }
    return ( <
            div >
            <
            h1 > { course.name } < /h1> {
            course.parts.map(part =>
                <
                p key = { part.id } > { part.name } { part.exercises } <
                /p>
            )
        } <
        p >
        <
        b > total of { total }
    exercises < /b> < /
    p >
        <
        /div>
)
}

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [{
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    }

    return <Course course = { course }
    />
}

export default App