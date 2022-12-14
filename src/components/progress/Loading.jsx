import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import LinearProgress from "@mui/material/LinearProgress";
import Box from '@mui/material/Box';
import styled from 'styled-components';

function LinearProgressWithLabel(props) {
  return (
    <Container>
      <h1 style={{fontSize : "1.3rem"}}>Milad Amiri</h1>
      <Box width="15rem" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography>{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Container>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function Loading() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="root">
      <LinearProgressWithLabel value={progress} />
    </div>
  );
}

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    animation: animation 1s ease-in-out;
    transition: opacity 0.5s linear;
`