import React,{useState} from 'react'
import Sidebar from '../Components/Sidebar'
import Modal from "react-modal";

const RecordVip1 = () => {

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
                <div className='d-list'>
                    <h3>Record Updater VIP 01</h3>
                  <button onClick={openModal}>Add List</button>
                </div>

                <div className="table">
                  <table>

                    <tr>
                      <th>ID</th>
                      <th>Change Price</th>
                      <th>Change Product Profit</th>
                    </tr>

                    <tr>
                      <td>87GSFR6</td>
                      <td>$300</td>
                      <td>$50</td>
                    </tr>

                    <tr>
                      <td>87GSFR6</td>
                      <td>$300</td>
                      <td>$50</td>
                    </tr>

                  </table>
                </div>

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
                        <input type="text" placeholder='Record Id'/>
                        <input type="text" placeholder='Change Price'/>
                        <input type="text" placeholder='Change product profit'/>

                        <button>Update Price</button>
                </form>
                
              </div>

            </div>
            
          </Modal>
        
        </section>
    </div>
  )
}

export default RecordVip1