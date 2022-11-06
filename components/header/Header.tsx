import styles from './Header.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
export const Header = () => {
    return <div className={`${styles.header}`}>
        <div className={`${styles['text-logo']}`}>
            Afto
        </div>
        <NavBar/>
    </div>
}

const NavBar = ()=>{
    const router = useRouter();
    return <div className={`${styles.navbar}`}>
        <div className={`${styles.sidebar}`}>
            {/* <i */}

        </div>
        <div className={`${styles.horizontalbar}`}>

                <li className={`${router.pathname == "/" ? "active" : ""}`}>
                <Link style={{ padding: "10px 15px" }} href="/" >
                Home
              </Link>
            </li>
            <li className={`${router.pathname == "#services" ? "active" : ""}`}>
              <Link style={{ padding: "10px 15px" }} href="#services">
                Services
              </Link>
            </li>
            <li className={`${router.pathname == "#projects" ? "active" : ""}`}>
                <Link style={{ padding: "10px 15px" }} href="#projects">
                Projects
              </Link>
            </li>
            <li className={`${router.pathname == "#blog" ? "active" : ""}`}>
              <Link style={{ padding: "10px 15px" }} href="#blog">
                Blog
              </Link>
            </li>
            <li className={`${router.pathname == "#pricing" ? "active" : ""}`}>
              <Link style={{ padding: "10px 15px" }} href="#pricing">
                Pricing
              </Link>
            </li>
            <li className={`${router.pathname == "#contact" ? "active" : ""}`}>
              <Link style={{ padding: "10px 15px" }} href="#contact">
                Contact
              </Link>
            </li>
            </div>
    </div>
}