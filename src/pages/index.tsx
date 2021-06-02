import styles from '../Styles/Home.module.scss';
import Image from 'next/image';
import MenuLateral from '../components/MenuLateral';
import Header from '../components/Header';


export default function Home() {
  return (
    <div id={styles.container}>

      <Header />

      <div className={styles.contain}>
        <div className={styles.photoContain}>

          <Image
            width={300}
            height={149}
            objectFit="cover"
            src='/Cropped.png'
            className={styles.photo}
          />

          <div className={styles.slideInput} >
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
          </div>
        </div>

        <div className={styles.information}>
          <div className={styles.entregas}>

            <img src="/Box.svg" className={styles.imageBox} alt="" />
            <p>
              Nossas entregas bla bla bla bla
              aqui descreve sobre nossas entregas
            </p>
          </div>


          <div className={styles.money}>

            <img src='/Money.svg' className={styles.imageBox} alt="" />
            <p>
              Nosso métodos de pagamentos
              podem ser dinheiro ou boleto qual
              voce preferir bla bla bla
              (descrevendo sobre os métodos de pagamento)
            </p>
          </div>

          <div className={styles.fone}>

            <img src='/Fone.svg' className={styles.imageBox} alt="" />
            <p>
              Nosso atendimento são bla bla bla bla bla bla (Falando sobre atendimento )
            </p>
          </div>

        </div>

      </div>


    </div>
  )
}
