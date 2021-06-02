import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import Link from 'next/link';

import styles from './Style.module.scss';
import { IconContext } from 'react-icons'
import Image from 'next/image';

function MenuLateral() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>


        <div className={styles.navbar}>
          <Link href='#' >
            <FaIcons.FaBars onClick={showSidebar} size="35" />
          </Link>
        </div>


        <nav className={sidebar ? styles.navMenu : styles.navMenuActive}>
          <ul className={styles.navMenuItems} onClick={showSidebar}>
            <li className={styles.navbarToggle}>
              <Image
                width={60}
                height={60}
                src='/Logo.svg'
              />
              <Link href='#' >
                <AiIcons.AiFillCloseCircle color='#000' size="35" />
              </Link>
            </li>
            <li className={styles.navText}>
            <Image
                width={20}
                height={20}
                src='/icon/contato.svg'
              />
              <Link href='/' >

                <span>Contato</span>
              </Link>
            </li>
       
            <li className={styles.navText}>
            <Image
                width={50}
                height={50}
                src='/Logo.svg'
              />
              <Link href='/' >

                <span>Em-Breve</span>
              </Link>
            </li>
       
       
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default MenuLateral;