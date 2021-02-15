import { useCallback } from "react";

import { Container, TextField } from "@material-ui/core";
import type { TextFieldProps } from "@material-ui/core";

type ChangeEvent = NonNullable<TextFieldProps["onChange"]>;

export default function App() {
  const onChangeFirst = useCallback<ChangeEvent>((event) => {
    console.log(event);
  }, []);

  return (
    <Container maxWidth="sm">
      <TextField onChange={onChangeFirst} />
      <br />
      <TextField
        onChange={(event) => {
          console.log(event);
        }}
      />
    </Container>
  );
}
