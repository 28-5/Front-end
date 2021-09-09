import React, {useState} from 'react';
import DaumPostcode from 'react-daum-postcode';

const Address = props => {
    const [daumAddress, setDaumAddress] = useState();
    const [isOpen, setIsOpen] = useState(true);

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

        console.log(fullAddress);  // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    }
    props.getAddress(daumAddress);

    return (
        <DaumPostcode
            onComplete={handleComplete} closeModal={isOpen} autoClose="true" animation="true"
        />
    )
};

export default Address;