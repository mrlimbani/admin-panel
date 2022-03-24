import React from 'react'
import { Button, Card, Row, Form, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../asets/css/auth.css'
import { Formik } from 'formik'
import pic from './../../asets/images/logo.png'
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <React.Fragment>
            <Card className='centerBox'>
                <div className='text-center'>
                    <img style={{height:80}} src={pic} alt='logo' />
                </div>
                <h2 className='mt-3 mb-3 text-center fw-bold'>  LOGIN  </h2>
                <Card.Text className='text-center text-secondary'>
                    Enter your Username and Password
                </Card.Text>
                <Card.Body>
                    <Formik
                        initialValues={{ email: '', password: '' }}

                        validate={values => {

                            const errors = {};

                            if (!values.email) {
                                errors.email = '! Required';
                                errors.password = '! Required'
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}

                        onSubmit={(values, { setSubmitting }) => {
                            console.log(' for a value ==> ', values);
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (

                            <form onSubmit={handleSubmit} >

                                <Container>
                                    <Row>
                                        <Col>
                                            <Form.Group className='mb-3' controlId='formBasicEmail'>
                                                <Form.Control
                                                    type='text'
                                                    name='email'
                                                    placeholder='Enter your Email address'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                />
                                                {errors.email && touched.email && errors.email}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className='mb-3' controlId='formBasicPassword'>
                                                <Form.Control
                                                    type='password'
                                                    name='password'
                                                    placeholder='Enter your password'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password}
                                                />
                                                {errors.password && touched.password && errors.password}
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group as={Col} className='mb-3' controlId='formBasicCheckbox'>
                                                <Form.Check type='checkbox' label='Remember me' />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Link as={Col} className='text text-end' to='/forgot-password'>Forgot Password?</Link>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Button className='w-100 p-2 fw-bold' type='submit' disabled={isSubmitting}>
                                                Login
                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        )}
                    </Formik>
                    <Container>
                        <Row>
                            <Col className='mt-4 text-center'>
                                Don't have an account? <Link to='/register'> Sign Up </Link>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>

        </React.Fragment >
    )
}

export default LoginPage



