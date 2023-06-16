// Library Imports
import styled from "styled-components";

// Components
import { Button } from "../../../button";

export const SubmitEmailButton = props =>(
    <SubmitButton
        {...props}
    >
        Notify Me
    </SubmitButton>
)

const SubmitButton = styled(Button)`
    height: 50px;
    color: white;

    width: ${() => window.matchMedia("(max-width: 410px)").matches ? '90vw'
    : window.matchMedia("(max-width: 810px)").matches ? '400px'
    : '150px'};

`