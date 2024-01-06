import React,{useState,useContext} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import Googlekeepcontext from '../../context/Googlekeepcontext';
import Lableinput from '../Labelinput/Lableinput';
import Roundbutton from '../Roundbutton/Roundbutton';

import plusicon from "../../svg/plusicon.svg";

function Modal({open,setOpen}) {

  let contextobj = useContext(Googlekeepcontext);

  console.log("Conten lables",contextobj.labelsarr)

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    contextobj.dispatchlabelfunc({
      type: "ADD_DATA",
      id: contextobj.labelcurrid,
      labelname:"",
    });
    contextobj.setLabelcurrid((state) => state + 1);
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Edit Labels"}
        </DialogTitle>
        <DialogContent>
          <div>
          <Roundbutton namecomp={<img width="20px" src={plusicon} alt='plus'/>} clickfunction={handleAdd}/>
          {contextobj.labelsarr.map((labelObj,index)=>{
           return (<Lableinput key={index} labelobj={labelObj} labelcurrid={contextobj.labelcurrid} setLabelcurrid={contextobj.setLabelcurrid}/>)
          })}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default Modal
