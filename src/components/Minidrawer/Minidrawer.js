import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Roundbutton from '../Roundbutton/Roundbutton';
import Hamburgericon from "../../svg/hamburger.svg";
import Keeplogo from "../../images/keep.png"
import Notesicon from "../../svg/notesicon.svg";
import Editlablesicon from "../../svg/editlabels.svg";
import Archiveicon from "../../svg/archives.svg";
import Trashicon from "../../svg/trash.svg";
import Searchicon from "../../svg/searchicon.svg";
import Plusicon from "../../svg/plusicon.svg";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Minidrawer() {

 const menuiconsarr = [Plusicon,Notesicon,Searchicon,Editlablesicon,Archiveicon,Trashicon]

  const [open, setOpen] = React.useState(false);
  const [notclose, setNotclose] = React.useState(false);

  const handleDrawer = (boolean) => {
    if(open===false) {
      setOpen(true);
    }
    else {
        if(notclose===false || boolean===false) {
            console.log("hello")
           setOpen(false);
        }
    }
  };


  return (
    <Box sx={{ display: 'flex' }}>
      
      <Drawer variant="permanent" open={open}>
        <div className='navleft'>
           <Roundbutton styles={{margin:"10px 8px"}} clickfunction={()=>{
            if(open===false)
            {
                setNotclose(true);
                handleDrawer(true);
            }
            else {
                setNotclose(false);
                handleDrawer(false);
            }
        }
        } 
            namecomp={<img src={Hamburgericon} alt="menu"/>} />
           <img width="40px" height="40px" style={{zIndex:"20"}} src={Keeplogo} alt="keeplogo"/>
          <h2 style={{color:"#5f6368",opacity:"1",fontWeight:"400"}}>Keep</h2>
        </div>
        <Divider />
        <List>
          {['Create New Note','Notes', 'Search Notes', 'Edit Labels','Archive','Trash'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }} onMouseEnter={handleDrawer} onMouseLeave={handleDrawer}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    <img width="25px" height="25px" src={menuiconsarr[index]} alt="icon"/>
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
