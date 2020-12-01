import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <div className="navigation-left">Unwana Essien</div>
      <div>Master's Portfolio</div>
      <Link to="/about">About</Link>
    </div>
  )
}
