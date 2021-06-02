import styles from './Header.module.scss';
import Image from 'next/image';
import MenuLateral from '../MenuLateral';


export default function Header() {
  return (
    <div className={styles.container}>

      <header>
        <Image
          width={60}
          height={60}
          src='/Logo.svg'
        />

          {/* <Image
          width={50}
          height={50}
          src='/Bars.svg'
        /> */}
      <MenuLateral/>
      </header>
    </div>
  )
}
