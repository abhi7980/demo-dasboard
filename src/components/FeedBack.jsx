import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Grid,
  Divider,
} from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";

const feedbacks = [
  {
    name: "Jenny Wilson",
    rating: 4,
    feedback:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg", // Replace with actual image URL
  },
  {
    name: "Dianne Russell",
    rating: 5,
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with actual image URL
  },
  {
    name: "Jenny Wilson",
    rating: 4,
    feedback:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg", // Replace with actual image URL
  },
  {
    name: "Dianne Russell",
    rating: 5,
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg", // Replace with actual image URL
  },
];

const renderStars = (rating) => {
  return (
    <>
      {[...Array(5)].map((_, index) =>
        index < rating ? (
          <Star key={index} sx={{ color: "gold" }} />
        ) : (
          <StarBorder key={index} sx={{ color: "gold" }} />
        )
      )}
    </>
  );
};

const FeedbackCard = () => {
  return (
    <Box sx={{ paddingTop: "15px", overflowY: "auto" }}>
      {feedbacks.map((feedback, index) => (
        <Box key={index} mb={3}>
          <Grid container alignItems="center">
            <Grid item>
              <Avatar
                src={feedback.avatar}
                alt={feedback.name}
                sx={{ width: 50, height: 50, marginRight: 2 }}
              />
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                {feedback.name}
              </Typography>
              <Box display="flex">{renderStars(feedback.rating)}</Box>
            </Grid>
          </Grid>
          <Typography variant="body2" component="p" mt={1} mb={2}>
            {feedback.feedback}
          </Typography>
          <Divider />
        </Box>
      ))}
    </Box>
  );
};

export default FeedbackCard;
