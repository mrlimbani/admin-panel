import React from 'react'
import { Card, Button, Form, Row, Col, Container } from 'react-bootstrap';
import { Formik } from 'formik'
 import pic1 from './../../asets/images/logo.png'
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <React.Fragment>

            <Row>
                <Card className='centerBox'>
                    <div className='text-center'>
                        <img style={{height:80}} src={pic1} alt='logo' />
                    </div>
                    <h2 className='mt-3 mb-3 text-center fw-bold'> REGISTRATION </h2>
                    <Card.Text className='text-center text-secondary'>
                        Enter your Username and Password
                    </Card.Text>
                    <Card.Body>
                        <Formik
                            initialValues={{ fName: '', lName: '', email: '', mobile: '', password: '', confPassword: '' }}

                            validate={values => {

                                const errors = {};

                                if (!values.email) {
                                    errors.fName = '! Required';
                                    errors.lName = '! Required';
                                    errors.email = '! Required';
                                    errors.mobile = '! Required';
                                    errors.password = '! Required';
                                    errors.confPassword = '! Required';
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
                                    <container-fluid>
                                        <Row>
                                            <Form.Group as={Col} className='mb-3' controlId='formBasicfName'>
                                                <Form.Control
                                                    type='text'
                                                    name='fname'
                                                    placeholder=' First Name '
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                // value={values.fName}
                                                />
                                                {errors.fName && touched.fName && errors.fName}
                                            </Form.Group>

                                            <Form.Group as={Col} className='mb-3' controlId='formBasiclName'>
                                                <Form.Control
                                                    type='text'
                                                    name='lName'
                                                    placeholder='Last Name '
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.lName}
                                                />
                                                {errors.lName && touched.lName && errors.lName}
                                            </Form.Group>
                                        </Row>
                                    </container-fluid>

                                    <container-fluid>
                                        <Row>
                                            <Col>
                                                <Form.Group className='mb-3' controlId='formBasicemail'>
                                                    <Form.Control
                                                        type='text'
                                                        name='email'
                                                        placeholder='Email'
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
                                                <Form.Group className='mb-3' controlId='formBasicmobile'>
                                                    <Form.Control
                                                        type='number'
                                                        name='number'
                                                        placeholder=' Number'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.number}
                                                    />
                                                    {errors.number && touched.number && errors.number}
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Form.Group as={Col} className='mb-3' controlId='formBasicpassword'>
                                                <Form.Control
                                                    type='password'
                                                    name='password'
                                                    placeholder='Password'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password}
                                                />
                                                {errors.password && touched.password && errors.password}
                                            </Form.Group>

                                            <Form.Group as={Col} className='mb-3' controlId='formBasicconfpassword'>
                                                <Form.Control
                                                    type='password'
                                                    name='confPassword'
                                                    placeholder=' Conform password'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.confPassword}
                                                />
                                                {errors.confPassword && touched.confPassword && errors.confPassword}
                                            </Form.Group>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                                                    <Form.Check type='checkbox' label='Remember me' />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </container-fluid>

                                    <Button className='w-100 p-2 fw-bold' type='submit' disabled={isSubmitting}>
                                        Login
                                    </Button>
                                </form>
                            )}
                        </Formik>
                        <Container>
                            <Row>
                                <Col className='mt-4 text-center'>
                                    Have already an account? <Link to='/login'> login </Link>
                                </Col>
                            </Row>
                        </Container>

                    </Card.Body>
                </Card>
            </Row>

        </React.Fragment >
    )
}

export default RegisterPage;
