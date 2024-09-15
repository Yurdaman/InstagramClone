import React, { useState, useEffect } from "react";
import { ActivityIndicator, Text, SafeAreaView } from "react-native";
import PropTypes from "prop-types";

import { fetchImages } from "../api";
import CardList from "../CardList";

const Feed = ({ style }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await fetchImages();
        setLoading(false);
        setItems(items);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    };
    fetchData();
  }, []);
  
  return (
    <>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text> Error...</Text>}
      {!loading && !error && (
        <SafeAreaView style={style}>
          <CardList items={items} />
        </SafeAreaView>
      )}
    </>
  );
};


Feed.propTypes = {
  style: PropTypes.object,
};



export default Feed;
