import './App.css'
import Lottery from './Lottery'
// import TicketNum from './ticketNum'
// import Ticket from './Ticket'

function App() {

  return (
    <>
    
     <div>
      <Lottery n={3} winningSum={15}/>
      {/* <Ticket ticket={[0,1,2]}/>
      <Ticket ticket={[5,7,6,3,5]}/>
      <Ticket ticket={[6,9,8]}/> */}
        {/* <TicketNum num={7} />
        <TicketNum num={7} />
        <TicketNum num={7} /> */}
           {/* <Lottery/> */}
         </div>

    </>
  )
}

export default App
