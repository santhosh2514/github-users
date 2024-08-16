import Link from "next/link";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li>
                    <Link href='/'> Home</Link>
                </li>
                <li>
                    <Link href='/history'>History</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;