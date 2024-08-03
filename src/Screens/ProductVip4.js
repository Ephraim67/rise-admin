import React,{useState} from 'react'
import Sidebar from '../Components/Sidebar'
import Modal from "react-modal";

const ProductVip4 = () => {

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
                    <h3>Listed Product VIP 04</h3>
                    <p>Total Product(s): 4</p>
                </div>

                <div className="p-button">
                  <button onClick={openModal}>Add List</button>
                </div>



                <div className="table">
                  <table>

                    <tr>
                      <th>ID</th>
                      <th>Product Title</th>
                      <th>Product Price</th>
                    </tr>

                    <tr>
                      <td>293g3theu</td>
                      <td>Product1</td>
                      <td>Price1</td>
                    </tr>

                    <tr>
                      <td>253rfdh</td>
                      <td>Product1</td>
                      <td>Price1</td>
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
                        {/* <p>Update Recharge</p> */}
                        <input type="text" placeholder='Product Title'/>
                        <input type="text" placeholder='Product Price'/>
                        <input type="file" />

                        <button>List Product</button>
                </form>
                
              </div>

            </div>
            
          </Modal>
        
        </section>
    </div>
  )
}

export default ProductVip4