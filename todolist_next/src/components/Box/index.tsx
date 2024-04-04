"use client"

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { validation } from '@/app/actions';
import { IconButton } from '@mui/material';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

interface FormBoxProps {
  id: string,
  content : string
}

export default function FormBox(props: FormBoxProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  async function postList(data:any) {
    try {
      const res = await fetch(`http://localhost:3000/api/todo/${props.id}`,{
        method:"PUT",
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log("error - ", error);
    }
  }
  return (
    <React.Fragment>
      <IconButton  onClick={handleClickOpen}>
        <ModeEditOutlineIcon/>
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const list = formJson.list;
            console.log("list",list);
            postList({content: list});
            handleClose();
            console.log("validate ")
            validation();
          },
        }}
      >
        <DialogTitle>Edit Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edit Item
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="list"
            defaultValue={props.content}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Edit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}