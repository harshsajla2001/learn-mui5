import {
  AppBar,
  Avatar,
  Divider,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PetsIcon from "@mui/icons-material/Pets";
import Badge from "@mui/material/Badge";
import { Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled("box")(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}));
const Userbox = styled("box")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}));
function Navbar() {
  const [open, setOpen] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated   } = useAuth0();
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          PANDA
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682_960_720.jpg"
            onClick={ e => setOpen(true)}
          />
          {isAuthenticated && 
          <Typography>{user.nickname}</Typography>
          }
        </Icons>
        <Userbox onClick={e => setOpen(true)}>
        <Avatar
            sx={{ width: "30px", height: "30px" }}
            src="https://cdn.pixabay.com/photo/2017/11/06/13/45/cap-2923682_960_720.jpg"
          />

          <Typography variant="span">
            Harsh
          </Typography>
        </Userbox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=> setOpen(false)}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem >My account</MenuItem>
        <Divider sx={{ my: 0.5 }} />

        {isAuthenticated ? (
          <MenuItem onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</MenuItem>
        ) : (
          <MenuItem onClick={() => loginWithRedirect()}>Login/Signup</MenuItem>
        )} 
        
      </Menu>
    </AppBar>
  );
}

export default Navbar;
