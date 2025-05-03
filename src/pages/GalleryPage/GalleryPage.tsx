import {
  Box,
  Typography,
  Card,
  CardMedia,
  Grid,
  IconButton,
  CardContent,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import armImage from "../../assets/images/arm.jpg";
import catImage from "../../assets/images/cat.jpg";
import circleImage from "../../assets/images/circle.jpg";
import flowerImage from "../../assets/images/flower.jpg";
import legImage from "../../assets/images/leg.jpg";
import snakeImage from "../../assets/images/snake.jpg";
import { useState } from "react";

const sampleImages = [
  { url: armImage, artist: "溜溜" },
  { url: catImage, artist: "Master Shifu" },
  { url: circleImage, artist: "我的妈呀" },
  { url: flowerImage, artist: "Hannah Xiao" },
  { url: legImage, artist: "牛" },
  { url: snakeImage, artist: "吴博美" },
];

const GalleryPage = () => {
  const [likes, setLikes] = useState<number[]>([12, 34, 45, 8, 56, 23]); // Prepopulate with dummy likes
  const [liked, setLiked] = useState<boolean[]>(
    new Array(sampleImages.length).fill(false)
  ); // Track if user has liked
  const [favorites, setFavorites] = useState<boolean[]>(
    new Array(sampleImages.length).fill(false)
  );

  const toggleLike = (index: number) => {
    const newLikes = [...likes];
    const newLikedState = [...liked];

    if (liked[index]) {
      newLikes[index] -= 1;
    } else {
      newLikes[index] += 1;
    }

    newLikedState[index] = !newLikedState[index];

    setLikes(newLikes);
    setLiked(newLikedState);
  };

  const toggleFavorite = (index: number) => {
    const newFavorites = [...favorites];
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e1e2f, #2c2c54)",
        color: "#fff",
        px: 2,
        py: 4,
        textAlign: "center",
      }}
    >
      <Typography variant="h3" sx={{ mb: 2 }}>
        Tattoo Gallery
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{ mb: 4, maxWidth: 600, mx: "auto", color: "#ccc" }}
      >
        Browse through some popular tattoo ideas and styles for inspiration.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {sampleImages.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 3,
                backgroundColor: "#1e1e2f",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={item.url}
                alt={`Tattoo ${index + 1}`}
                sx={{ height: 300, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                  Artist: {item.artist}
                </Typography>
                <Typography variant="body1" sx={{ color: "#ccc", mb: 2 }}>
                  Likes: {likes[index]}
                </Typography>

                <Grid container spacing={2} justifyContent="center">
                  {/* Like Icon Button */}
                  <Grid>
                    <IconButton
                      onClick={() => toggleLike(index)}
                      sx={{
                        color: liked[index] ? "#f50057" : "#ccc",
                        "&:hover": {
                          backgroundColor: liked[index] ? "#c51162" : "#9e9e9e",
                        },
                      }}
                    >
                      <ThumbUpIcon />
                    </IconButton>
                  </Grid>

                  {/* Favorite Icon Button */}
                  <Grid>
                    <IconButton
                      onClick={() => toggleFavorite(index)}
                      sx={{
                        color: favorites[index] ? "#ff9800" : "#ccc",
                        "&:hover": {
                          backgroundColor: favorites[index]
                            ? "#f57c00"
                            : "#9e9e9e",
                        },
                      }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GalleryPage;
