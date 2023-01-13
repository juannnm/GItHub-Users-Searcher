import React from "react";
import { CardMedia, Grid, Stack } from "@mui/material";
import PrincipalInformation from '../../components/PrincipalInformation';
import Description from "../Description";

const UserCard = (props) => {
  const {
    userState,

  } = props;
  const { avatar_url } = userState;

  return (
    <Grid
      container
      spacing={2}
      sx={{ mt: '15px' }}
    >
      <Grid item xs={3}>
        <CardMedia
          component='img'
          alt='Git'
          image={avatar_url}
          sx={{
            borderRadius: '50%',
            ml: '10px',
          }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack
          direction='column'
          spacing={1}
          sx={{m:'30px'}}

        >
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>

    </Grid>

  )
}

export default UserCard;