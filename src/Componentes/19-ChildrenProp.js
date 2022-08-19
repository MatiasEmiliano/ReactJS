import React, { useState, useEffect } from 'react';
import Modal from './Modal/Modal';

function ChildrenProp() {
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);


    return <div>
        <h2>Children Props con Modals</h2>
        {showModal1 && <Modal setShowModal={setShowModal1}>
            <p>MODAL 1: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ipsum error dolorum quam deserunt atque ipsa, asperiores voluptas, hic voluptates, dignissimos sapiente voluptate magni! Blanditiis hic dolorum tempora impedit quam!</p>
        </Modal>}

        {/* {showModal2 && <Modal setShowModal={setShowModal2}>
            <p>MODAL 2: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ipsum error dolorum quam deserunt atque ipsa, asperiores voluptas, hic voluptates, dignissimos sapiente voluptate magni! Blanditiis hic dolorum tempora impedit quam!</p>
        </Modal>} */}
        <button onClick={()=>{setShowModal1(true)}}>Modal1</button>
        {/* <button onClick={setShowModal2(true)}>Modal2</button> */}
    </div>
}




export default ChildrenProp;