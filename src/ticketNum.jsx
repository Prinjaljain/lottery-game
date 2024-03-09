import "./TicketNum.css";

// function TicketNum( {num} ) {
//   return (
//     <div>  
//         <TicketNum num={ticket[0]}/>
//         <TicketNum num={ticket[1]}/>

//     </div>
//   )
// }

// export default TicketNum

export default function ticketNum({num}){
    return <span className="TicketNum">{num}</span>
}