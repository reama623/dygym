import { AlertIcon } from "@chakra-ui/react";

export default function Alert() {
  return (
    <Alert status="warning">
      <AlertIcon />
      Seems your account is about expire, upgrade now
    </Alert>
  );
}
