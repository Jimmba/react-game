import React from 'react';
import { footer } from '../../data/data';
import './footer.scss';

export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div> 
                    <a href={footer.git}>
                        <img src='/src/images/cover.jpg'/>
                    </a>
                    <div class = 'year'>{footer.year}</div>
                    <a href={footer.link}>
                        <img src={footer.rsLogo}/>
                    </a>
                </div>
            </footer>
        )
    }
}