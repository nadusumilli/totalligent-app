import { Button, Typography, styled } from "@mui/material";
import React from "react";

const StyledButton = styled(Button)(() => ({
    minWidth: "80px",
    maxHeight: "40px",
    backgroundColor: "#223a61",
    fontSize: "14px",
    borderRadius: "4px",
    color: "#fff",
    "&:disabled": {
        backgroundColor: "rgba(255, 255, 255, 0.12)",
    },
    "&:hover": {
        backgroundColor: "#1B2F4E",
    },
}));

const CustomButton = ({ onClick, label, buttonProps, labelProps }: any) => {
    return (
        <StyledButton variant="contained" onClick={onClick} {...buttonProps}>
            <Typography
                {...labelProps}
                variant="transmitterDetailsButtons"
                sx={{ display: "flex", alignItems: "center" }}
            >
                {label}
            </Typography>
        </StyledButton>
    );
};

export default CustomButton;
