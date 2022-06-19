import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/creators" target="_blank">Creators</FooterLink>
                            <FooterLink onClick={() => window.open("https://hau.edu.ph/contact_us/", "_blank")}>Contact</FooterLink>
                            <FooterLink onClick={() => window.open("https://hau.edu.ph/international_affairs/ia_partnersandlinkages.php#intacc", "_blank")}>Support</FooterLink>
                            <FooterLink onClick={() => window.open("https://hau.edu.ph/hrm/", "_blank")}>Sponsorships</FooterLink>
                            <FooterLink onClick={() => window.open("https://hau.edu.ph/privacy_policy/", "_blank")}>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Features</FooterLinkTitle>
                            <FooterLink onClick={() => window.open("https://forms.gle/GQcKA12GnRTN5RHj8", "_blank")}>Assessment</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMediaWrap>
                <SocialMedia>
                    <SocialLogo to='/aeronautics'>Take Flight</SocialLogo>
                    <WebsiteRights>HAU © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.facebook.com/holyangel1933/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="https://www.instagram.com/holyangel1933/?hl=en" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="https://twitter.com/holyangel1933?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="https://www.youtube.com/user/1HolyAngelUniversity" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="https://www.linkedin.com/school/holyangel1933/" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMedia>
                </SocialMediaWrap>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer