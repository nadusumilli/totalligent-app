import { Done, Download, Info, Remove } from "@mui/icons-material";
import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import CustomButton from "../../common/button";

const AdPlacement = () => {
    const renderRows = () => {
        return (
            <Grid
                item
                container
                gap={"10px"}
                alignItems={"center"}
                sx={{ borderBottom: "0.91px solid #E8E9E9", paddingY: "10px" }}
                flexWrap={"nowrap"}
                justifyContent={"space-between"}
                color={"#1B2F4E"}
            >
                <Box sx={{ display: "inline-flex", alignItems: "center" }}>
                    <Typography
                        sx={{ display: "inline-flex", alignItems: "center" }}
                    >
                        <Remove
                            sx={{
                                fill: "#F0545280",
                                border: "1.39px solid #F0545280",
                                fontSize: "20px",
                            }}
                        />
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: "50px",
                        height: "30px",
                        backgroundColor: "#EFEFEF",
                        borderRadius: "5px",
                    }}
                />
                <Box
                    sx={{
                        display: "inline-flex",
                        flexDirection: "column",
                        width: "67px",
                    }}
                >
                    <Typography
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            fontFamily: "Source Sans Pro",
                            fontSize: "10.48px",
                            fontWeight: 600,
                            lineHeight: "13.63px",
                            textAlign: "left",
                        }}
                    >
                        image.jpg
                    </Typography>
                    <Typography
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            fontFamily: "Source Sans Pro",
                            fontSize: "8.98px",
                            fontWeight: 400,
                            lineHeight: "11.68px",
                            textAlign: "left",
                        }}
                    >
                        15kb
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: "30px",
                        height: "15px",
                        backgroundColor: "#000",
                        borderRadius: "8px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Source Sans Pro",
                            fontSize: "9.46px",
                            fontWeight: 600,
                            lineHeight: "12.3px",
                            textAlign: "left",
                            color: "#fff",
                        }}
                    >
                        JPG
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            fontFamily: "Source Sans Pro",
                            fontSize: "10.93px",
                            fontWeight: 600,
                            lineHeight: "14.21px",
                            textAlign: "left",
                        }}
                    >
                        04/27/2024 4:44 PM
                    </Typography>
                </Box>
                <Box>
                    <Done
                        sx={{
                            fill: "#FFF",
                            backgroundColor: "#48CE8D",
                            fontSize: "20px",
                        }}
                    />
                </Box>
                <Box>
                    <Download
                        sx={{
                            fill: "#FFF",
                            backgroundColor: "#9FD6D7",
                            fontSize: "20px",
                        }}
                    />
                </Box>
            </Grid>
        );
    };
    return (
        <Grid
            item
            container
            flexWrap={"nowrap"}
            sx={{ color: "#000", flexGrow: "1", gap: "30px" }}
        >
            <Grid item container gap={"25px"}>
                <Grid item container flexDirection={"column"} gap={"15px"}>
                    <Typography
                        sx={{
                            fontFamily: "Source Sans Pro",
                            fontSize: "24px",
                            fontWeight: 700,
                            lineHeight: "28.8px",
                            textAlign: "left",
                            color: "#1B2F4E",
                        }}
                    >
                        3. Content <Info sx={{ fontSize: "14px" }} />
                    </Typography>
                    <Typography sx={{ color: "#696969", maxWidth: "400px" }}>
                        Upload from your computer or link content from your
                        library for your ads and add your text!
                    </Typography>
                    <Box
                        sx={{
                            backgroundColor: "#D9D9D9",
                            borderRadius: "26px",
                            gap: "10px",
                            display: "inline-flex",
                            alignItems: "center",
                            padding: "4px",
                            paddingX: "10px",
                            width: "190px",
                        }}
                    >
                        <Typography sx={{ display: "inline-flex" }}>
                            Upload/Add
                        </Typography>
                        <CustomButton
                            label="Text"
                            buttonProps={{
                                sx: {
                                    textTransform: "capitalize",
                                    backgroundColor: "#1B2F4E",
                                    color: "#fff",
                                    borderRadius: "26px",
                                },
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item container flexDirection={"column"} gap={"20px"}>
                    <Typography
                        sx={{
                            fontFamily: "Source Sans Pro",
                            fontSize: "24px",
                            fontWeight: 700,
                            lineHeight: "28.8px",
                            textAlign: "left",
                            color: "#1B2F4E",
                        }}
                    >
                        Text <Info sx={{ fontSize: "14px" }} />
                        <Typography sx={{ color: "#696969" }}>
                            Here is the text that will be displayed on your ad.
                            Don’t worry about fonts, sizing, or placement just
                            yet! You’ll be able to edit that in the next step.
                        </Typography>
                    </Typography>
                    <Grid item container flexDirection={"column"} gap={"10px"}>
                        <Typography
                            sx={{
                                color: "#1B2F4E",
                                fontFamily: "Source Sans Pro",
                                fontSize: "16px",
                                fontWeight: 600,
                                lineHeight: "19.2px",
                                textAlign: "left",
                            }}
                        >
                            Header{" "}
                            <Typography
                                sx={{
                                    display: "inline-flex",
                                    fontFamily: "Source Sans Pro",
                                    fontSize: "12px",
                                    fontWeight: 400,
                                    lineHeight: "15.6px",
                                    textAlign: "left",
                                    color: "#696969",
                                }}
                            >
                                30-60 characters max
                            </Typography>
                        </Typography>
                        <TextField
                            size="small"
                            placeholder="Type Header here"
                        />
                    </Grid>
                    <Grid item container flexDirection={"column"} gap={"10px"}>
                        <Typography
                            sx={{
                                color: "#1B2F4E",
                                fontFamily: "Source Sans Pro",
                                fontSize: "16px",
                                fontWeight: 600,
                                lineHeight: "19.2px",
                                textAlign: "left",
                            }}
                        >
                            Sub Header{" "}
                            <Typography
                                sx={{
                                    display: "inline-flex",
                                    fontFamily: "Source Sans Pro",
                                    fontSize: "12px",
                                    fontWeight: 400,
                                    lineHeight: "15.6px",
                                    textAlign: "left",
                                    color: "#696969",
                                }}
                            >
                                30 characters max
                            </Typography>
                        </Typography>
                        <TextField
                            size="small"
                            placeholder="Type Sub Header here"
                        />
                    </Grid>
                    <Grid item container flexDirection={"column"} gap={"10px"}>
                        <Typography
                            sx={{
                                color: "#1B2F4E",
                                fontFamily: "Source Sans Pro",
                                fontSize: "16px",
                                fontWeight: 600,
                                lineHeight: "19.2px",
                                textAlign: "left",
                            }}
                        >
                            Body{" "}
                            <Typography
                                sx={{
                                    display: "inline-flex",
                                    fontFamily: "Source Sans Pro",
                                    fontSize: "12px",
                                    fontWeight: 400,
                                    lineHeight: "15.6px",
                                    textAlign: "left",
                                    color: "#696969",
                                }}
                            >
                                300 characters max
                            </Typography>
                        </Typography>
                        <TextField
                            size="small"
                            multiline
                            rows={5}
                            placeholder="Type body here"
                        />
                    </Grid>
                    <Grid item container justifyContent={"flex-end"}>
                        <CustomButton
                            label="Generate your ads"
                            buttonProps={{
                                sx: {
                                    backgroundColor: "#1B2F4E",
                                    color: "#fff",
                                    borderRadius: "30px",
                                },
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container flexDirection={"column"} gap={"30px"}>
                <Grid item container>
                    <Typography
                        sx={{
                            fontFamily: "Source Sans Pro",
                            fontSize: "24px",
                            fontWeight: 700,
                            lineHeight: "28.8px",
                            textAlign: "left",
                            color: "#1B2F4E",
                        }}
                    >
                        Ad name goes here <Info sx={{ fontSize: "14px" }} />
                        <Typography
                            sx={{ color: "#696969", maxWidth: "400px" }}
                        >
                            Your list of content that can be used for ad
                            generation
                        </Typography>
                    </Typography>
                </Grid>
                <Grid item container flexGrow={"1"} flexDirection={"column"}>
                    <Grid
                        item
                        container
                        gap={"10px"}
                        alignItems={"center"}
                        sx={{
                            borderBottom: "0.91px solid #E8E9E9",
                            paddingY: "10px",
                        }}
                        flexWrap={"nowrap"}
                        justifyContent={"space-between"}
                        paddingX={"15px"}
                        color={"#1B2F4E"}
                    >
                        <Box
                            sx={{
                                width: "10px",
                                display: "inline-flex",
                                alignItems: "center",
                            }}
                        ></Box>
                        <Box sx={{ width: "50px", height: "30px" }} />
                        <Box
                            sx={{
                                display: "inline-flex",
                                flexDirection: "column",
                            }}
                        >
                            <Typography
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    fontFamily: "Source Sans Pro",
                                    fontSize: "10px",
                                    fontWeight: 600,
                                    lineHeight: "13px",
                                    textAlign: "left",
                                    wordWrap: "break-word",
                                    maxWidth: "67px",
                                }}
                            >
                                File name / size
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                color: "#000",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "Source Sans Pro",
                                    fontSize: "9.46px",
                                    fontWeight: 600,
                                    lineHeight: "12.3px",
                                    textAlign: "left",
                                }}
                            >
                                File type
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: "Source Sans Pro",
                                    fontSize: "10.93px",
                                    fontWeight: 600,
                                    lineHeight: "14.21px",
                                    textAlign: "left",
                                }}
                            >
                                Date Uploaded
                            </Typography>
                        </Box>
                        <Box sx={{ width: "24px" }} />
                        <Box sx={{ width: "24px" }} />
                    </Grid>
                    <Grid
                        item
                        container
                        flexDirection={"column"}
                        sx={{
                            border: "1.5px solid #A0A0A0",
                            padding: "15px",
                            borderRadius: "10px",
                            flexGrow: "1",
                        }}
                    >
                        {renderRows()}
                        {renderRows()}
                        {renderRows()}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AdPlacement;
