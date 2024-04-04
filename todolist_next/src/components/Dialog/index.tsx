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

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  async function postList(data:any) {
    try {
      await fetch("http://localhost:3000/api/todo",{
        method:"POST",
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log("error - ", error);
    }
  }
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add new Item
      </Button>
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
        <DialogTitle>New List Item</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter new List Item
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="list"
            label=""
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Create</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}