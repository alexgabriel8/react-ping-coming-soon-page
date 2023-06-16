import { useState } from "react"
import { Header } from "../../components/header"
import { LaunchingSoonContainer } from "../../components/launching-soon"
import { SocialIcons } from "../../components/social-icons"
import { Footer } from "../../components/footer"

export const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 810 ? true : false)

    window.addEventListener('resize', () => {
        window.innerWidth <= 810 ? setIsMobile(true) : setIsMobile(false)
    })

    return(
        <>
            <Header />
            <LaunchingSoonContainer isMobile={isMobile} />
            <SocialIcons />
            <Footer isMobile={isMobile} />
        </>
    )
}