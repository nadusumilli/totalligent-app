import { Box, Grid, Tab, Tabs, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import AdPlacement from "./ad-placement";

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
function CustomTabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
        <Grid
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            flexGrow={"1"}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Grid>
    );
}

const StyledBox = styled(Box)(() => ({
    height: "5px",
    width: "60px",
    borderRadius: "10px",
    backgroundColor: "#D9D9D9",
}));

const Dashboard = () => {
    const [value, setValue] = useState(0);
    const [isCompleted, setIsCompleted] = useState<any>({
        campaigns: false,
        adGeneration: false,
        createAds: false,
        adPlacement: false,
    });

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        if (newValue === 0) {
            setIsCompleted({
                campaigns: false,
                adGeneration: false,
                createAds: false,
                adPlacement: false,
            });
        } else if (newValue === 1) {
            setIsCompleted({
                campaigns: true,
                adGeneration: false,
                createAds: false,
                adPlacement: false,
            });
        } else if (newValue === 2) {
            setIsCompleted({
                campaigns: true,
                adGeneration: true,
                createAds: false,
                adPlacement: false,
            });
        } else if (newValue === 3) {
            setIsCompleted({
                campaigns: true,
                adGeneration: true,
                createAds: true,
                adPlacement: false,
            });
        }
        setValue(newValue);
    };

    return (
        <Grid item container flexDirection={"column"} flexWrap={"nowrap"}>
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    height: "50px",
                    marginTop: "-22px",
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    indicatorColor="primary"
                    aria-label="basic tabs example"
                    sx={{ marginLeft: "10px" }}
                >
                    <Tab
                        label="Campaigns"
                        {...a11yProps(0)}
                        sx={{
                            border: "0.87px solid #BEBEBE",
                            backgroundColor: "#C1C1C1",
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px",
                            marginRight: "5px",
                            ...(!isCompleted["campaigns"]
                                ? {
                                      color: "#1B2F4E",
                                      backgroundColor: "#D9D9D9",
                                  }
                                : {}),
                        }}
                    />
                    <Tab
                        label="Ad Generator"
                        {...a11yProps(1)}
                        sx={{
                            border: "0.87px solid #BEBEBE",
                            backgroundColor: "#C1C1C1",
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px",
                            marginRight: "5px",
                            ...(!isCompleted["adGeneration"]
                                ? {
                                      color: "#1B2F4E",
                                      backgroundColor: "#D9D9D9",
                                  }
                                : {}),
                        }}
                    />
                    <Tab
                        label="Create Ads"
                        {...a11yProps(2)}
                        sx={{
                            border: "0.87px solid #BEBEBE",
                            backgroundColor: "#C1C1C1",
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px",
                            marginRight: "5px",
                            ...(!isCompleted["createAds"]
                                ? {
                                      color: "#1B2F4E",
                                      backgroundColor: "#D9D9D9",
                                  }
                                : {}),
                        }}
                    />
                    <Tab
                        label="Ad Placement"
                        {...a11yProps(2)}
                        sx={{
                            border: "0.87px solid #BEBEBE",
                            backgroundColor: "#C1C1C1",
                            borderTopLeftRadius: "12px",
                            borderTopRightRadius: "12px",
                            marginRight: "5px",
                            ...(!isCompleted["adPlacement"]
                                ? {
                                      color: "#1B2F4E",
                                      backgroundColor: "#D9D9D9",
                                  }
                                : {}),
                        }}
                    />
                </Tabs>
            </Box>
            <Grid
                item
                container
                sx={{
                    borderRadius: "10px",
                    color: "#000",
                    padding: "20px",
                    paddingLeft: "70px",
                    backgroundColor: "#fff",
                    flexGrow: "1",
                    flexDirection: "column",
                    marginTop: "-3px",
                }}
            >
                <Grid item container gap={"10px"} sx={{ height: "10px" }}>
                    <StyledBox
                        sx={{
                            ...(isCompleted["campaigns"]
                                ? { backgroundColor: "#48CE8D" }
                                : {}),
                        }}
                    />
                    <StyledBox
                        sx={{
                            ...(isCompleted["adGeneration"]
                                ? { backgroundColor: "#48CE8D" }
                                : {}),
                        }}
                    />
                    <StyledBox
                        sx={{
                            ...(isCompleted["createAds"]
                                ? { backgroundColor: "#48CE8D" }
                                : {}),
                        }}
                    />
                    <StyledBox
                        sx={{
                            ...(isCompleted["adPlacement"]
                                ? { backgroundColor: "#48CE8D" }
                                : {}),
                        }}
                    />
                </Grid>
                <CustomTabPanel value={value} index={0}>
                    Dashboard page 1
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Dashboard page 2
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Dashboard page 3
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <AdPlacement />
                </CustomTabPanel>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
