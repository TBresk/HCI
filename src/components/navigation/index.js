import React from 'react'

import NavigationBar from '../navigationBar'
import Combobox from '../comboBox'
import styles from './style.module.css'

const Navigation = props => (
  <section>
    <NavigationBar activeTab = {props.activeTab}/>
    <Combobox />
  </section>
)

export default Navigation