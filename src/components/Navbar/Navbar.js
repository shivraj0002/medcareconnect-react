import React, { cloneElement, useEffect, useState } from "react";
import classes from "./styles/Navbar.module.css";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  useScrollTrigger,
  Container,
  Stack,
  Tabs,
  Tab,
  useTheme,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  SwipeableDrawer,
  Box,
  Avatar,
} from "@mui/material";
import styled from "@emotion/styled";
import AdbIcon from "@mui/icons-material/Adb";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CallIcon from "@mui/icons-material/Call";
import { deepOrange, red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logoIcon from "../../assets/icon-only.png";
import logoIconBase from "../../assets/icon-base.png";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const StyledDiv = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 45,
    width: "100%",
    backgroundColor: deepOrange["A400"],
    borderRadius: "50%",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&.Mui-selected": {
      color: "red",
    },
  })
);

const Navbar = () => {
  const [currentTab, setCurrentTab] = useState("home");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const tabChange = (event, currentTab) => {
    setCurrentTab(currentTab);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && currentTab !== "home") {
      setCurrentTab("home");
    } else if (
      window.location.pathname === "/products" &&
      currentTab !== "products"
    ) {
      setCurrentTab("products");
    } else if (
      window.location.pathname === "/about" &&
      currentTab !== "about"
    ) {
      setCurrentTab("about");
    } else if (
      window.location.pathname === "/contact" &&
      currentTab !== "contact"
    ) {
      setCurrentTab("contact");
    }
  }, [currentTab]);

  const drawerContent = (
    <Box
      role="presentation"
      onClick={() => setIsOpenDrawer(false)}
      onKeyDown={() => setIsOpenDrawer(false)}
      sx={{ width: 250 }}
    >
      <List className={classes.list}>
        <ListItem disablePadding component={Link} to={"/"}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding component={Link} to={"/products"}>
          <ListItemButton>
            <ListItemIcon>
              <StoreIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding component={Link} to={"/about"}>
          <ListItemButton>
            <ListItemIcon>
              <BusinessCenterIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding component={Link} to={"/contact"}>
          <ListItemButton>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appbar} position="fixed">
          <Container maxWidth="xl">
            <Toolbar className={classes.toolbar}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                sx={{ color: "black" }}
                alignItems={"center"}
              >
                <Avatar
                  variant="square"
                  src={logoIcon}
                  alt="Logo Icon"
                  sx={{
                    mr: { xs: 0.5, md: 1 },
                    width: { xs: 40, md: 56 },
                    height: { xs: 40, md: 56 },
                  }}
                />
                <Box
                  component={"img"}
                  src={logoIconBase}
                  alt="logo"
                  sx={{
                    mr: { xs: 0.5, md: 1 },
                    height: { xs: 31, md: 45 },
                  }}
                />
              </Stack>
              <StyledTabs
                value={currentTab}
                onChange={tabChange}
                sx={{
                  height: "72px",
                  display: { xs: "none", md: "block" },
                }}
              >
                <StyledTab
                  label="Home"
                  icon={<HomeIcon />}
                  iconPosition="start"
                  value={"home"}
                  component={Link}
                  to="/"
                />
                <StyledTab
                  label="Products"
                  icon={<StoreIcon />}
                  iconPosition="start"
                  value={"products"}
                  component={Link}
                  to="/products"
                />
                <StyledTab
                  label="About"
                  icon={<BusinessCenterIcon />}
                  iconPosition="start"
                  value={"about"}
                  component={Link}
                  to="/about"
                />
                <StyledTab
                  label="Contact"
                  icon={<ContactMailIcon />}
                  iconPosition="start"
                  value={"contact"}
                  component={Link}
                  to="/contact"
                />
              </StyledTabs>
              <Stack direction={"row"} spacing={1}>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<CallIcon fontSize="small" />}
                  component="a"
                  href="tel:+919955273559"
                  sx={{ textDecoration: "underline" }}
                  size={"small"}
                >
                  +919955273559
                </Button>
                <IconButton
                  onClick={() => {
                    setIsOpenDrawer((prev) => !prev);
                  }}
                  sx={{ ml: "10px", display: { xs: "block", md: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <StyledDiv />
      <SwipeableDrawer
        anchor={"right"}
        open={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        onOpen={() => setIsOpenDrawer(true)}
      >
        {drawerContent}
      </SwipeableDrawer>
    </>
  );
};

export default Navbar;
