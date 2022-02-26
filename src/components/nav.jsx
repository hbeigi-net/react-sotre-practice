import React from 'react'
import Btn from './subComponents/button1'
import {BtnOne} from './subComponents/btns'
import {NavLogo} from "./smallENT"
export default function Nav() {
  return (
    <>
        <div className="navbarContainer">
            <div id="lgScreenNav">
                <NavLogo src = "./img/Logo.png"/>
            </div>
        </div>
    </>
  )
}
