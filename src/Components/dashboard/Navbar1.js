import React from 'react'
import { MDBCol } from 'mdbreact';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { FaRegCommentDots } from 'react-icons/fa'
import { AiOutlineAlignLeft } from 'react-icons/ai'
import './../../asets/css/navbar.css'
import pic1 from './../../asets/images/profile.png'
import pic2 from './../../asets/images/logo.png'
import { Dropdown } from 'react-bootstrap';
import { FiLogOut } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineLock } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { MdNotificationsActive } from 'react-icons/md'
import { MdLocalShipping } from 'react-icons/md'
import { BiDownload } from 'react-icons/bi'
import { BiErrorAlt } from 'react-icons/bi'



const Navbar1 = () => {
    return (
        <React.Fragment>

            <Navbar className='p-3' bg="dark" expand="lg" variant='light'>

                <img style={{ height: 58 }}
                    className='text-center mt-2'
                    src={pic2}
                    alt="logo" >
                </img>

                <Container>
                    <Navbar.Brand href="#">

                        < AiOutlineAlignLeft style={{ color: 'white' }} /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-2"
                            navbarScroll
                        >
                        </Nav>
                        <MDBCol md="8">
                            <input className="form-control " type="text" placeholder="Search" aria-label="Search" />
                        </MDBCol>
                    </Navbar.Collapse>


                    <li>
                        <Dropdown>
                            <Container>
                                <Dropdown.Toggle style={{ marginLeft: 22, marginTop: -12 }} variant="dark" id="dropdown-basic">

                                    < MdNotificationsActive style={{ color: 'white', fontSize: 24, marginLeft: 10 }} />

                                </Dropdown.Toggle>

                                <Dropdown.Menu className='mt-3 p-3' style={{ width: '370px', height: '350px', }} >
                                    <Dropdown.Item className='notification' href="/0">notification  <Badge className='text-end' bg="primary">9</Badge> </Dropdown.Item>

                                    <Dropdown.Item className='notify1' href="/1"> <MdLocalShipping /> Your order ready for Ship..! </Dropdown.Item>
                                    <h6> Lorem ipsum dolor sit  ipsum dolor sit amet, consectetuer.</h6>

                                    <Dropdown.Item className='notify2' href="/2"> < BiDownload /> Download Complete </Dropdown.Item>
                                    <h6> Lorem ipsum dolor sit  orem ipsum dolor sit amet, consevdvvc </h6>

                                    <Dropdown.Item className='notify3' href="/3"> < BiErrorAlt /> Download Complete </Dropdown.Item>
                                    <h6> Lorem ipsum dolor Lorem ipsum dolor sit amet, consevdvvc </h6>
                                </Dropdown.Menu>
                            </Container>
                        </Dropdown>

                    </li>
                    <li>
                        < FaRegCommentDots style={{ color: 'white', fontSize: 22 }} />

                    </li>
                    <li>
                        <Dropdown>
                            <Dropdown.Toggle style={{ marginLeft: 22, marginTop: -12 }} variant="dark" id="dropdown-basic">
                                <img style={{ height: 50 }} className="rounded-circle" src={pic1} alt='avatar' />

                            </Dropdown.Toggle>
                            <Dropdown.Menu className='mt-2' >
                                <Dropdown.Item className='subDetails' href="/action-1"> <CgProfile />  Edit Profile </Dropdown.Item>
                                <Dropdown.Item className='subDetails' href="/action-2"> < AiOutlineMail />  Inbox </Dropdown.Item>
                                <Dropdown.Item className='subDetails' href="/action-3"> < AiOutlineLock /> Lock Screen </Dropdown.Item>
                                <Dropdown.Item className='subDetails' href="/action-3"> < FiSettings />  Settings </Dropdown.Item>
                                <Dropdown.Item className='subDetails' href="/action-3"> < FiLogOut />  Log out </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>

                </Container>
            </Navbar>

        </React.Fragment>
    )

}
export default Navbar1;