import React,{useState} from 'react'
import Sidebar from '../Components/Sidebar'
import Modal from "react-modal";

const UpdateUser = () => {

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
                    <h3>Update Registered User</h3>
                    <select onChange={openModal}>
                        <option value={null}>Select user</option>
                        <option value="a">User1</option>
                        <option value="b">User2</option>
                        <option value="c">User3</option>
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
                        <input type="text" placeholder='User Id'/>
                        <input type="text" placeholder='User Balance'/>

                        <button>Update Query</button>
                </form>
                
              </div>

            </div>
            
          </Modal>
        
        </section>
    </div>
  )
}

export default UpdateUser