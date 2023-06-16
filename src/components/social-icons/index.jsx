// Library imports
import styled from "styled-components";

// Components
import { SocialIcon } from "./social-icon";

// JSON
import iconsInfoJSON from "./icons-info.json"

export const SocialIcons = () => {
    return (
        <IconsDiv>
            {
                iconsInfoJSON.map((icon, index) => (
                    <SocialIcon
                        alt={icon.name}
                        svgPaths={icon.paths}
                        key={index}
                    />
                ))
            }
        </IconsDiv>
    )
}

const IconsDiv = styled.div`
    display: flex;
    gap: 15px;
    margin: 10px 0;
`
