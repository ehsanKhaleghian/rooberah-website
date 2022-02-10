import React from 'react';
import {Box} from "@mui/system";

function Container(props) {
    return (
        <Box sx={{
            px: {
                xs: 1,
                sm: 4,
                md: 10
            }
        }}>
            {props.children}
        </Box>
    );
}

export default Container;