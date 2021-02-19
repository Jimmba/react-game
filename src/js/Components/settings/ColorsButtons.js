import React from 'react';
import { themes } from '../../data/data';
import { Button } from '../header/Button';

export class ColorsButtons extends React.Component {
    render() {
        return themes.map((el, index) => {
            return <Button className={el} key={index} text={el} functionName='changeTheme'/>
        }); 
    }
}