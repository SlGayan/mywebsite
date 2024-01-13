import { Box } from "@mui/system";
import React, { useEffect } from "react";
import "./share-links.css";
import { BsFacebook, BsTelegram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { Grid, Typography } from "@mui/material";
import DisplayHtml from "../../../services/htmlTagsView";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const ShareLinks = ({ newsDetails }) => {
  let title = "";
  let imgUrl = "";
  let content = "";
  let firstParagraph = "";
  let firstParagraphText = "";
  const location = window.location.href;
  if (newsDetails) {
    title = newsDetails.title;
    imgUrl = newsDetails.media[0];
    content = "";
    firstParagraph = "";
    firstParagraphText = "";
  }

  return (
    <>
      { <Helmet>
        <title>Newsz</title>
        <meta property="og:title" content={title} />
        <meta property="og:image" content={imgUrl} />
        <meta property="og:url" content={location} />
        <meta property="og:type" content="website" />
      </Helmet> }
      <Grid item container spacing={2} alignItems="center">
        <Grid item>
          <Typography>Share on</Typography>
        </Grid>

        <Grid item>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${location}&image=${imgUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook className="facebookIcon" />
          </a>
        </Grid>
        <Grid item>
          <a
            href="#"
            onClick={() => {
              window.open(
                `https://twitter.com/share?text=${encodeURIComponent(
                  title
                )}&url=${encodeURIComponent(
                  location
                )}&image=${encodeURIComponent(imgUrl)}`,
                "twitter-share-dialog",
                "width=626,height=436"
              );
              return false;
            }}
          >
            <BsTwitter className="twitterIcon" />
          </a>
        </Grid>
        <Grid item>
          <a
            href={`whatsapp://send?text=${`${title} ${location}`}&image=${imgUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp className="whatsappIcon" />
          </a>
        </Grid>
        <Grid item>
          <a
            href={`https://telegram.me/share/url?url=${location}&text=${title}&image=${imgUrl}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTelegram className="telegramIcon" />
          </a>
        </Grid>
      </Grid>
    </>
  );
};

export default ShareLinks;
