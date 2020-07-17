import React from "react";

const btnSettings = (props) => {
  const bntSet = props;
  return (
    <div className="Settings">
      <Link to="/config">
        <button data-testid="btn-settings" className="config" value={bntSet} >Configurações</button>
      </Link>
    </div>
  );
};

exports default btnSettings;