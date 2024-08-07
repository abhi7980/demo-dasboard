import React from "react";
import {
  Box,
  Paper,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Select,
  MenuItem,
  ListItemButton,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CancelIcon from "@mui/icons-material/Cancel";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CustomGauge from "./CustomGauge";
import BarChartCustom from "./BarChartCustom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import CustomTable from "./CustomTable";
import FeedbackCard from "./FeedBack";

function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                  height: 140,
                  backgroundColor: "#1e1e1e",
                  borderRadius: 2,
                  position: "relative",
                  gap: "10px",
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    fontSize: 50,
                    color: "#fff",
                    padding: "5px",
                    borderRadius: "5px",
                    backgroundColor: "rgba(41,51,103, 0.8)",
                  }}
                />
                <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                  Total Orders
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    bottom: 10,
                    right: 10,
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    75
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      bottom: 10,
                      right: 10,
                      width: "100%",
                    }}
                  >
                    <ArrowDropUpIcon sx={{ fontSize: 20, color: "green" }} />
                    <Typography
                      variant="body2"
                      sx={{ color: "green", ml: 0.5 }}
                    >
                      3%
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                  height: 140,
                  backgroundColor: "#1e1e1e",
                  borderRadius: 2,
                  position: "relative",
                  gap: "10px",
                }}
              >
                <ShoppingBagIcon
                  sx={{
                    fontSize: 50,
                    color: "green",
                    padding: "5px",
                    borderRadius: "5px",
                    backgroundColor: "rgba(23,81,70, 0.8)",
                  }}
                />
                <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                  Total Delivered
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    bottom: 10,
                    right: 10,
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    70
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      bottom: 10,
                      right: 10,
                      width: "100%",
                    }}
                  >
                    <ArrowDropDownIcon sx={{ fontSize: 20, color: "red" }} />
                    <Typography variant="body2" sx={{ color: "red", ml: 0.5 }}>
                      3%
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                  height: 140,
                  backgroundColor: "#1e1e1e",
                  borderRadius: 2,
                  position: "relative",
                  gap: "10px",
                }}
              >
                <CancelIcon
                  sx={{
                    fontSize: 50,
                    color: "rgb(240 93 91)",
                    padding: "5px",
                    borderRadius: "5px",
                    backgroundColor: "rgba(95,51,55, 0.8)",
                  }}
                />
                <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                  Total Cancelled
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    bottom: 10,
                    right: 10,
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    5
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      bottom: 10,
                      right: 10,
                      width: "100%",
                    }}
                  >
                    <ArrowDropUpIcon sx={{ fontSize: 20, color: "green" }} />
                    <Typography
                      variant="body2"
                      sx={{ color: "green", ml: 0.5 }}
                    >
                      3%
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                  height: 140,
                  backgroundColor: "#1e1e1e",
                  borderRadius: 2,
                  position: "relative",
                  gap: "10px",
                }}
              >
                <MonetizationOnIcon
                  sx={{
                    fontSize: 50,
                    color: "pink",
                    padding: "5px",
                    borderRadius: "5px",
                    backgroundColor: "rgba(92,42,74, 0.8)",
                  }}
                />
                <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                  Total Revenue
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    bottom: 10,
                    right: 10,
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    $12k
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                      bottom: 10,
                      right: 10,
                      width: "100%",
                    }}
                  >
                    <ArrowDropDownIcon sx={{ fontSize: 20, color: "red" }} />
                    <Typography variant="body2" sx={{ color: "red", ml: 0.5 }}>
                      3%
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 400,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6">Activity</Typography>
                  <Select
                    defaultValue="weekly"
                    variant="outlined"
                    sx={{
                      width: "100px",
                      borderRadius: "25px",
                      height: "30px",
                      color: "white",
                      backgroundColor: "#ffffff7a",
                      ".MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                      ".MuiSvgIcon-root": { color: "white" },
                    }}
                  >
                    <MenuItem value="daily">Daily</MenuItem>
                    <MenuItem value="weekly">Weekly</MenuItem>
                    <MenuItem value="monthly">Monthly</MenuItem>
                  </Select>
                </Box>
                <BarChartCustom />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 350,
                }}
              >
                <Typography variant="h6">Recent Orders</Typography>
                <CustomTable />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 1,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                  justifyContent: "space-between",
                  height: 140,
                  backgroundColor: "#1e1e1e",
                  borderRadius: 2,
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    p: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "center",
                    height: 140,
                    gap: "10px",
                  }}
                >
                  <Typography variant="h6" sx={{ color: "#fff" }}>
                    Net Profit
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    $6759.25
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "start",
                      bottom: 10,
                      right: 10,
                      width: "100%",
                    }}
                  >
                    <ArrowDropUpIcon sx={{ fontSize: 20, color: "green" }} />
                    <Typography
                      variant="body2"
                      sx={{ color: "green", ml: 0.5 }}
                    >
                      3%
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <CustomGauge value={70} max={100} color={"#0072E5"} />
                  <Typography variant="body2"> *Lorem Ipsum sit.</Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 400,
                }}
              >
                <List sx={{ gap: "25px", paddingTop: "50px" }}>
                  {[
                    { text: "Goals", icon: <AddCircleOutlineIcon /> },
                    { text: "Popular Dishes", icon: <LunchDiningIcon /> },
                    { text: "Menus", icon: <MenuBookIcon /> },
                  ].map((item, index) => (
                    <ListItem
                      button
                      key={index}
                      sx={{ gap: "15px", padding: "22px" }}
                    >
                      <ListItemIcon
                        sx={{
                          backgroundColor: "#43a155b0",
                          borderRadius: "25px",
                          padding: "15px",
                          minWidth: "unset",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                      <ListItemButton sx={{ justifyContent: "end" }}>
                        <NavigateNextIcon
                          sx={{
                            backgroundColor: "#ffffff5e",
                            borderRadius: "15px",
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 350,
                }}
              >
                <Typography variant="h6">Customer's Feedback</Typography>
                <FeedbackCard />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
