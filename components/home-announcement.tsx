import Image from "next/image";
import React, { FC } from "react";
import styles from 'styles/Home.module.css'
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

const HomeAnnouncement: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.centerLogo}>
        <Image
          className={styles.logo}
          src="/eulertools-logo.svg"
          alt="Euler Tools Logo"
          fill
          priority
        />
      </div>
      <div className={styles.center}>
        <h1>Dear Euler Tools community,</h1>
        <br/>
        <p>
          I&apos;m writing to share some news about our project. After two years of hard work and dedication,
          I&apos;ve
          made the difficult decision to shut down <strong style={{color: 'blue'}}>Euler Tools</strong>. I&apos;ve
          been unable to raise the funding we needed
          or find a product market fit that would sustain our business in the long term. It&apos;s a tough pill to
          swallow, but <strong>I wanted to be transparent with you and let you know what&apos;s happening.</strong>
        </p>
        <br/>
        <p>
          I want to take a moment to acknowledge the hard work and commitment of our team. We&apos;ve poured our
          hearts and souls into this project, working tirelessly to develop a product that we believed in. We&apos;ve
          honored every commitment we made, and we&apos;ve learned so much along the way. <strong>While it&apos;s
          disappointing that we weren&apos;t able to achieve our goals, we&apos;re proud of what we accomplished and
          grateful for the opportunity to have pursued this venture.</strong>
        </p>
        <br/>
        <p>
          As I wind down <strong style={{color: 'blue'}}>Euler Tools</strong>, I want to express my gratitude to our
          customers, investors, <strong>and the project
          community at large.</strong> Your support and encouragement meant the world to me, and we&apos;re grateful
          for the
          trust you placed in me. While this journey may be coming to an end, I&apos;m excited about the future and
          the lessons I&apos;ve learned. I&apos;am eager to apply what I&apos;ve learned to my next venture, and
          I&apos;am confident that I&apos;ll come out stronger and more resilient as a result.
        </p>
        <br/>
        <p>
          Thank you for being a part of our journey with <strong style={{color: 'blue'}}>Euler Tools</strong>.
          We&apos;ll be keeping the site up for a little
          while longer, so feel free to reach out if you have any questions or feedback. We&apos;re grateful for the
          experience and look forward to the future.
        </p>
        <br/>
        <p>
          Sincerely,<br/>
          <strong><i>Jorge de los Santos | @tebayoso</i></strong>
        </p>
      </div>

      <div className={styles.center} style={{border: '1px solid blue', borderRadius: '10px', padding: '10px'}}>
        <a
          href="https://t.me/proofxme"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            About <strong style={{color: 'blue'}}>$EULER</strong> Token<span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            If you own tokens and want to know more about the project, please join the <strong style={{color: 'blue'}}>Telegram Community</strong>
          </p>
        </a>
      </div>
    </div>
  )
}

export default HomeAnnouncement;
