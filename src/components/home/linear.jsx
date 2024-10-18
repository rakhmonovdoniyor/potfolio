import * as React from "react";
import Stack from "@mui/joy/Stack";
import LinearProgress from "@mui/joy/LinearProgress";
import { LineCon, LineDiv } from "../../styles/line";

export default function LinearProgressDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack sx={{ flex: 1 }}>
      <LineCon>
        <LineDiv>
          <h1>gjg</h1>
          <LinearProgress
            color="primary"
            determinate
            size="md"
            value={77}
            variant="solid"
          >
            ddd
          </LinearProgress>
        </LineDiv>
        <div>
          <h1>hkl</h1>
        </div>
        <LinearProgress determinate value={50} />
        <LinearProgress determinate value={75} />
        <LinearProgress determinate value={100} />
        {/* <LinearProgress determinate value={progress} /> */}
      </LineCon>
    </Stack>
  );
}
