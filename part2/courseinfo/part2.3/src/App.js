import React from 'react'
const Course = ({ course }) => {
    return ( <
            div >
            <
            h2 > { course.name } < /h2> {
            course.parts.map(part =>
                <
                p key = { part.id } > { part.name } { part.exercises } <
                /p>
            )
        } <
        p > < b > total of { course.parts.reduce((sum, part) => sum + part.exercises, 0) }
    exercises < /b></p >
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