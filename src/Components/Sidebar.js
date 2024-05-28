import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReportIcon from "@mui/icons-material/Report";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import HelpIcon from "@mui/icons-material/Help";
import MessageIcon from "@mui/icons-material/Message";
import '../Styles/sidebar.css' ;
function Sidebar() {
  return (
    <div className="menu">
      <div className="logo">
        <SchoolIcon className="logo-icon"/>
        <h2>EduFlex</h2>
      </div>
      <div className="menu-list">
        <a className="item active" href=""><DashboardIcon className="icon " />Dashboard</a>
        <a className="item" href=""><AssignmentIcon className="icon"/>Assignment</a>
        <a className="item" href=""><ReportIcon className="icon"/>Report</a>
        <a className="item" href=""><QueryStatsIcon className="icon"/>Stats</a>
        <a className="item" href=""><MessageIcon className="icon"/>Message</a>
        <a className="item" href=""><HelpIcon className="icon"/>Help</a>
        
      </div>
    </div>
  );
}

export default Sidebar;
