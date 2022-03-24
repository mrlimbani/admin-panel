import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { BiHomeAlt } from 'react-icons/bi'
import { Container } from 'react-bootstrap';
// import './../../asets/css/sidebar.css'
import pic1 from './../../asets/images/profile.png'


const SidebarCom = () => {
    return (
        <React.Fragment>
            <ProSidebar style={{ height: '100vh' }}>
                <SidebarHeader>
                    <Container>
                        <div className='text-center mt-3 mb-3'>
                            <img style={{ width: 140, borderRadius: 85 }}
                                src={pic1}
                                alt="profile" />
                        </div>
                        <h6 className='text-center fw-bold'> Aakash Patel </h6>
                        <h6 className='text-center'> GENERAL MANAGER. </h6>
                    </Container>

                </SidebarHeader>
                <Menu iconShape='square'>
                    <SubMenu icon={<BiHomeAlt />} title='Dashboard'>
                        <MenuItem> Default</MenuItem>
                        <MenuItem>E-Commerce</MenuItem>
                        <MenuItem> University </MenuItem>
                        <MenuItem> Crypto </MenuItem>
                        <MenuItem> Server </MenuItem>
                        <MenuItem> Project </MenuItem>
                    </SubMenu>

                    <SubMenu icon={<BiHomeAlt />} title='Widgets'>
                        <MenuItem> General</MenuItem>
                        <MenuItem>Chart</MenuItem>
                    </SubMenu>

                    <SubMenu icon={<BiHomeAlt />} title='Base'>
                        <MenuItem> Typography</MenuItem>
                        <MenuItem>Avtars</MenuItem>
                        <MenuItem> Helper-Classes </MenuItem>
                        <MenuItem> Grid </MenuItem>
                        <MenuItem> Tag & pills </MenuItem>
                        <MenuItem> Progress </MenuItem>
                        <MenuItem> Modal </MenuItem>
                        <MenuItem> Alert </MenuItem>
                        <MenuItem> Tooltip </MenuItem>
                        <MenuItem> Spinners </MenuItem>
                        <MenuItem> Drop down </MenuItem>
                        <SubMenu icon={<BiHomeAlt />} title='Tabs'>
                            <MenuItem> Bootstrap Tabs </MenuItem>
                            <MenuItem> Line Tabs </MenuItem>
                        </SubMenu>
                        <MenuItem> Accordion </MenuItem>
                        <MenuItem> Nav </MenuItem>
                        <MenuItem> Shadow </MenuItem>
                        <MenuItem> list </MenuItem>
                    </SubMenu>
                    <SubMenu icon={<BiHomeAlt />} title='Advance'>
                        <MenuItem> Scrollable </MenuItem>
                        <MenuItem> Bootstrap Notify </MenuItem>
                        <MenuItem> Rating </MenuItem>
                        <MenuItem> Dropzone </MenuItem>
                        <MenuItem> Tour </MenuItem>
                        <MenuItem> Slick Slider </MenuItem>
                        <MenuItem> Carousel </MenuItem>
                        <MenuItem> Ribbons </MenuItem>
                        <MenuItem> Pagination </MenuItem>
                        <MenuItem> Steps </MenuItem>
                        <MenuItem> Breadcrumb </MenuItem>
                        <MenuItem> Range Slider </MenuItem>
                        <MenuItem> Image Cropper </MenuItem>
                        <MenuItem> Sticky </MenuItem>
                        <MenuItem> Drag And Drop </MenuItem>
                        <MenuItem> Upload </MenuItem>
                    </SubMenu>

                    <SubMenu icon={<BiHomeAlt />} title='Icons'>
                        <MenuItem> Flag Icon </MenuItem>
                        <MenuItem> Fontawesome Icon </MenuItem>
                        <MenuItem> Ico Icon </MenuItem>
                        <MenuItem> Themify Icon </MenuItem>
                        <MenuItem> Feather Icon </MenuItem>
                        <MenuItem> Whether Icon </MenuItem>
                    </SubMenu>


                    <SubMenu icon={<BiHomeAlt />} title='Gallery'>
                        <MenuItem> Gallery Grid </MenuItem>
                        <MenuItem> Gallery Grid With Desc </MenuItem>
                        <MenuItem> Masonry Gallery </MenuItem>
                        <MenuItem> Edge Style </MenuItem>
                        <MenuItem> Masonry With Desc </MenuItem>
                        <MenuItem> Hover Effect </MenuItem>
                    </SubMenu>

                    <SubMenu icon={<BiHomeAlt />} title='Forms'>
                        <MenuItem> Form Controls </MenuItem>
                        <MenuItem> Form Widgets  </MenuItem>
                        <MenuItem> Form Layout </MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        </React.Fragment>
    )

}
export default SidebarCom;