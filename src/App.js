import { Alert, Button } from '@mui/material';
import { useState } from 'react';

export default function SimpleAlert() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Alert</Button>
      {open && <Alert severity="info" onClose={() => setOpen(false)}>This is an alert!</Alert>}
    </>
  );
}
