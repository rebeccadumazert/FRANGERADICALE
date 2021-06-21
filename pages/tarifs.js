import Head from 'next/head'
import { Header } from '../components/Header'
import img from '../public/images/bg1.png'
import style from '../styles/Tarifs.module.css'

function Tarifs() {
  return (
    <>
      <Head>
        <style>{globalStyle}</style>
      </Head>
      <Header></Header>
      <div className={style.container}>
        <p>Pour un devis personnalisé, contactez-nous par mail ou téléphone.</p>
        <div className={style.blackLine} />
        <div className={style.tableContainer}>
          <table>
            <tbody>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>Coupe tondeuse</td>
                <td>15€</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>Coupe courte</td>
                <td>25€</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>Coupe longue</td>
                <td>35€</td>
              </tr>
            </tbody>
          </table>
          <hr className={style.verticalHr} />
          <div className={style.tabLine}></div>
          <table>
            <tbody>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>Couleur racines</td>
                <td>35€</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>
                  Coupleur complète
                </td>
                <td>55€</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>Balayage</td>
                <td>45€ à 80€</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>Patine</td>
                <td>15€ à 35€</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>
                  Décoloration racines
                </td>
                <td>80€</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>
                  Décoloration totale
                </td>
                <td>160€ à 200€</td>
              </tr>
            </tbody>
          </table>
          <hr className={style.verticalHr} />
          <div className={style.tabLine}></div>
          <table>
            <tbody>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>Séchage naturel</td>
                <td>15€</td>
              </tr>
              <tr>
                <td style={{ fontFamily: 'HiroshigeStd' }}>Brushing</td>
                <td>25 à 35€</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={style.mobilePrice}>
          <p>
            <span>Coupe tondeuse :</span> 15€
          </p>
          <p>
            <span>Coupe courte :</span> 25€
          </p>
          <p>
            <span>Coupe longue :</span> 35€
          </p>
          <p>∴</p>
          <p>
            <span>Couleur racines :</span> 35€
          </p>
          <p>
            <span>Couleur complète :</span> 55€
          </p>
          <p>
            <span> Balayage : </span>45€ à 80€
          </p>
          <p>
            <span>Patine : </span>15€ à 35€
          </p>
          <p>
            <span>Décoloration racines :</span> 80€
          </p>
          <p>
            <span>Décoloration totale : </span>160€ à 200€
          </p>
          <p>∴</p>
          <p>
            <span>Séchage naturel : </span>15€
          </p>
          <p>
            <span>Brushing : </span>25 à 35€
          </p>
        </div>
        <div className={style.blackLine} />
      </div>
    </>
  )
}

const globalStyle = `
body {
  background-image: url(${img})
}
`
export default Tarifs
