import React from 'react'

import Logo from '../logo'
import Navigation from '../navigation'

import styles from './style.module.css'

const NavigationHeader = () => (
  <section className={styles.navigationHeader}>
      <Logo />
      <Navigation />
  </section>
)
export default NavigationHeader