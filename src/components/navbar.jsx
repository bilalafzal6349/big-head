import { FiAlignJustify } from "react-icons/fi";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export const Navbar = () => {
  return (
    <div className="sticky top-0  z-30 bg-[rgba(255,255,255,0.7)]  backdrop-blur">
      <div className="flex gap-4 justify-between items-center  p-8  ">
        <a href="#">
          <img
            src="https://big-head-dev.vercel.app/_next/image?url=%2Flogo.svg&w=48&q=75"
            className="max-w-[46px] h-[46px] inline-block"
            alt="imgw"
          />
        </a>
        <div className="text-black block lg:hidden">
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Button
                  variant="contained"
                  id="fade-menu"
                  {...bindTrigger(popupState)}
                >
                  <div className="text-black ">
                    <FiAlignJustify />
                  </div>
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem
                    onClick={() => {
                      popupState.close();
                      window.location.href = "#about";
                    }}
                  >
                    About
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      popupState.close();
                      window.location.href = "#road-map";
                    }}
                  >
                    Road Map
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      popupState.close();
                      window.location.href = "#team";
                    }}
                  >
                    Team
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      popupState.close();
                      window.location.href = "#events";
                    }}
                  >
                    Events
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      popupState.close();
                      window.location.href = "#faq";
                    }}
                  >
                    FAQ
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </div>

        <div className="hidden lg:flex gap-8 cursor-pointer text-black opacity-85 ">
          <a href="#about" className="hover:font-bold">
            About
          </a>
          <a href="#road-map" className="hover:font-bold">
            Road Map
          </a>
          <a href="#team" className="hover:font-bold">
            Team
          </a>
          <a href="#events" className="hover:font-bold">
            Events
          </a>
          <a href="#faq" className="hover:font-bold">
            FAQ
          </a>
        </div>
        <button
          className="bg-white text-black py-2 px-4 rounded border-[rgba(24, 22, 22, 0.5)] backdrop-blur-md capitalize border-2 text-black 
        
        hover:bg-[rgba(0,0,0,0.1)] hover:bg-opacity-50
         "
        >
          CONNECT WALLET
        </button>
      </div>
    </div>
  );
};
