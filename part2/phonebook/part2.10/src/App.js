import { useState } from 'react'

const Filter = ({ searchTerm, handleSearchTermChange }) => {
    return ( <
        div >
        filter shown with < input value = { searchTerm }
        onChange = { handleSearchTermChange }
        /> < /
        div >
    )
}
const PersonForm = ({ newName, handleNameChange, newNumber, handleNumberChange, addPerson }) => {
    return ( <
        form onSubmit = { addPerson } >
        <
        div >
        name: < input value = { newName }
        onChange = { handleNameChange }
        /> < /
        div > <
        div >
        number: < input value = { newNumber }
        onChange = { handleNumberChange }
        /> < /
        div > <
        div >
        <
        button type = "submit" > add < /button> < /
        div > <
        /form>
    )
}
const Persons = ({ personsToShow }) => {
    return ( <
        >
        {
            personsToShow.map(person =>
                <
                div key = { person.id } > { person.name } { person.number } <
                /div>
            )
        } <
        />
    )
}


const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        const newPerson = { name: newName, number: newNumber, id: persons.length + 1 }
        setPersons(persons.concat(newPerson))
        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const personsToShow = persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return ( < div >
        <
        h2 > Phonebook < /h2>

        <
        Filter searchTerm = { searchTerm }
        handleSearchTermChange = { handleSearchTermChange }
        />

        <
        h3 > Add a new < /h3>

        <
        PersonForm newName = { newName }
        newNumber = { newNumber }
        handleNameChange = { handleNameChange }
        handleNumberChange = { handleNumberChange }
        addPerson = { addPerson }
        />

        <
        h3 > Numbers < /h3>

        <
        Persons personsToShow = { personsToShow }
        /> < /
        div >
    )
}

export default App