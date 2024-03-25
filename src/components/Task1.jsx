// import React from 'react'

export const Task1 = ({type}) => {
  return (
    <div className="card">
    <div className="type">{type.typed}</div>
        <div className="price"> $ {type.price} /MONTH</div>
        <hr></hr>
        <div>{type.user.mark} {type.user.value} USER</div>
        <div>{type.storage.mark} {type.storage.value} GB STORAGE</div>
        <div>{type.ulpu.mark} UNLIMITED PUBLIC PROJECTS</div>
        <div>{type.com.mark} COMMUNITY ACCESS</div>
        <div className={type.ulpr.style}>{type.ulpr.mark} UNLIMITED PRIVATE PROJECTS</div>
        <div className={type.ded.style}>{type.ded.mark} DEDICATED PHONE SUPPORT</div>
        <div className={type.free.style}>{type.free.mark} FREE SUBDOMAIN</div>
        <div className={type.month.style}>{type.month.mark} MONTHLY STATUS REPORTS</div>
        <button>BUY</button>
    </div>
     )
}

