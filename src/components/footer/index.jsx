import styled from "styled-components";

export const Footer = props => (
    <StyledFooter {...props}>
          <p>&copy; Copyright Ping. All rights reserved.</p>
    </StyledFooter>
)

const StyledFooter = styled.footer`
    margin-bottom: 50px;
    font-size: ${props => props.isMobile ? '1.7rem' : '2rem'};
`