const App = () => (
    <div>
        <Tweet username="mickey91" name="Mickey Mouse" date="2-1-20" message="Welcome to Disneyland!" />
        <Tweet username="minnie91" name="Minnie Mouse" date="2-2-20" message="Where's my Mickey?" />
        <Tweet username="donald91" name="Donald Duck" date="2-3-20" message="Where are my boys?" />
    </div>

)

ReactDOM.render(<App />,
    document.getElementById("root"))