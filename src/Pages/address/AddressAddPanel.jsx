import React, { useContext, useState } from 'react'
import { MyContext } from '../../App'
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import { deleteData, editData, getData, postData } from '../../../utils/api';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { RxCross2 } from "react-icons/rx";


const AddressAddPanel = ({ setAddress , handleClose}) => {
    //backend start here 
    //this for the form fields
    const context = useContext(MyContext)
    const [addressType, setAddressType] = useState('');
    const [isLoading, setIsLoading] = useState(false); //this for loading (loader circular movve)
    const [formFields, setFormFields] = useState({ //thsi for taken and store and then update the user address data 
        address_line1: '',
        city: '',
        state: '',
        pincode: '',
        country: '',
        mobile: '',
        select: false,
        userId: '',
        landmark: '',
        addressType: ''
    })
     //for user changes in input area it will update in formFields
    const onChangeInput = (e) => { //this for input change in input area
        setFormFields(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    //this for address save in database when click save button
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true); //this is toster to loading or not
        //toster
        if (formFields.address_line1 === "") {
            context.openAlertBox("error", "please enter address line 1")
            setIsLoading(false);
            return false;
        }
        if (formFields.city === "") {
            context.openAlertBox("error", "please enter city name")
            setIsLoading(false);
            return false;
        }
        if (formFields.state === "") {
            context.openAlertBox("error", "please enter state name")
            setIsLoading(false);
            return false;
        }
        if (formFields.pincode === "") {
            context.openAlertBox("error", "please enter pincode")
            setIsLoading(false);
            return false;
        }
        if (formFields.country === "") {
            context.openAlertBox("error", "please enter country name")
            setIsLoading(false);
            return false;
        }
        if (formFields.mobile === "") {
            context.openAlertBox("error", "please enter your Phone Number")
            setIsLoading(false);
            return false;
        }
        if (formFields.addressType === "") {
            context.openAlertBox("error", "please select address type")
            setIsLoading(false);
            return false;
        }
        //api called
        postData(`/api/address/add`, formFields, Credential = (true)).then((res) => {
            if (res?.error !== true) {
                context.openAlertBox("success", "Address Added Successfully")
                setIsLoading(false);
                context?.setOpenAddressPanel(false);
                setFormFields([]);
                //data fetch after add new address
                getData(`/api/address/get?userId=${context?.userData?._id}`).then((res) => {
                    if (res?.error !== true) {
                        setAddress(res?.data);
                         handleClose();
                    }
                })
                handleClose();
            }
            else {
                context.openAlertBox("error", "something went wrong")
                setIsLoading(false);
            }
        })
    }
 //this for edit address dialog box
  const handleChangeAddressType = (event) => {
    setAddressType(event.target.value);
    setFormFields(prev => ({...prev, addressType: event.target.value }));
  };
    return (
        <form className="w-full p-8 py-3" onSubmit={handleSubmit}>
            <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                    <TextField
                        className="w-full"
                        label="Address  Line 1*"
                        variant="outlined"
                        size="small"
                        name='address_line1'
                        value={formFields.address_line1}
                        onChange={onChangeInput}
                    />
                </div>
            </div>
             <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                    <TextField
                        className="w-full"
                        label="City*"
                        variant="outlined"
                        size="small"
                        name='city'
                        value={formFields.city}
                        onChange={onChangeInput}
                    />
                </div>
                </div>
                <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                    <TextField
                        className="w-full"
                        label="State*"
                        variant="outlined"
                        size="small"
                        name='state'
                        value={formFields.state}
                        onChange={onChangeInput}
                    />
                </div>
                </div>

                <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                    <TextField
                        className="w-full"
                        label="Country*"
                        variant="outlined"
                        size="small"
                        name='country'
                        value={formFields.country}
                        onChange={onChangeInput}
                    />
                </div>
                </div>
                <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                    <TextField
                        className="w-full"
                        label="Pincode*"
                        variant="outlined"
                        size="small"
                        name='pincode'
                        value={formFields.pincode}
                        onChange={onChangeInput}
                    />
                </div>
                </div>
            <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                    <TextField
                        className="w-full"
                        label="Mobile*"
                        variant="outlined"
                        size="small"
                        name='mobile'
                        value={formFields.mobile}
                        onChange={onChangeInput}
                    />
                </div>
                </div>
                <div className="flex items-center gap-5 pb-5">
                <div className="col w-[100%]">
                    <TextField
                        className="w-full"
                        label="landmark (Optional)"
                        variant="outlined"
                        size="small"
                        name='landmark'
                        value={formFields.landmark}
                        onChange={onChangeInput}
                    />
                </div>
                </div>
            <div className="flex  gap-5 pb-5 flex-col">
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Address Type</FormLabel>
                    <RadioGroup
                        onChange={handleChangeAddressType}
                        value={addressType}
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group" >
                        <FormControlLabel value="home" control={<Radio />} label="Home" />
                        <FormControlLabel value="work" control={<Radio />} label="Work" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="flex items-center gap-8 pb-5">
                <Button type='submit' className='btn-org btn-lg w-full flex gap-2 items-center'>Save</Button>
            </div>
        </form>
    )
}

export default AddressAddPanel;
