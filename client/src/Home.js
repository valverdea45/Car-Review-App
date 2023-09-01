export function Home({ user }) {
    

    return (
        <div>
            {user ? 
            (<h1>{`Welcome! ${user.username} to the #1 car review website!`}</h1>) 
            : <h1>Welcome to the #1 car review website!!</h1>}
        </div>
    )
}

export default Home;