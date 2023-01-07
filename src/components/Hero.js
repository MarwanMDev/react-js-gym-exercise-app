import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroImage from '../assets/images/banner.png';

const Hero = () => {
  return (
    <Box
      sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>

      <Button
        variant="contained"
        sx={{ backgroundColor: '#FF2625', padding: '10px' }}
        href="#exercises"
      >
        Explore Exercises
      </Button>

      <Typography
        sx={{ opacity: 0.1 }}
        fontWeight={600}
        color="#FF2625"
        fontSize="200px"
      >
        Exercise
      </Typography>

      <img
        src={HeroImage}
        alt="heroImage"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default Hero;
