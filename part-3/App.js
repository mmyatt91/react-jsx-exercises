const App = () => {
    return (
        <div>
            <Person 
            name="John David" 
            age={36} 
            hobbies={["acting", "football", "playing video games"]} />
            <Person 
            name="Raphael" 
            age={55} 
            hobbies={["singing", "producing", "music supervising"]} />
            <Person 
            name="Braxton" 
            age={17} 
            hobbies={["playing sax", "singing"]} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById("root"))