import { useEffect } from "react";
import useForm from "../hooks/useForm";


const FormWithCustomHook = () => {

    const { onResetForm, formState, onInputchange, username, email, password } = useForm({
        username: "",
        email: "",
        password: ""
    })

    // const { username, email, password } = formState

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
            <h1>Custom Hook Formulario</h1>
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
            <input
                type="password"
                className="form-control mt-2"
                placeholder="contraseña"
                name="password"
                value={password}
                onChange={onInputchange}
            />
            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
        </>

    );
};

export default FormWithCustomHook;
