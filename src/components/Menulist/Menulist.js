import React,{useContext} from 'react'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Googlekeepcontext from '../../context/Googlekeepcontext';

const ITEM_HEIGHT = 48;

function Menulist({selectedlabels,setSelectedlabels}) {

  let contextobj = useContext(Googlekeepcontext);

  let options = contextobj.labelsarr.map((labelObj)=>{
    return labelObj.labelname;
  })

  // const options = [...contextobj.labelsarr]
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          <p style={{textAlign:"center",margin:"2px"}}>Labels</p>
          {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={()=>{setSelectedlabels((state)=>{return [...state,option]});handleClose()}}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
}

export default Menulist;