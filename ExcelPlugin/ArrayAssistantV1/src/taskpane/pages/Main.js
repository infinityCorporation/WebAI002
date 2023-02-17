import * as React from 'react';
import { useCallback, useReducer, useState} from 'react';
import Gen from '../pages/gen';
import Exp from '../pages/exp';
import Clean from '../pages/clean'
import Profile from '../pages/profile';

export default function Main() {
    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case "GEN":
                    return {
                        ...prevState,
                        page: 1
                    };
                case "EXP":
                    return {
                        ...prevState,
                        page: 2
                    };
                case "CLEAN":
                    return {
                        ...prevState,
                        page: 3
                    };
                case "PROFILE":
                    return {
                        ...prevState,
                        page: 4
                    };
            }
        },
        {
            page: 1
        }
    );


    return(
        <div 
            className='mainDiv'
        >
            <div 
                className='pageSelector'
            >
                <button
                    className='genSelect'
                    onClick={() => {
                        dispatch({ type: "GEN" })
                    }}
                >
                    Gen
                </button>
                <button
                    className='expSelect'
                    onClick={() => {
                        dispatch({ type: "EXP" })
                    }}
                >
                    Exp
                </button>
                <button
                    className='cleanSelect'
                    onClick={() => {
                        dispatch({ type: "CLEAN" })
                    }}
                >
                    Clean
                </button>
                <button
                    className='profileSelect'
                    onClick={() => {
                        dispatch({ type: "PROFILE" })
                    }}
                >
                    Profile
                </button>
            </div>
            <div className='pageDisplay'>
                { displaySwitch(state) }
            </div>
        </div>
    )
};

function displaySwitch(state) {
    switch (state.page) {
        case 1:
            return(
                <h4>
                    <Gen />
                </h4>
            );
        case 2:
            return(
                <h4>
                    <Exp />
                </h4>
            );
        case 3:
            return(
                <h4>
                    <Clean />
                </h4>
            );
        case 4:
            return(
                <h4>
                    <Profile />
                </h4>
            )
    }
}

/*

const styles = StyleSheet.create({
    expSelect: {
        width: '25%',
        height: '100%',
        position: 'absolute',
        top: '0px',
        left: '25%'
    },
    cleanSelect: {
        width: '25%',
        height: '100%',
        position: 'absolute',
        top: '0px',
        left: '50%'
    },
    profileSelect: {
        width: '25%',
        height: '100%',
        position: 'absolute',
        top: '0px',
        left: '75%'
    }
})

*/