import React, { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTranslation } from "react-i18next";
import { tags } from "./Dashboard/tags";
import EmojiFlagsOutlinedIcon from "@mui/icons-material/EmojiFlagsOutlined";
import FlagIcon from "@mui/icons-material/Flag";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import Dropdown from "react-bootstrap/Dropdown";
import { UserContext } from '../contexts/User';

function getImage(tag) {
  for (let i = 0; i < tags.length; i++) {
    if (tags[i].value === tag) {
      return tags[i].image;
    }
  }
  return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpRO11pfNTX5nuwEvx7Zd_Y0_kfmo8-ioXSFL2RI3&s";
}

function FeaturedPost({ post, type }) {
  const { t } = useTranslation();
  const { user } = useContext(UserContext);

  const [upvotes, setUpvotes] = useState(Math.floor(Math.random() * 1000));
  const [upvoted, setUpvoted] = useState(false);


  const handleUpvote = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (upvoted) {
      setUpvoted(false);
      setUpvotes(upvotes - 1);
    } else {
      setUpvoted(true);
      setUpvotes(upvotes + 1);
    }
  };

  const CustomDropdown = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href='##'
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <MoreHoriz />
      {children}
    </a>
  ));

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea disableRipple style={{ cursor: 'default' }}>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            { user ?
            <div
              className="d-flex gap-2"
              onMouseDown={(e) => {
                e.stopPropagation();
              }}
            >
              {upvoted ? (
                <FlagIcon
                  style={{ color: "rgb(238, 181, 80)" }}
                  onClick={handleUpvote}
                />
              ) : (
                <EmojiFlagsOutlinedIcon
                  style={{ color: "rgb(79, 126, 225)" }}
                  onClick={handleUpvote}
                />
              )}
              <Typography onClick={(e) => e.preventDefault()}>
                {upvotes}
              </Typography>
            </div> : null }
            <Typography variant="h5">
              {post.name.slice(0, 75) + (post.name.length > 75 ? "..." : "")}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(
                new Date(Date.parse(post.createdAt))
              )}{" "}
              | {`${post.city}, ${post.country}`}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description.slice(0, 100) +
                (post.description.length > 100 ? "..." : "")}
            </Typography>
            <Typography variant="subtitle1">
              <a href={`/${type}/${post._id}`} className='link-primary'>{t("post")}</a>
            </Typography>
            {user ?
            <Dropdown align='end' drop='down'>
              <Dropdown.Toggle as={CustomDropdown} variant="success" id={`${post.name.replaceAll(' ', '-')}dropdown`} />
              <Dropdown.Menu className='rounded-0'>
                { user.isAdmin ? <><Dropdown.Item>Remove { type }</Dropdown.Item><Dropdown.Item>Edit tags</Dropdown.Item><Dropdown.Divider /></> : null }
                <Dropdown.Item >Create related idea/challenge</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> : null }
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 150,
              height: 150,
              display: { xs: "none", sm: "block" },
            }}
            image={getImage(post.tag[0])}
            alt={post.tag[0]}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default FeaturedPost;
