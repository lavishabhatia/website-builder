import React, { memo } from "react";
import PropTypes from "prop-types";

const ProcessItem = ({ icon: Icon, title, description }) => (
  <div className="w-full h-full flex flex-col items-center justify-center text-center">
    <div className="icon-container relative w-16 h-16">
      <Icon className="text-3xl text-green-400" />
    </div>
    <div className="text-green-400 text-2xl mb-2 text-center">{title}</div>
    <p className="text-center">{description}</p>
  </div>
);

ProcessItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default memo(ProcessItem);
