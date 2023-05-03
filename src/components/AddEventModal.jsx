import React from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";
import Calendar from "./Calendar.jsx"

export default function ({isOpen, onClose, onEventAdded}) {

    // const [title, setTitle] = useState();
    // const [start, setStart] = useState(newDate());
    // const [end, setEnd] = useState(newDate());

    // const onSubmit = (event) => {
    //     event.preventDeafult();

    //     onEventAdded({
    //         title, start, end
    //     })
    //     onClose();
    // }



//     return(
//         <Modal isOpen={isOpen} onRequestClose={onClose}>
//             <form onSubmit={onSubmit}>
//                 <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />

//                 <div>
//                     <label>Start Date</label>
//                     <Datetime value={start} onChange={date => setStart(date)} />
//                 </div>
//                 <div>
//                     <label>End Date</label>
//                     <Datetime value={end} onChange={date => setEnd(date)} />
//                 </div>
//                 <button> Add Event</button>

//             </form>
//         </Modal>

//     );
};

