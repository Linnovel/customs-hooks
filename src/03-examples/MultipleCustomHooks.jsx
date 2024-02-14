import { useFetch, useCounter } from "../hooks/";



const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1)
    const { data, isLoading, error } = useFetch(
        `https://rickandmortyapi.com/api/character/${counter}`
    );


    return (
        <>
            <h1>Rick and Morty</h1>
            <hr />
            {isLoading ? (
                <div className="alert alert-info text-end">Loading...</div>
            ) : (
                <blockquote className="blockquote text-right">
                    <p className="mb-1 ">{data.name}</p>
                    <img src={data.image} alt="rnm" />
                    <p className="mb-1">{data.species}</p>
                    <footer className="blockquotes-footer">Luis Linares button Clicker</footer>
                </blockquote>
            )}
            <button onClick={() => increment()} className="btn btn-primary" disabled={isLoading}>Character </button>
        </>
    );
};

export default MultipleCustomHooks;
