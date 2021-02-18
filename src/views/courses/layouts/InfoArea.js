import React from "react";

// core components
import InfoArea from "components/InfoArea/InfoArea.js";

export default function CustomInfoArea({ title, desc, icon, color }) {
  return (
    <InfoArea title={title} description={desc} icon={icon} iconColor={color} />
  );
}
