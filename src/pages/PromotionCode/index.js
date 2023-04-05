import React from 'react'
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Link from "@mui/material/Link";

const PromotionCode = () => {
    const [isCopied, setIsCopied] = useState(false);
  return (
    <div>
      <Box sx={{ m: 3 }}>
        <Typography gutterBottom variant="h5" align="center">
          Promotion Code
        </Typography>
        <Typography gutterBottom variant="h6">
          Invitaion to get Promotion Rewards
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          The more people invited, the higher the rewards
        </Typography>
      </Box>
      <Card sx={{ borderRadius: 1, m: 2 }}>
        <CardContent>
          <Box sx={{ align : "center" }}>
            <Typography variant="h6">Invitaion Code</Typography>
            <Typography color="text.secondary" variant="caption">
              TPXqEvFBzYi5tBwViGtFu6dTeKZEgS3qeU
            </Typography>
            <CopyToClipboard
              text={"TPXqEvFBzYi5tBwViGtFu6dTeKZEgS3qeU"}
              onCopy={() => {
                setIsCopied(true);
                setTimeout(() => {
                  setIsCopied(false);
                }, 1000);
              }}
            >
              <Button size="small" endIcon={<ContentCopyIcon />} marginLeft="5">
                Copy
              </Button>
            </CopyToClipboard>
            <Typography variant="h6">Promotional Link</Typography>
            <Link href="https://www.w3schools.com/cssref/css3_pr_justify-content.php">
              Link
            </Link>
            <CopyToClipboard
              text={
                "https://www.w3schools.com/cssref/css3_pr_justify-content.php"
              }
              onCopy={() => {
                setIsCopied(true);
                setTimeout(() => {
                  setIsCopied(false);
                }, 1000);
              }}
            >
              <Button size="small" endIcon={<ContentCopyIcon />} marginLeft="5">
                Copy
              </Button>
            </CopyToClipboard>
          </Box>
        </CardContent>
      </Card>
      {isCopied ? <p align="center"> copied</p> : null}
      <br />
    </div>
  );
}

export default PromotionCode