import 'bootstrap/dist/css/bootstrap.min.css';
import { Dispatch, FormEvent, SetStateAction, useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import styled from 'styled-components';
import './login.module.css';

/* eslint-disable-next-line */
export interface LoginProps {
    onIdSubmit: Dispatch<SetStateAction<string>>;
}

const StyledLogin = styled.div`
    /* background-color: gray; */
`;

export function Login(props: LoginProps) {
    const idRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        idRef.current?.value && props.onIdSubmit(idRef.current.value);
    };

    return (
        <StyledLogin>
            <Container
                className="align-items-center d-flex"
                style={{ height: '100vh' }}
            >
                <Form onSubmit={handleSubmit} className="w-100">
                    <Form.Group>
                        <Form.Label>Enter your Id</Form.Label>
                        <Form.Control type="text" ref={idRef} required />
                    </Form.Group>
                    <Button type="submit" className="mr-2">
                        Login
                    </Button>
                    <Button variant="secondary">Create A New Id</Button>
                </Form>
            </Container>
        </StyledLogin>
    );
}

export default Login;
