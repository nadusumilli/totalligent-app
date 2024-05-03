import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Button, Grid, IconButton } from "@mui/material";
import analyticsIcon from "assets/nav-analytics-icon.svg";
import audienceIcon from "assets/nav-audience-icon.svg";
import automationsIcon from "assets/nav-automations-icon.svg";
import campaignIcon from "assets/nav-campaign-icon.svg";
import contentIcon from "assets/nav-content-icon.svg";
import home from "assets/nav-home-icon.svg";
import pulseIcon from "assets/nav-pulse-icon.svg";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavButton = ({
    title,
    isActive,
    icon,
    endIcon,
    onClick,
    showNavBar,
}: {
    title: string;
    isActive: boolean;
    icon: any;
    endIcon?: any;
    onClick: any;
    showNavBar: boolean;
}) => {
    return showNavBar ? (
        <Button
            variant={isActive ? "contained" : "text"}
            startIcon={
                <Box
                    component={"img"}
                    src={icon}
                    sx={{
                        filter:
                            (title === "dashboard" && !isActive) ||
                            (title !== "dashboard" && isActive)
                                ? "invert(100%) sepia(14%) saturate(0%) hue-rotate(79deg) brightness(101%) contrast(101%)"
                                : "",
                        widht: "24px",
                        height: "24px",
                    }}
                />
            }
            onClick={onClick}
            sx={{
                width: "100%",
                textTransform: "capitalize",
                // fontFamily: "Robot ",
                fontSize: "15px",
                lineHeight: "23.4px",
                textAlign: "left",
                ...(isActive
                    ? {
                          minWidth: "80px",
                          maxHeight: "40px",
                          backgroundColor: "#E0E0E0",
                          borderRadius: "4px",
                          "&:disabled": {
                              backgroundColor: "rgba(255, 255, 255, 0.12)",
                          },
                          "&:hover": {
                              backgroundColor: "#E8EEEF",
                          },
                          color: "#1B2F4E",
                          paddingX: "10px",
                          paddingY: "18px",
                          fontWeight: 600,
                      }
                    : { color: "#E8EEEF", fontWeight: 400 }),
                justifyContent: "flex-start",
                alignItems: "center",
            }}
        >
            <Box ml={1}>{title}</Box>
            <Box ml={"auto"} display={"inline-flex"} alignItems={"center"}>
                {endIcon}
            </Box>
        </Button>
    ) : (
        <IconButton
            sx={{ backgroundColor: isActive ? "#fff" : "" }}
            onClick={onClick}
        >
            <Box
                component={"img"}
                src={icon}
                sx={{
                    filter:
                        (title === "dashboard" && !isActive) ||
                        (title !== "dashboard" && isActive)
                            ? "invert(100%) sepia(14%) saturate(0%) hue-rotate(79deg) brightness(101%) contrast(101%)"
                            : "",
                    width: "24px",
                    height: "24px",
                }}
            />
        </IconButton>
    );
};

const NavigationMenu = ({ showNavBar }: { showNavBar: boolean }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isActive, setIsActive] = useState<any>({
        dashboard: false,
        campaign: false,
        automations: false,
        audience: false,
        analytics: false,
        pulse: false,
        content: false,
    });

    useEffect(() => {
        const key = location.pathname.match(/\/(\S+)/)?.[1];
        if (key != null) {
            setIsActive({ ...isActive, [key]: true });
        } else {
            setIsActive({ ...isActive, dashboard: true });
        }
    }, []);

    const handleClick = (link: string) => {
        Object.keys(isActive).map((key: string) => {
            if (link === key) {
                isActive[key] = true;
            } else {
                isActive[key] = false;
            }
            setIsActive({ ...isActive });
        });
        navigate({ pathname: link });
    };

    return (
        <Grid item container gap={"17px"} justifyContent={"flex-start"}>
            <NavButton
                title="dashboard"
                isActive={isActive["dashboard"]}
                icon={home}
                onClick={() => handleClick("dashboard")}
                showNavBar={showNavBar}
            />
            <NavButton
                title="campaign"
                isActive={isActive["campaign"]}
                icon={campaignIcon}
                onClick={() => handleClick("campaign")}
                showNavBar={showNavBar}
            />
            <NavButton
                title="automations"
                isActive={isActive["automations"]}
                icon={automationsIcon}
                onClick={() => handleClick("automations")}
                showNavBar={showNavBar}
            />
            <NavButton
                title="audience"
                isActive={isActive["audience"]}
                icon={audienceIcon}
                onClick={() => handleClick("audience")}
                showNavBar={showNavBar}
            />
            <NavButton
                title="analytics"
                isActive={isActive["analytics"]}
                icon={analyticsIcon}
                onClick={() => handleClick("analytics")}
                showNavBar={showNavBar}
            />
            <NavButton
                title="pulse"
                isActive={isActive["pulse"]}
                icon={pulseIcon}
                onClick={() => handleClick("pulse")}
                showNavBar={showNavBar}
            />
            <NavButton
                title="content"
                isActive={isActive["content"]}
                icon={contentIcon}
                endIcon={<KeyboardArrowDown />}
                onClick={() => handleClick("content")}
                showNavBar={showNavBar}
            />
        </Grid>
    );
};

export default NavigationMenu;
