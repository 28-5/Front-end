import React, {useState} from 'react';
import DaumPostcode from 'react-daum-postcode';

const Address = props => {
    const [daumAddress, setDaumAddress] = useState();

    const handleComplete = props => {
        let fullAddress = props.address;
        let extraAddress = '';

        if (props.addressType === 'R') {
            if (props.bname !== '') {
                extraAddress += props.bname;
            }
            if (props.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${props.buildingName}` : props.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
            setDaumAddress(fullAddress);
        }
    }
    props.getAddress(daumAddress);
    return (
        <DaumPostcode onComplete={handleComplete}  autoClose={true} animation={true}/>
    )
};

export default Address;