import React from 'react';
import { footer } from '../../data/data';

import gitLogo from '../../../images/git.png';
import rsLogo from '../../../images/rs_school_js.svg';

export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className = 'wrapper'> 
                    <a href={footer.git}  target='_blank'>
                        <img src={gitLogo} alt='git logo' className='git'/>
                    </a>
                    <div className = 'year'>{footer.year}</div>
                    <a href={footer.link}  target='_blank'>
                        <img src={rsLogo} alt='rss logo' className = 'rss'/>
                    </a>
                </div>
            </footer>
        )
    }
}