'use client';
import { useEffect, useState } from "react";
import Switch from '@mui/material/Switch';

export function ToggleMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 페이지가 로드될 때 또는 다크 모드 상태가 변경될 때 호출
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <Switch defaultChecked color="default" onClick={toggleDarkMode}/>
        {isDarkMode ? (
          <img src="/light-mode-icon.png" alt="" />
        ) : (
          <img src="/dark-mode-icon.png" alt="" />
        )}
    </div>
  );
}