import React, { useState } from 'react';
import settingIcon from '../../../utils/images/setting.png';
import ConfigPanel from './config_panel';

export default function ConfigButton() {
  const [showPanel, setShowPanel] = useState(false);

  const handleConfigButton = () => {
    setShowPanel(!showPanel);
  };

  return (
    <div
      className='absolute top-6 right-5
                  md:right-4 
                 lg:top-7 lg:right-11 
                 xl:right-14 2xl:right-19 
                 flex flex-col items-end gap-1'
    >
      <div className='w-10 md:w-14 xl:w-12'>
        <img
          className='h-auto m-auto md:w-10 rounded-full
                    duration-150 cursor-pointer
                    hover:scale-105 active:scale-95'
          src={settingIcon}
          alt='settings'
          onClick={handleConfigButton}
        />
      </div>
      <ConfigPanel isVisible={showPanel} />
    </div>
  );
}
