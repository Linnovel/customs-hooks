import { useCounter } from "../hooks/useCounter"

const CounterWithCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter With Hook: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={() => increment(1)}>+1</button>
            <button className="btn btn-primary" onClick={reset}>Rset</button>
            <button className="btn btn-primary" onClick={() => decrement(2)}>-1</button>
        </>
    )
}

export default CounterWithCustomHook