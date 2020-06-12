import React, {Component} from 'react'
import styles from '../../css/headercss.css'
import RightNav from './RightNav'
import Burger from './Burger'


const Header = () => (
    <div className="navStyle">
        <div className="logo">
            Nav Bar
        </div>
        <Burger/>
    </div>
)

export default Header