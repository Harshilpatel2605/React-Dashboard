import React from "react";
import WebhookIcon from "@mui/icons-material/Webhook";
import AppSettingsAltIcon from "@mui/icons-material/AppSettingsAlt";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
const courses = [
  {
    title: "Web Development",
    icon: <WebhookIcon />,
  },
  {
    title: "App Development",
    duration: "2 hours",
    icon: <AppSettingsAltIcon />,
  },
  {
    title: "UI & UX",
    duration: "2 hours",
    icon: <DesignServicesIcon />,
  },
];
function Card() {
  return (
    <div className="card-container">
      {courses.map((item) => (
        <div className="card">
          <div className="card-cover">{item.icon} </div>
          <div className="card-title"> 
            <h2>{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
