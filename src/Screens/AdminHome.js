import React from 'react'
import Sidebar from '../Components/Sidebar'
import file from '../Images/short-receipt-template-with-barcode.jpeg'

const AdminHome = () => {
  return (
    <div className='dashb'>
       

        <section className='dashboard'>

          <Sidebar/>

          <main>
          {/* <Header/> */}

          <section className='left'>
         
            <div className="admin-file">
              <img src={file} alt="" />
            </div>


          </section>

          </main>
        
        </section>
    </div>
  )
}

export default AdminHome