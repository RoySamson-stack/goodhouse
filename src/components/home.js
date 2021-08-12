import React from "react"
import Profile from "./profile"


function Home(){
return(
				<div className="bg-blue-400 h-screen">
					<div className="flow-root ">
							<div className="float-right m-4 w-2/5 bg-blue-700 h-screen flex p-2">
							<input type="" name="" className="h-2/5 mt-24 flex"/>
							</div>
							<vr className="text-black "/>
							<div className="float-left m-4 " >
								<Profile image="https://www.homestratosphere.com/wp-content/uploads/2018/02/single-family-detached-home.jpg" 
								title="Profile" name="single family(detached)"/>
								<Profile image="https://www.homestratosphere.com/wp-content/uploads/2018/02/condominium-building.jpg" 
								title="Profile" name="apartment" className="flex "/>
								<Profile image="https://www.homestratosphere.com/wp-content/uploads/2018/02/apartment-building-hs.jpg" 
								title="Profile" name="co-op" className="flex "/>
								<Profile image="https://www.homestratosphere.com/wp-content/uploads/2018/02/co-op-building-hs.jpg" 
								title="Profile" name="townhome" className="flex "/>
							</div>
					</div>
				</div>
			)
}
export default Home