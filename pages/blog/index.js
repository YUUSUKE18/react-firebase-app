import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }
    
}

const index = ({data}) => {
    return (
        <div>
            <h2>My Page</h2>
            {data.map(d => (
                <Link href={'/blog/' + d.id}key={d.id}>
                    <a>
                        <h3>{d.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    )
}


export default index
