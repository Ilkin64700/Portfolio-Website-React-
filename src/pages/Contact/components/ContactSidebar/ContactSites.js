import React from 'react'
import { sitestats } from '../ContactListData'



const ContactSites = () => {
  return (
    <div><ul className="social list-unstyled pt-1 mb-5">
        {sitestats.map((item,index)=>
            <li key={index}>
            <a href={`${item.link}`}>
            {item.icon}
            </a>
          </li>
      )}
  </ul></div>
  )
}

export default ContactSites