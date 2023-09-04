import { React } from 'react'
import './contactus.css'

function Contactus() {

    return (
        <div className='contactUsContainer'>
            <div className='containerInput'>
                <div className="input-group">
                    <input required="" type="text" name="text" autocomplete="off" className="inputContact" />
                    <label className="user-label">First Name</label>
                </div>
            </div>
            <div className='containerInput'>
                <div className="input-group">
                    <input required="" type="text" name="text" autocomplete="off" className="inputContact" />
                    <label className="user-label">Last Name</label>
                </div>
            </div>
            <div className='containerInput'>
                <div className="input-group">
                    <input required="" type="email" name="text" autocomplete="off" className="inputContact" />
                    <label className="user-label">Email</label>
                </div>
            </div>
            <div className='containerInput'>
                <div className="input-group">
                    <textarea required="" type="textarea" name="text" autocomplete="off" className="inputContact" style={{height: '100px', wordWrap: 'soft', resize: 'none'}}/>
                    <label className="user-label">Message</label>
                </div>
            </div>
        </div>

    )
}

export default Contactus
