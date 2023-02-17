import React from 'react'

const Header = (props) => {
    console.log(props)
    return ( <
        div >
        <
        h1 > { props.course } < /h1> < /
        div >
    );
};

const Part = (props) => {
    return ( <
        p > { props.part } { props.exercises } <
        /p>
    );
};
const Content = (props) => {
    return ( < div >
        <
        Part part = { props.part[0].name }
        exercises = { props.part[0].exercises }
        /> <
        Part part = { props.part[1].name }
        exercises = { props.part[1].exercises }
        /> <
        Part part = { props.part[2].name }
        exercises = { props.part[2].exercises }
        /> < /
        div >
    );
};

const Total = (props) => {

    return ( <
        div >
        <
        p > Number of exercises is { props.total } < /p > < /
        div >
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part = [{
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

    return ( <
        div >
        <
        Header course = { course }
        /> <Content part = { [part[0],part[1],part[2]]} / >
        <
        Total total = {
            part[0].exercises + part[1].exercises + part[2].exercises
        }
        / > < /
        div >
    )
}


export default App