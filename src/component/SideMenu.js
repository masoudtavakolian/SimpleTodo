import React,{useContext} from 'react'
import {useState} from 'react'
import DateRangeIcon from '@mui/icons-material/DateRange';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import './SideMenu.css'
import { wichpanelcontext } from '../App';
export default function SideMenu(props) {

  const {v1:wichpanel,v2:setwichpanel}=useContext(wichpanelcontext);
  const [removefirststate,setremovefirststate]=useState(false);
    
    if(!props.menu && !removefirststate)
      setremovefirststate(true);
    
    return (
      <div className={"menupanel "+((!removefirststate)?"firststatepanel":"")+((props.menu)?" showmenu":"")}>

        <div className="into" >
          <span className="sp2"  >
          <span><MoveToInboxIcon className="dt" sx={{marginRight:"10px",width:"20px",height:"20px",color:"#109bad"}}></MoveToInboxIcon></span>
            <span>inbox</span>
          </span>

          <span style={(wichpanel=="today")?{backgroundColor:"#eee"}:{backgroundColor:""}} onClick={()=>setwichpanel("today")}>
            <span><DateRangeIcon className="dt" sx={{marginRight:"10px",width:"20px",height:"20px",color:"#0f018a"}}></DateRangeIcon></span>
            <span>Today Tasks</span>
          </span>
          
          <span style={(wichpanel=="completed")?{backgroundColor:"#eee"}:{backgroundColor:""}} className="sp3" onClick={()=>setwichpanel("completed")}>
          <span><AssignmentTurnedInIcon className="dt" sx={{marginRight:"10px",width:"20px",height:"20px",color:"#4f9b11 "}}></AssignmentTurnedInIcon></span>
            <span>Completed Tasks</span>
          </span>
          
        </div>
        {/* <div className="menuitems newtask">
          New Task
        </div>
        <div className="menuitems showalltask">
          Show all Task
        </div>
        <div className="menuitems completedtask">
          Show completed tasks
        </div>
        <div className="menuitems notcompletedtask">
          Show not completed tasks
        </div> */}
      </div>
    )
}
