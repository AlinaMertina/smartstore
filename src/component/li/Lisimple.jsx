import React from 'react';
//ny page no tokony anana import
import 'primeicons/primeicons.css';
export default function Lisimple(props){
    const { infoli } = props;
    return(
        <li>
            <a href={infoli.getLien()}>
                <span class="icon">
                    <i className={`pi ${infoli.getIcone()} _icone`}></i>
                </span>
                <span class="title">{infoli.getNom()}</span>
            </a>
        </li>
    );
}