/* - - - - - - - - - - - - - - - - HEADER - - - - - - - - - - - - -  - - - */
const Header = () => {
    const ulStyles = {
        padding: "0px",
        marginBottom: "30px",
        display: "flex", 
        justifyContent: "center",
        gap: "1px",
        listStyle: "none",
    }
    const liStyles = {
        padding: "0px",
        margin: "0px",
        width: "100%",
        backgroundColor: "turquoise",
        border: "1px solid black",
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
        cursor: "pointer"
    }
    return(
        //estilos de una línea: llave doble style={{ }}
        //estilos en variables: llave simple style={ }
        <header style={{ width: "100%"}}> 
            <nav style={{width: "100%"}}>
                <ul style={ulStyles}>
                    <li style={liStyles}>Home</li> 
                    <li style={liStyles}>About</li>
                    <li style={liStyles}>Career</li>
                    <li style={liStyles}>Education</li>
                </ul>
            </nav>
        </header>
    )
}

/* - - - - - - - - - - - - - - - - PICTURE - - - - - - - - - - - - -  - - - */
const Picture = (props) => {
    const picStyles = {
        borderRadius: "50%",
        width: "300px",
        height: "300px",
        marginTop: "50px",
        marginLeft: "100px",
    }
    return <img style={picStyles} src={props.pic} alt={props.picAlt}/>
}

/* - - - - - - - - - - - - - - - - BIO - - - - - - - - - - - - -  - - - */
const Bio = (props) => {
    const h1Style = {
        fontSize: "50px",
        color: "dodgerblue",
    }
    
    return(
        <div style={{flexDirection: "column", marginLeft: "170px"}}>
            <h1 style={h1Style}> {props.name.toUpperCase()}</h1>
            <h3 style={{marginTop: "20px"}}> Personal information </h3>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Nationality: {props.nationality}</p>
            <h3 style={{marginTop:"70px"}}>Biography</h3>
            <p>{props.bio}</p>
            <h3 style={{marginTop:"70px"}}>Movies</h3>
            <List listName={props.movies}/>
        </div>
    )
}

//Mapeo lista
const List = ({listName}) => {
    return (
        <ul>
            {listName.map((item, i) => 
                <li key={i}>{item}</li>
                )}
        </ul>
    )
}
/* - - - - - - - - - - - - - - - - APP - - - - - - - - - - - - -  - - - */

//En "App" va lo que renderizo = lo que se ve en el navegador
const App=() => {
    const db=[
        {
            name: "Taylor Daniel Lauthner",
            occupation: "Actor",
            nationality: "American",
            DOB: "Feb. 11th, 1992",
            age: "30 years old",
            movies: ["Twilight Saga", "Shark Boy 1, 2", "Runner", "Abduction", "Ridiculous", "Run the Tide", "Scream Queens", "St. Valentine's"],
            avatar: "https://younghollywood.com/images/stories/newsIMG/wenn/20110902/wenn3484998_46_2000_9.jpg",
            bio: "Taylor Daniel Lautner was born on February 11, 1992, in Grand Rapids, Michigan. He has one sibling: a sister named Makena. Lautner began studying karate at the age of six, and began winning tournaments within a year. After, Lautner began training with seven-time world karate champion Mike Chat.",
        }
    ]
    const bioProps={
        name: db[0].name,
        occupation:db[0].occupation,
        nationality:db[0].nationality,
        DOB:db[0].DOB,
        age:db[0].age,
        movies:db[0].movies,
        bio: db[0].bio
    }
    return(
        <div style={{fontFamily: "'Be Vietnam Pro', sans-serif"}}>
            <Header/>
            <section style={{display:"flex", justifyContent:"space-evenly", gap:"10px"}}>
                <Picture pic={db[0].avatar} picAlt={db[0].name}/>
                <Bio {...bioProps}/>
            </section>
        </div>
    )
}


//Acá renderizo App y muestro dónde va (en div 'root')
ReactDOM.render(<App/>, document.getElementById("root"));
