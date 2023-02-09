import * as React from 'react';
import "./Docs.css";

export default function Docs() {
    return(
        <div className='mainDocs'>
            <h2 className='title'>
                Docs
            </h2>
            <div className='fgDiv'>
                <h3 className='introTitle'>
                    1.0 Formula Generator:
                </h3>
                <h4 className='introMain'>
                    The Formula Generator is a tool that allows you to create a formula
                    simply by describing what you need said formula to do. It takes written
                    commands and turns them into ready-to-use formulas that can be copy and
                    pasted into the spreadsheet of your choice!
                </h4>
                <h3 className='basicsTitle'>
                    1.1 Basics:
                </h3>
                <h4 className='basicsa'>
                a. Services - The output will depend on which service you are using. There
                            are two major spreadsheet services, Microsoft Excel and google
                            Sheets, and you should identify which one you are using. Once 
                            you have done so, simply click the button that matches you service.
                            These buttons can be found above the input area and are labelled 
                            accordingly.
                </h4>
                <h4 className='basicsb'>
                    b. Input - The input is important as it is what your formula will be generated
                    from. You simply want to tell it what it is creating a formula to do,
                    and nothing more. Do not use any normal grammar, and do not form 
                    complete sentences. Describe your variables how you need them and be 
                    concise and to the point. 
                    For example, if I wanted to calculate 'A' plus 'B', I would input the
                    phrase "calculate A plus B". This would give the desired result. For 
                    more information, see section 1.8 Examples. 
                </h4>
                <h4 className='basicsc'>
                    c. Output - The output section is where your result will appear. It will only 
                    output the formula, beginning with the '=' character. This section allows
                    for you to simply copy and paste the formula from the generator into
                    the spreadsheet that you are currently creating.
                </h4>
            </div>
            <div className='feDiv'>
                <h3 className='feTitle'>
                    2.0 Formula Explainer:
                </h3>
                <h4 className='feMain'>
                    The formula explainer tool allows you to have any formula, not just spreadsheet
                    formulas, explained! Simply input the function or formula that you don't understand,
                    and it will be explained in simple and concise terms. For more information on how
                    to use, see the following sections.
                </h4>
                <h3 className='feBasics'>
                    2.1 Basics:
                </h3>
            </div>
        </div>
    )
}