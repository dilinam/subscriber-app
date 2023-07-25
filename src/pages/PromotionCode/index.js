import React, { useEffect } from 'react'
import Typography from "@mui/material/Typography";
import { Card, CardContent } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Link from "@mui/material/Link";
import { getRefUser } from '../../use-cases/get-ref-user';

const PromotionCode = () => {
    const [isCopied, setIsCopied] = useState(false);
    const [ref,setRef] = useState()
    useEffect(()=>{
      getRefUser().then((res) => setRef(res.data))
    },[])
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
          <Box sx={{ align: "center" }}>
            <Typography variant="h6">Invitaion Code</Typography>
            <Typography color="text.secondary" variant="caption">
              {ref}
            </Typography>
            <CopyToClipboard
              sx={{ color: "#49A8EF" }}
              text={ref}
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
            <Link
              href={`http://34.131.70.71/signup?ref=${ref}`}
              sx={{ color: "#49A8EF" }}
            >
              http://34.131.70.71/signup/{ref}
            </Link>
            <CopyToClipboard
              sx={{ color: "#49A8EF" }}
              text={`http://34.131.70.71/signup?ref=${ref}`}
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