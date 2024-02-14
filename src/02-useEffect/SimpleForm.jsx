import { useEffect, useState } from "react";
import Message from "./Message";

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "mirangel",
        email: "luis@gmail.com",
    });

    const { username, email } = formState;

    const onInputchange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log('useEffect Called!!')
    }, [])

    useEffect(() => {
        // console.log('formstate Called!!')
    }, [formState])

    useEffect(() => {
        // console.log('email Called!!')
    }, [email])



    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input
                type="text"
                className="form-control mt-2"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputchange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="luis@gmail.com"
                name="email"
                value={email}
                onChange={onInputchange}
            />
            {(username === 'mirangel2') && <Message />}
        </>


    );
};

export default SimpleForm;
