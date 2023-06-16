// Library imports
import { useContext } from "react"
import styled from "styled-components"

// Context
import { ThemeContext } from "../../../context/theme-context"

export const SocialIcon = ({svgPaths}) => {
    const {theme} = useContext(ThemeContext)
    return(
        <Link href="#" theme={theme} >
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
                {
                    svgPaths.map((d, index) => (
                        <path key={index} d={d} />
                    ))
                }
            </svg>
        </Link>
    )
}

const Link = styled.a`
    border-radius: 50%;
    height: 36px;

    svg {
        box-sizing: content-box;
        border-radius: 50%;
        padding: 5px;
        width: 25px;
        
        fill: ${props => props.theme.socialIconFill};
        :hover {
            fill: white;
            background-color: ${props => props.theme.socialIconBackground};
        }
        
        transition: fill 0.3s, background-color 0.3s;
    }
`