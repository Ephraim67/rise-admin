import React,{useState} from 'react'
import Sidebar from '../Components/Sidebar'
import Modal from "react-modal";

const Profit = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    function openModal(){
        setIsModalOpen(true);
    }


  return (
    <div className='dashb'>
       

        <section className='dashboard'>

          <Sidebar/>

          <main>

          <section className='left'>

            <div className="users">
                <form className='d-form'>
                    <h3>Update Profit</h3>
                    <select onChange={openModal}>
                        <option value="">Select user</option>
                        <option value="">User1</option>
                        <option value="">User2</option>
                        <option value="">User3</option>
                    </select>
                </form>
            </div>


          </section>

          </main>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={toggleModal}
            contentLabel="Example Modal"
            className={`bg-transparnt`}
            style={{ 
              overlay: {
                position: "fixed",
                top: "0",
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "hsla(0, 0%, 0%, .8)",
                zIndex:100000,
                
              },
            }}
          >
            <div className='modal1' onClick={() => setIsModalOpen(false)}>
              <div className='modal1-content'>
                <form className='modal-form'>
                        {/* <p>Update Recharge</p> */}
                        <input type="text" placeholder='Profit Amount'/>
                        <input type="text" placeholder='Last Total Amount'/>
                        <input type="text" placeholder='User Id'/>

                        <button>Update Profit</button>
                </form>
                
              </div>

            </div>
            
          </Modal>
        
        </section>
    </div>
  )
}

export default Profit