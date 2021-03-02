
export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();

    const paths = data.map(d => {
        return {
            params: {id : d.id.toString()}
        }
    })

    return ({
        paths,
        fallback: false
    })
}

const DetailPost = () => {
    return (
        <div>
            <h1>Details Post</h1>
        </div>
    )
}

export default DetailPost
