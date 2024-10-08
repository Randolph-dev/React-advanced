import { Typography } from "@mui/material";
import { url } from "../api/api";
import ComponentA from "../components/ComponentA";
import { getData } from "../services/apiRequests";
import { useEffect, useState } from "react";
import useData from "../../contexts/useData";

// const data = await getData(url);


const Home = () => {
  const  { data } = useData;

  console.log("Data: ", data);

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
      <ComponentA />
    </div>
  );
};

export default Home;
