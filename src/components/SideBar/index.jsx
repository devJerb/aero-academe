import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBarRoute, SideBtnWrap } from './SideBarElements'

const SideBar = ({ isOpen, toggle }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>About</SideBarLink>
                    <SideBarLink to="control-system" onClick={toggle}>Control System</SideBarLink>
                    <SideBarLink to="primary" onClick={toggle}>Primary</SideBarLink>
                    <SideBarLink to="secondary" onClick={toggle}>Secondary</SideBarLink>
                    <SideBarLink to="leading-edge" onClick={toggle}>Leading Edge</SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to="/dashboard">Account</SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar