import React from "react"
import { HiHome} from 'react-icons/Hi'
import {BiSearch} from 'react-icons/Bi'
import {BiLibrary} from 'react-icons/Bi'
import {BiWorld} from 'react-icons/Bi'




export function Menu(){
    return (
        <div className="outerWrap">
            <div className="App">
                <div className="navBar">
                    <div className=""> 
                       
                    </div>
                    <ul>
                        <li className="active"><HiHome/> Início </li>
                        <li><BiSearch/> Buscar </li>
                        <li><BiLibrary/> Sua Biblioteca </li>
                    </ul>
                    <div className="cookies">
                        <span>Cookies</span></div>
                    <div className="idioma">
                        <span><BiWorld/> Português do Brasil </span>
                    </div>
                </div>
            </div>
       
        </div>
    
    )
}
export default Menu