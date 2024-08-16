import { Typography } from "@mui/material";
import { url } from "../api/api";
import ComponentA from "../components/ComponentA";
import { getData } from "../services/apiRequests";
import { useEffect, useState } from "react";

const data = await getData(url);

console.log("Data: ", data);

const Home = () => {

  useEffect(() => {
    if (!data) {
      getData(url).then((response) => {
        setData(response.data)
      })
    };
  })

  return (
    <div>
      <Typography variant="h6" component="h2">
        Home
      </Typography>
      <ComponentA data={setData} />
    </div>
  );
};

export default Home;
