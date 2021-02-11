const App = () => (
    <div>
        <MyFirstComponent />
        <NamedComponent name="Raphael" />
    </div>
)

ReactDOM.render(<App />,
    document.getElementById("root"))