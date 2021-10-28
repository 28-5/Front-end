import { useState } from "react";

const useInput = validateValue => {
    const [enteredValue, setEnteredValue]           =   useState('');
    const [checkboxItem, setCheckboxItem]           =   useState([]);
    const [isTouched, setIsTouched]                 =   useState(false);
    const [validation, setValidation]               =   useState(true);

    const deleteCheckboxValue                       =   value =>{
        setCheckboxItem(prevValue => {
            return prevValue.filter( (item, index) =>{
                return item !== value;
            })
        });
    };

    const valueChangeHandler                        =   event =>{
        setEnteredValue(event.target.value);
    };
    const nameChangeHandler                         =    event =>{
        const selectedItem  =   event.target.name;
        if(event.target.checked){
            setCheckboxItem(prevVal => {
                return [
                    ...prevVal,
                    selectedItem,
                ]
            });
        }else{
            deleteCheckboxValue(event.target.name);
        }
    };

    const reset                                     =   () =>{
        setEnteredValue('');
        setValidation(true);
        setIsTouched(false);
    };

    return{
        value: enteredValue,
        chkValue: checkboxItem,
        validation,
        valueChangeHandler,
        nameChangeHandler,
        reset
    };
};

export default useInput;