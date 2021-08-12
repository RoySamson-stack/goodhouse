import React from "react"


function Profile({image, name, title}){
  return(
    <div className="flex absolute">
      <div className="p-2 bg-white w-1/2 flow-root grid grid-flow-row grid-rows-3">
      <img src={image} className="w-2/5 rounded"/>
      <h1 className="font-bold capitalize text-xl">{title}</h1>
      <h1 className="">{name}</h1>
      </div>
    </div>
  )
}
export default Profile