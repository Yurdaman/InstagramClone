import React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";
import { getImageFromId } from "./api";
import Card from "./Card";

const CardList = ({ items }) => {
  const renderItem = ({ item: { id, author } }) => (
    <Card fullname={author} image={{ uri: getImageFromId(id) }} />
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardList;
