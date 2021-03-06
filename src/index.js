import React from 'react' 
import ReactDOM from 'react-dom'
import './css/index.css'
import './css/mobile.css'
import './components/First'
import First from './components/First'
import './components/Second'
import Second from './components/Second'
import './components/Third'
import Third from './components/Third'
import './components/Fourth'
import Fourth from './components/Fourth'
import './components/Fifth'
import Fifth from './components/Fifth'
import './components/Sixth'
import Sixth from './components/Sixth'
import './components/Seventh'
import Seventh from './components/Seventh'
import './components/Mobile'
import Mobile from './components/Mobile'



ReactDOM.render(
    <>
    <div className='desktop'>
    <div id='firstSection'>
    <First/>
    </div>
    <div id='secondSection'>
    <Second/>
    </div>
    <div id='thirdSection'>
    <Third/>
    </div>
    <div id='fourthSection'>
    <Fourth/>
    </div>
    <div id='fifthSection'>
    <Fifth/>
    </div>
    <div id='sixthSection'>
    <Sixth/>
    </div>
    <div id='seventhSection'>
    <Seventh/>
    </div>
    </div>

    <div className='mobile'>
        <Mobile/>
    </div>
    
    </>,
    document.getElementById('root')

)