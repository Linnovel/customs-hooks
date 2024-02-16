import { useLayoutEffect } from "react";
import { useFetch, useCounter } from "../hooks/";
import Quotes from "../03-examples/Quotes";

const Layout = () => {
  const { counter, increment } = useCounter(1);
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
          <Quotes quote={data.name} />
          <img src={data.image} alt="rnm" />
          <Quotes author={data.species} />
        </blockquote>
      )}
      <button
        onClick={() => increment()}
        className="btn btn-primary"
        disabled={isLoading}
      >
        Character{" "}
      </button>
    </>
  );
};

export default Layout;
