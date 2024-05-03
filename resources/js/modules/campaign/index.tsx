import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
function CustomTabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const Campaign = () => {
    const [value, setValue] = useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Grid item container flexDirection={"column"} flexWrap={"nowrap"}>
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    height: "50px",
                    marginTop: "-42px",
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    indicatorColor="primary"
                    aria-label="basic tabs example"
                >
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
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
                }}
            >
                <CustomTabPanel value={value} index={0}>
                    Campaign page 1
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Campaign page 2
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Campaign page 3
                </CustomTabPanel>
            </Grid>
        </Grid>
    );
};

export default Campaign;
