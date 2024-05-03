import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import bell from "assets/icon-bell.svg";
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navigation from "./modules/navigation";

function App() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const key = location.pathname.match(/\/(\S+)/)?.[1];
        navigate(key != null ? key : "dashboard");
    }, []);
    return (
        <Grid
            container
            p={2}
            sx={{
                flexDirection: "column",
                color: "#fff",
                backgroundColor: "#1B2F4E",
            }}
        >
            <Grid
                item
                container
                md={12}
                gap={"30px"}
                sx={{ flexWrap: "nowrap", minHeight: "calc(100vh - 32px)" }}
            >
                {/* Left Navigation */}
                <Navigation />

                <Grid
                    item
                    container
                    flexDirection={"column"}
                    flexWrap={"nowrap"}
                    gap={"20px"}
                >
                    {/* Header content */}
                    <Grid
                        item
                        container
                        sx={{
                            height: "50px",
                            flexWrap: "nowrap",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            gap: "20px",
                        }}
                    >
                        <Box component={"img"} src={bell} mr={4} />
                        <Grid item>
                            <Box
                                sx={{
                                    display: "inline-flex",
                                    justifyContent: "flex-end",
                                    width: "202px",
                                }}
                            >
                                Andrew bang
                            </Box>
                            <Box>andrewbangdesign@gmail.com</Box>
                        </Grid>
                        <Grid
                            item
                            sx={{
                                display: "inline-flex",
                                flexWrap: "nowrap",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            <Box
                                sx={{
                                    height: "40px",
                                    width: "40px",
                                    borderRadius: "50%",
                                    backgroundColor: "#FFE378",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                A
                            </Box>
                            <KeyboardArrowDown />
                        </Grid>
                    </Grid>

                    {/* Dashboard Content */}
                    <Grid
                        item
                        container
                        sx={{
                            flexGrow: "1",
                        }}
                    >
                        <Outlet />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default App;
