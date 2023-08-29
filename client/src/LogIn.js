function LogIn() {

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <div>
            <h3>Try loging In!</h3>
            <form onSubmit={handleSubmit}>
                <input/>
            </form>
        </div>
    )
}

export default LogIn;


// return (
//     <div>
//         <h1>Add a Pokemon!</h1>
//         <form onSubmit={handleSubmit} >
//             <input onChange={(e) => setPokemonName(e.target.value)} value={pokemonName} type="text" placeholder="Pokemon name"/>
//             <input onChange={(e) => setPokemonHp(e.target.value)} value={pokemonHp} type="number" placeholder="hp"/>
//             <input onChange={(e) => setPokemonImage(e.target.value)} value={pokemonImage} type="text" placeholder="sprite URL"/>
//             <button type="submit">Add Pokemon</button>
//         </form>
//         {isInvalidInput ? (
//             <p>Oops - don't forget to fill out all fields above</p>
//         ) : null}
//         <p>note: when adding a pokemon it gives it a chance to be found in the wild</p>
//     </div>
// )
// }
