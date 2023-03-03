import * as React from 'react';
import "./Extensions.css";

export default function Extensions() {
    return(
        <div id='mainExt'>
            <div className='titleDiv'>
            <h2 className='title'>
                Extensions
            </h2>
            <h4 className='description'>
                We currently offer one main extension to help you be more productive!
            </h4>
            </div>
            <div className='extensionsDiv'>
                <div className='chromeDiv'>
                    <h3 className='chromeTitle'>
                        Chrome Extension
                    </h3>
                    <h4 className='chromeDes'>
                        Our Chrome extension allows you to access the most important tools anywhere
                        on the web! This extension encompasses our cutting edge AI technology and allows
                        you to use the forumla generator and explainer no matter what page or service you 
                        are on! Click below to install the extension to Chrome now!
                    </h4>
                    <div className='chromeExt'>
                        <h4>
                            [Sheets Extension Goes Here]
                        </h4>
                    </div>
                </div>
                <div className='excelSection'>
                    <h3 className='excelTitle'>
                        Excel Extension
                    </h3>
                    <h4 className='excelDes'>
                        The Excel extension is a Microsoft Office add-on that allows you
                        to access all of the web tools and more within Excel. The plugin allows
                        you to generate and explain formulas within Excel while also allowing
                        you to move those formula directly into the cells you are working in! See 
                        our Docs tab for more information on installtion and setup, or follow the
                        instructions below.
                    </h4>
                    <div className='excelExt'>
                        <h4>
                            [Excel Extension Goes Here]
                        </h4>
                    </div>
                </div>
            </div>
            <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"/>
        </div>
    )
}