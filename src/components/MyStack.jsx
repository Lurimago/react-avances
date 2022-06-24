const MyStack = () => {

    const mystack = {
        name: "HTML",
        movie: "CSS",
        music: "JavaScript"
    }

    const click = () => {
        alert("Clickaste MyStack")
    }

    return (
        <div className="card" onClick={click} style={{backgroundColor: "#FFFF00"}}> 
            <h3>My Stack</h3>
            <ul>
                <li>{mystack.name}</li>
                <li>{mystack.movie}</li>
                <li>{mystack.music}</li>
            </ul>
        </div>
    )
}
export default MyStack;


