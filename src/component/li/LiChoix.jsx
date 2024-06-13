import React from 'react';
//ny page no tokony anana import
import 'primeicons/primeicons.css';
import Liselect from './Liselect';
import Lisimple from './Lisimple';

export default function LiChoix(props){
    const { infoli } = props;
    return(
        <>
          {infoli.getListeEnfant() === undefined ? (
            <Lisimple infoli={infoli} />
          ) : (
            <Liselect infoli={infoli} />
          )}
        </>
    );
}
