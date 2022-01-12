import styles from "./Navbar.module.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "/public/assets/logo.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Menu = () => (
  <>
    <p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </p>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <p>
      <Link href="/library">
        <a>Library</a>
      </Link>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={styles.gpt3_navbar}>
      <div className={styles.gpt3_navbar_links}>
        <div className={styles.gpt3_navbar_links_logo}>
          <Link href="/">
            <a>
              <div className={styles.img}>
                <Image src={logo} alt="logo" layout="responsive" />
              </div>
            </a>
          </Link>
        </div>
        <div className={styles.gpt3_navbar_links_container}>
          <Menu />
        </div>
      </div>
      <div className={styles.gpt3_navbar_sign}>
        <p>Sign In</p>
        <button type="button">Sign up</button>
      </div>
      <div className={styles.gpt3_navbar_menu}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className={`${styles.gpt3_navbar_menu_container} scale_up_center`}
          >
            <div className={styles.gpt3_navbar_menu_container_links}>
              <Menu />
            </div>
            <div className={styles.gpt3_navbar_menu_container_links_sign}>
              <p>Sign In</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
