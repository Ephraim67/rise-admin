import React from 'react'

const SignIn = () => {
  return (
    <div className="signin">

    
        <div className='modal1'>
            <div className='modal1-content'>
                <form className='modal-form'>
                        <input type="text" placeholder='Name'/>
                        <input type="password" placeholder='Password'/>
                        {/* <input type="text" placeholder='Confirm Password'/> */}

                        <button>SignIn</button>
                </form>
                
            </div>

        </div>

    </div>
  )
}

export default SignIn