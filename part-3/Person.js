const Person = (props) => {
    let voteMsg = props.age >= 18 ? "Please go vote!" : "You must be 18 to vote.";
    let hobbies = props.hobbies.map(hobby => <li>{hobby}</li>);
    return (
    <div>
         <p>Learn some information about this person: </p>
         <ul>
             <li> Name: {props.name.slice(0, 6)} </li>
             <li> Age: {props.age} </li>
             <h3>{voteMsg}</h3>
             <ul>
            Hobbies:
            {hobbies}
            </ul>
         </ul>
    </div>
    )
}