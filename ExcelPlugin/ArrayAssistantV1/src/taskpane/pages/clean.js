import * as React from 'react';
import './clean.css';
import { Link } from 'react-router-dom';
import { useState, useCallback } from 'react';
import axios from 'axios';

export default function Clean() {
    const [input, setInput] = useState();
    const [outputCells, setOutputCells] = useState();
    const [ready, setReady] = useState(false);
    const [dataCleaned, setDataCleaned] = useState();

    const getVals = () => {
        try {
            Excel.run(async (context) => {
                const range = context.workbook.getSelectedRange();
                range.load("values");

                await context.sync();
                console.log(range.values);
                setInput(range.values.join('", "'));
            })
        } catch (err) {
            console.log({ message: err.message });
        };
    }

    const getOut = () => {
        try {
            Excel.run(async (context) => {
                const range = context.workbook.getSelectedRange();
                range.load("address");

                await context.sync();
                console.log(range.address);
                setOutputCells(range.address);

            })
        } catch (err) {
            console.log({ message: err.message });
        };
    }

    const assignCells = useCallback( async () => {
        const data = await getCleaned(); //Right here the function can quite seem to return a defined value

        try {
            Excel.run( async (context) => {
                const range = context.workbook.outputCells;
                //range.load('values');

                console.log(data);
                console.log(data.data.choices);

                range.values = data.choices[0].text;
                await context.sync();
            })
        } catch (err) {
            console.log({ message: err.message });
        }
    });

    const getCleaned = async () => {
        await axios.post("https://aiserver.herokuapp.com/clean_data", {
            data: input
        })
            .then((response) => {
                try {
                    Excel.run( async (context) => {
                        const sheet = context.workbook.worksheets.getActiveWorksheet();
                        const range = sheet.getRange(`${outputCells}`);
        
                        console.log(response);

                        const preVal = response.data.choices[0].text;
                        const array = preVal.split('\n\n').join('').replace(/[\[\]]/g, '').split('", "');
                        const result = array.map(data => {
                            const values = data.split("', '");
                            return values.length > 1 ? [values[0] + " "] : [data];
                        });

                        const fix = result[0].toString();
                        result[0] = [fix.replace(/"/g, '')];

                        const fixSec = result[result.length-1].toString();
                        result[result.length-1] = [fixSec.replace(/"/g, '')];

                        console.log(result);

                        range.values = result;
                        range.format.autofitColumns();
                        
                        await context.sync();
                        
                    })
                } catch (err) {
                    console.log({ message: err.message });
                }
            })
            .catch((err) => {
                console.log({ message: err.message });
            });
    };

    return(
        <div className='cleanDiv'>
            <Link to="/">
                <h3>
                    Home
                </h3>
            </Link>
            <h3 className='cleanTitle'>
                Data Cleaning
            </h3>
            <div>
                <h5 className='cleanIn1'>
                    1. Select the Data you want cleaned.
                </h5>
                <button id="cleanSelection" onClick={() => {getVals();}}>
                    Select Input Cells
                </button>
            </div>
            <div>
                <h5>
                    2. Select the output cells.
                </h5>
                <button id="cleanOutputCells" onClick={() => {getOut();}}>
                    Select Output Cells
                </button>
            </div>
            <div>
                <h5 className='cleanIn2'>
                    3. Click the clean button below!
                </h5>
                <button className='cleanBut' onClick={() => {getCleaned();}}>
                    Clean Data
                </button>
            </div>
        </div>
    )
}