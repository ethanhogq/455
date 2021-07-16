import React from "react";
import { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import {  BootstrapInput } from "./CustomizedComponents";
import imgPlaceholder from "../assets/photo_placeholder.svg";
import {FaHeart, FaRegHeart} from "react-icons/fa";
import {BsFillChatSquareDotsFill} from "react-icons/bs";
import { IconContext } from "react-icons";
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);
const DeleteImage = withStyles((theme) => ({
  root: {
    transform: "translate(0, -8vh)",
    background: "white",
  },
}))(IconButton);
const TitleInput = withStyles((theme) => ({
  root: {
    width: "90%",
  },
}))(TextField);
const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;
const Date = styled.span`
position: absolute;
right: 80%;
`;

const ImgPlaceholder = styled.div`
  background-image: url(${imgPlaceholder});
  background-color: aliceblue;
  background-repeat: no-repeat;
  background-size: 60%;
  height: 25vh;
  width: 564px;
  background-position: 60%;
  border-radius: 10px;
  border-style: dashed;
  border-color: lightgrey;
`;
const UploadInstruction = styled.span`
  position: absolute;
  transform: translate(65%, 20px);
  font-weight: bold;
`;

export default function CustomizedDialogs({
  journal,
  handleSave,
  handleClose,
  authorMode,
}) {
  const [visibility, setVisibility] = useState("private");
  const [content, setContent] = useState(journal.content);
  const [title, setTitle] = useState(journal.title);
  const [coverImg, setCoverImg] = useState(journal.image);
  const [liked, setLiked] = useState(false);
  const handleVisibilityChange = (event) => {
    setVisibility(event.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleImgDelete = () => {
    setCoverImg("");
  };
  const handleLike =()=>{
    setLiked(state=>!state)
  }

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={true}
        maxWidth="sm"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            <TitleInput
              id="outlined-basic"
              label="Title"
              variant="outlined"
              size="small"
              value={title}
              onChange={handleTitleChange}
            />
        </DialogTitle>
        <DialogContent dividers>
          <Typography component={"span"} gutterBottom>
            {!coverImg && (
              <UploadInstruction>
                Drag and drop or click to upload
              </UploadInstruction>
            )}
            {!coverImg && (
              <>
                <ImgPlaceholder />{" "}
              </>
            )}

            <Image src={coverImg} alt="" />

              <span onClick={handleImgDelete}>
                {" "}
                <DeleteImage aria-label="delete">
                  <FaRegTrashAlt />
                </DeleteImage>
              </span>
              <TextField
                fullWidth
                label="Content"
                id="outlined-basic"
                variant="outlined"
                multiline
                rows="10"
                value={content}
                onChange={handleContentChange}
              />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Date>{journal.date}</Date>
          {authorMode&&
          <>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={visibility}
            onChange={handleVisibilityChange}
            input={<BootstrapInput />}
          >
            <MenuItem value="private">private</MenuItem>
            <MenuItem value="public">public </MenuItem>
          </Select>
        
          </>}
         <>
          <span onClick={handleLike}>
         {!liked&&
         <IconButton>
              <FaRegHeart/>
            </IconButton>} 
            {liked&&
            <IconContext.Provider value={{ color: "#b95050" }}>
                 <IconButton >
              <FaHeart/>
            </IconButton>
          </IconContext.Provider>
}
          </span>
            <IconButton colorPrimary>
              <BsFillChatSquareDotsFill/>
            </IconButton>
            {authorMode&&
            <>
            <span>
                <IconButton colorPrimary>
                     <FaRegTrashAlt />
                </IconButton>
            </span>
   
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
            </>}
          </>
        </DialogActions>
      </Dialog>
    </div>
  );
}
