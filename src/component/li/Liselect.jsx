import React, { useState } from 'react';
import 'primeicons/primeicons.css';
import '../../asset/css/style.css'

export default function Liselect(props){
    const { infoli } = props;
    const [showSubMenu, setShowSubMenu] = useState(false);
    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };
    return(
        <li className='limenu_p'>
            <a href={infoli.getLien()} onClick={toggleSubMenu}>
                <span class="icon">
                    <i className={`pi ${infoli.getIcone()} _icone`}></i>
                </span>

                <span class="title">{infoli.getNom()}</span>
                <i className="pi-angle-down"></i>
            </a>
            {showSubMenu && (
                <div>
                    <ul className="nav flex-column sub-menu">
                        {infoli.getListeEnfant().map((item, index) => (
                        <li key={index}>
                            <a href={item.getLien()}>
                            <span className="title">{item.getNom()}</span>
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
            )}
        </li>
    );
}