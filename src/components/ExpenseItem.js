import React, { useContext } from 'react';
import { HiXCircle } from 'react-icons/hi';
import {HiPlusCircle} from 'react-icons/hi';
import {HiMinusCircle} from 'react-icons/hi';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        //alert()
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td> 
        <td><HiPlusCircle size='3.5em' color="green"  onClick={event=> increaseAllocation(props.name)}>+</HiPlusCircle></td>
        <td align="center"><HiMinusCircle size='3.5em' color="red" onClick={event=> decreaseAllocation(props.name)}>-</HiMinusCircle></td>
        <td><HiXCircle size='1.5em' onClick={handleDeleteExpense}></HiXCircle></td>
        </tr>
    );
};
export default ExpenseItem;
