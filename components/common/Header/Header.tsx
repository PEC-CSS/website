import { useState } from 'react';
import styles from '../../../styles/components/Header.module.scss'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_wrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/vercel.svg" alt="helo" />
      </div>
      <div className={styles.list_items_wrapper}>

      </div>
    </nav>
  )
}

export default Header