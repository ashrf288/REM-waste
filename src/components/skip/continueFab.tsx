// components/skip/ConfirmSkipDialog.tsx
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

interface ConfirmSkipDialogProps {
  open: boolean;
  skipDetails: {
    name: string;
    price: number;
  } | null;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmSkipDialog = ({
  open,
  skipDetails,
  onClose,
  onConfirm,
}: ConfirmSkipDialogProps) => {
  if (!skipDetails) return null;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm Skip Selection</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You have selected <strong>{skipDetails.name}</strong> with a price of
          <strong> £{skipDetails.price.toFixed(2)}</strong>. Are you sure you
          want to continue?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={onConfirm} color="primary" autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmSkipDialog;
