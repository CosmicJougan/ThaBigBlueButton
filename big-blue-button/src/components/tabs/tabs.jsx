import React from "react";
import './tabs.css';

function Tabs(){
    const Tab= () =>
    {
        return(
            <div >
                <div className="tab">
                    <div className="tabContent">
                        <div className="tabHeader centerVertically">
                            <div className="tabContent">
                                Stefan
                            </div>
                        </div>
                            10 uur
                        <div className="drivenKM">
                            96km
                        </div>
                    </div>  
                </div>
            </div>
            ) 
        }

    return(
       <div className="returnDiv">
           <table className="Grid">
            <tr >
                <td>Maandag</td>
                <td>Dinsdag</td>
                <td>Woensdag</td>
                <td>Donderdag</td>
                <td>Vrijdag</td>
                <td>Zaterdag</td>
                <td>Zondag</td>
                </tr>
            <tr className="appearFT">
            <td id="monday">
                <Tab/> <Tab/> <Tab/>
            </td>
            <td id="tuesday">
                <Tab/>
            </td>
            <td id="wednesday">
                <Tab/>
            </td>
            <td id="thursday"> 
                <Tab/>
            </td>
            <td id="fridayday">
                <Tab/>
            </td>
            <td id="saturday">
            <Tab/><Tab/><Tab/><Tab/>
            </td>
            <td id="sunday">
            <Tab/><Tab/>
            </td>
            </tr>
            <tr className="opgetelt">
            <   td><Tab/></td>
               <td><Tab/></td>
               <td><Tab/></td>
               <td><Tab/></td>
               <td><Tab/></td>
               <td><Tab/></td>
               <td><Tab/></td>
            </tr>
           </table>
       </div>
    )
}
export default Tabs;