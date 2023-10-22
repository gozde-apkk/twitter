import PropTypes from "prop-types";
import Tab from "./Tab";



export default function Header ({title}){
    return (
      
        <header className="sticky h-[106px] top-0 z-10 bg-black/[.65] backdrop-blur-md before:absolte before:inset-0 before:bg-[color:var(--background-primary)] before:opacity-[.65] ">
          <h3 className="px-4 h-[3.313rem] flex items-center text-xl font-bold"> {title} </h3>
          
          <Tab activeTab={"for-you"} >
            <Tab.Items>
                <Tab.Item id="for-you">
                    Sana Özel
                </Tab.Item>
                <Tab.Item id="followings">
                    Takip edilenler
                </Tab.Item>
            </Tab.Items>
            <Tab.Content id ="for-you">
                1.Context
            </Tab.Content>
            <Tab.Content id = "followings">
                2.Context
            </Tab.Content>
         </Tab>
        </header>
      
        
     
    )
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}