import './App.css'
import { useState } from 'react'

export default function BetPlacer({bet,flag}) {

    const [tempBet, settempBet] = useState(0)

    function updateBet(toAdd){
        settempBet(tempBet+toAdd)
    }

    function endbetting(){
        {bet(tempBet)}
        {flag()}
    }

    return (<footer>
    
    <div id="bet">
    <img onClick={()=> updateBet(1)} src="https://brand.lmu.edu/media/wnmd/brand/identitystandards/marks-ceremonial/lmu-ceremonial-mark.png" width={100} height={100} />
    
    <img onClick={()=> updateBet(5)} src="https://brand.lmu.edu/media/wnmd/brand/identitystandards/marks-ceremonial/lmu-ceremonial-mark.png" width={100} height={100} />
    
    <img onClick={()=> updateBet(25)} src="https://brand.lmu.edu/media/wnmd/brand/identitystandards/marks-ceremonial/lmu-ceremonial-mark.png" width={100} height={100} />
    
    <img onClick={()=> updateBet(100)} src="https://brand.lmu.edu/media/wnmd/brand/identitystandards/marks-ceremonial/lmu-ceremonial-mark.png" width={100} height={100} />
    
    <img onClick={()=> updateBet(500)} src="https://brand.lmu.edu/media/wnmd/brand/identitystandards/marks-ceremonial/lmu-ceremonial-mark.png" width={100} height={100} />
    
    <img onClick={()=> updateBet(1000)} src="https://brand.lmu.edu/media/wnmd/brand/identitystandards/marks-ceremonial/lmu-ceremonial-mark.png" width={100} height={100} />
    
    <p> $1 </p>
    <p> $5 </p>
    <p> $25 </p>
    <p> $100 </p>
    <p> $500 </p>
    <p> $1000 </p>
    </ div>

    <div id="betOutput">
    <p>Current Bet: ${tempBet}</p>
    <button onClick={()=> settempBet(0)}>Clear</button>
    <button onClick={()=> endbetting()}>Done</button>
    </div>




    </footer>)

}