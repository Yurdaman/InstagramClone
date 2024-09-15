import React, { useState } from "react";
import { Image, StyleSheet, View, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import AuthorRow from "./AuthorRow";

const Card = ({
  fullname,
  image,
  linkText = "",
  onPressLinkText = () => {},
}) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  

  return (
    <View>
      <AuthorRow
        fullname={fullname}
        linkText={linkText}
        onPressLinkText={onPressLinkText}
      />
      <View style={styles.image}>
        {loading && (
          <ActivityIndicator style={StyleSheet.absoluteFill} size="large" />
        )}
        <Image
          style={StyleSheet.absoluteFill}
          source={image}
          onLoad={handleLoad}
        />
      </View>
    </View>
  );
};

Card.propTypes = {
  fullname: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  linkText: PropTypes.string,
  onPressLinkText: PropTypes.func,
};



const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: "rgba(0,0,0,0.02)",
  },
});

export default React.memo(Card, (prevProps, nextProps) => {
  return prevProps.linkText === nextProps.linkText;
});
