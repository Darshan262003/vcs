import React from "react";
import { useState } from "react";

const ThemeSelector=()=>
{
    const [color,SetColor]=useState('light');

    return(
        <div className="themeselector">
            <h2>Select theme</h2>
            <label htmlFor="">
                <input type="radio" name="theme" value="light"
                checked={theme==='light'}
                onChange={()=>setTheme('light')} />
                Light Mode
            </label>
            <label htmlFor="">
                <input type="radio" name="theme" value="dark"
                checked={theme==='dark'}
                onChange={()=>setTheme('dark')} />
                Dark Mode
            </label>
        <div className={`preview-box ${theme}`}>
            <p>This is {theme==='light'? 'light':"dark"}</p>

        </div>
        </div>
    );
}