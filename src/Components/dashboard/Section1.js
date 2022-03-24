import React from 'react'
import { Breadcrumb, Card, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { BiHome } from 'react-icons/bi'
import { AiFillEye } from 'react-icons/ai'
import { FaSellsy } from 'react-icons/fa'
import { MdMonetizationOn } from 'react-icons/md'
import { MdDataExploration } from 'react-icons/md'
import { FiThumbsUp } from 'react-icons/fi'
import './../../asets/css/section1.css'
import pic1 from './../../asets/images/grossprofit.png'

const Section1 = () => {


    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Breadcrumb className='mx-2 my-4' >
                        <Breadcrumb.Item href='#'>
                            <BiHome style={{ fontSize: 18, marginLeft: 20 }} />
                        </Breadcrumb.Item>
                        <Breadcrumb.Item href='#'>
                            Dashboard
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>Default</Breadcrumb.Item>
                    </Breadcrumb>


                    <Col className='mt-3' xl={12}>
                        <Row>
                            <Col md={3}>
                                <Card className='cardEdit'>
                                    <Card.Body className='text-center'>
                                        <Card.Title className='fw-bold'> Total Visits  </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted"> < AiFillEye style={{ fontSize: 46, marginTop: 32 }} /> </Card.Subtitle>
                                        <Card.Text className='mt-3'>
                                            <strong className='years'>  $5789
                                                <sup>+</sup> </strong>
                                        </Card.Text>
                                        <Card.Link href="#"></Card.Link>
                                        <Card.Link href="#"></Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>


                            <Col md={3}>
                                <Card className='cardEdit' >
                                    <Card.Body className='text-center'>
                                        <Card.Title className='fw-bold'>Total Sale</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted"> < FaSellsy style={{ fontSize: 46, marginTop: 32 }} /> </Card.Subtitle>
                                        <Card.Text className='mt-3'>
                                            <strong className='years'> $4986
                                                <sup>+</sup>
                                            </strong>
                                        </Card.Text>
                                        <Card.Link href="#"></Card.Link>
                                        <Card.Link href="#"></Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>


                            <Col md={3}>
                                <Card className='cardEdit'>
                                    <Card.Body className='text-center'>
                                        <Card.Title className='fw-bold'>  Total Value </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted"> < MdMonetizationOn style={{ fontSize: 46, marginTop: 32 }} /></Card.Subtitle>
                                        <Card.Text className='mt-3'>

                                            <strong className='years'>  $8568
                                                <sup>+</sup>
                                            </strong>
                                        </Card.Text>
                                        <Card.Link href="#"> </Card.Link>
                                        <Card.Link href="#"> </Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col md={3}>
                                <Card className='cardEdit'>
                                    <Card.Body className='text-center'>
                                        <Card.Title className='fw-bold' > Years Of Experience </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted"> < MdDataExploration style={{ fontSize: 44, marginTop: 15 }} /> </Card.Subtitle>
                                        <Card.Text>
                                            <strong className='years'> 10
                                                <sup>+</sup>
                                            </strong>
                                        </Card.Text>
                                        <Card.Link href="#"> </Card.Link>
                                        <Card.Link href="#"> </Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>


                    {/* <Col className='mt-4' xl={12}> */}
                    <Row className='mt-4'>
                        <Col sm={4}>

                            <Card className='profit'>
                                <Card.Body>
                                    <Card.Title><h4 className='fw-bold'> TOTAL PROFIT </h4></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">All Custom income</Card.Subtitle>
                                    <Card.Text>
                                        <img style={{ width: 350, height: 325 }} src={pic1} alt='graph' />
                                    </Card.Text>

                                    {/* <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link> */}
                                    <Card.Text>
                                        <li style={{ listStyle: 'square', fontSize: 25 }}> Total Profit  </li>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col sm={4}>
                            <Card className='progress-media'>
                                <Card.Body>
                                    <div className='d-flex'>
                                        <div className='flef-grow-1 w-100'>
                                            <Card.Title><h4 className='fw-bold'> TOTAL REVIEW </h4> </Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted"> Customer Review</Card.Subtitle>
                                        </div>
                                        <div className='up'>
                                            < FiThumbsUp style={{ fontSize: 30 }} />
                                        </div>
                                    </div>
                                    <Card.Text>
                                        < ProgressBar placeholder='65%' className='progress' now={65}></ProgressBar>
                                    </Card.Text>
                                    <Card.Subtitle className="text-muted"> change </Card.Subtitle>
                                    <Card.Subtitle className="mb-3 text-end text-muted"> 65% </Card.Subtitle>

                                    <Card.Link href="#"></Card.Link>
                                    <Card.Link href="/"></Card.Link>
                                </Card.Body>
                            </Card>

                            <Card className='progress-media mt-4'>
                                <Card.Body>
                                    <div className='d-flex'>
                                        <div className='flef-grow-1 w-100'>
                                            <Card.Title><h4 className='fw-bold'> TOTAL FEEDBACK </h4> </Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted"> feedback</Card.Subtitle>
                                        </div>
                                        <div className='up'>
                                            < FiThumbsUp style={{ fontSize: 30 }} />
                                        </div>
                                    </div>
                                    <Card.Text>
                                        < ProgressBar placeholder='65%' className='progress' now={85}></ProgressBar>
                                    </Card.Text>
                                    <Card.Subtitle className="text-muted"> change </Card.Subtitle>
                                    <Card.Subtitle className="mb-3 text-end text-muted"> 85% </Card.Subtitle>

                                    <Card.Link href="/"></Card.Link>
                                    <Card.Link href="/"></Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={4}>@@3@@</Col>
                    </Row>

                </Row>

            </Container>

        </React.Fragment>
    )
}

export default Section1;