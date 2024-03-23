import React from 'react';
import { Handle } from 'reactflow';
import {Link} from 'react-router-dom'


const DeployableUnitNode = ({ data }) => {
  // Calculate width based on label length
  const labelWidth = data.label.length * 8; // Adjust the multiplier as needed for font size

  return (
    <div style={{ width: `${labelWidth}px`, padding: '10px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '5px' }}>
      <Handle type="target" position="left" style={{ background: '#555', borderRadius: '50%' }} />
      <Link to={`catalog/${data.label}`.replaceAll('.', '/')}>{data.label}</Link>
      <Handle type="source" position="right" style={{ background: '#555', borderRadius: '50%' }} />
    </div>
  );
};

export default DeployableUnitNode;
