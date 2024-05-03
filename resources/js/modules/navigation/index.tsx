import {
    KeyboardDoubleArrowLeft,
    KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import bell2 from "assets/icon-bell-footer.svg";
import logo from "assets/logo.svg";
import React, { useState } from "react";
import NavigationMenu from "./navigation-menu";

const Navigation = () => {
    const [showNavBar, setShowNavBar] = useState(true);
    return (
        <Grid
            item
            container
            sx={{
                width: showNavBar ? "320px" : "40px",
                flexDirection: "column",
                gap: "35px",
            }}
        >
            <Grid item container ml={2} mb={2.2}>
                <Box component={"img"} src={logo} />
            </Grid>
            <NavigationMenu showNavBar={showNavBar} />
            <Grid
                item
                container
                justifyContent={"flex-end"}
                flexDirection={"column"}
                gap={"10px"}
                flexGrow={"1"}
            >
                {showNavBar ? (
                    <>
                        <Grid
                            item
                            container
                            gap={"10px"}
                            sx={{
                                border: "1px solid #fff",
                                borderRadius: "5px",
                                padding: "15px",
                                flexWrap: "nowrap",
                            }}
                        >
                            <Grid>
                                <Box component={"img"} src={bell2} />
                            </Grid>
                            <Grid item container>
                                <Box sx={{ whiteSpace: "nowrap", gap: "5px" }}>
                                    7 Days left{" "}
                                    <Box
                                        sx={{ color: "#D1D1D1" }}
                                        display={"inline-block"}
                                    >
                                        of your free trail
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        textDecoration: "underline",
                                        color: "#D1D1D1",
                                    }}
                                >
                                    Learn more
                                </Box>
                            </Grid>
                        </Grid>
                        <Box
                            sx={{
                                border: "1px solid #fff",
                                borderRadius: "5px",
                                padding: "15px",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "inline-flex",
                                    marginRight: "20px",
                                }}
                            >
                                ?
                            </Box>{" "}
                            Help Center
                        </Box>
                    </>
                ) : (
                    <></>
                )}
                {showNavBar ? (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            cursor: "pointer",
                        }}
                    >
                        <KeyboardDoubleArrowLeft
                            onClick={() => setShowNavBar(!showNavBar)}
                        />
                    </Box>
                ) : (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            cursor: "pointer",
                        }}
                    >
                        <KeyboardDoubleArrowRight
                            onClick={() => setShowNavBar(!showNavBar)}
                        />
                    </Box>
                )}
            </Grid>
        </Grid>
    );
};

export default Navigation;
