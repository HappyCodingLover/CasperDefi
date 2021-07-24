import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import SocialButton from '../components/social-button'

export default function Home() {
  const [theme, setTheme] = React.useState('light');

  const colors: any = {
    light: {
      color: '#786394',
      backgroundColor: '#786394',
    },

    dark: {
      color: '#ffffff',
      backgroundColor: '#1D0E31',
    }
  }

  return (
    <div>
      <Head>
        <title>CasperDefi</title>
        <meta name="description" content="CasperDefi Homepage " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="apppad" style={{ backgroundImage: theme === 'light' ? "url('./bg-apppad_light.svg')" : "url('./bg-apppad.svg')" }}>
        <div>
          <div className="apppad-title">
            <div className="apppad-title-container">
              <Image src={theme === 'dark' ? "/title.svg" : '/title_light.svg'} layout="fill" alt="apppad-title"
              />
            </div>
          </div>

          <div className="apppad-theme-controller">
            <div className="apppad-theme-controller__switch">
              <Image src={theme === 'light' ? "/sun-active.svg" : "/sun.svg"} width={10} height={10} alt="sun" onClick={() => setTheme('light')} />
              <div style={{ fontSize: 36, color: theme === 'light' ? '#786394' : '#fff', fontWeight: 'bolder' }}>{`/`}</div>
              <Image src={theme === 'dark' ? "/moon-active.svg" : "/moon.svg"} width={10} height={10} alt="moon" onClick={() => setTheme('dark')} />
            </div>
            <div className="apppad-theme-controller__text" style={{ color: colors[theme].color }}>Multichain Defi Suite</div>
          </div>

          <div className="apppad-container-border">
            <div className="apppad-container" style={{ backgroundColor: colors[theme].backgroundColor }}>
              <div className="apppad-container__button apppad-container__button-tracker">
              </div>

              <div className="apppad-container__button apppad-container__button-farms">
              </div>

              <div className="apppad-container__button apppad-container__button-bridge">
              </div>

              <div className="apppad-container__button apppad-container__button-insurance">
              </div>

              <div className="apppad-container__button apppad-container__button-shop">
              </div>

              <div className="apppad-container__button apppad-container__button-wallet">
              </div>

              <div className="apppad-container__button apppad-container__button-nft">
              </div>

              <div className="apppad-container__button apppad-container__button-api">
              </div>

              <div className="apppad-container__button apppad-container__button-casperpad">
              </div>

              <div className="apppad-container__button apppad-container__button-docs">
              </div>
            </div>
          </div>

          <div className="apppad-social">
            <SocialButton icon="discord" theme={theme} />
            <SocialButton icon="medium" theme={theme} />
            <SocialButton icon="twitter" theme={theme} />
            <SocialButton icon="telegram" theme={theme} />
          </div>
        </div>
      </div>
    </div>
  )
}
