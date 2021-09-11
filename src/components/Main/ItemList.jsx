import ImageList from "@material-ui/core/ImageList";
import productData from "../Product/ProductData";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    bodyTitle:{
        fontFamily: "twayair",
        textAlign:"center",
        paddingBottom: "40px"
    },
    imageList: {
        width: 500,
        height: 750,
        transform: 'translateZ(0)',
    },
    titleBar: {
        background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    icon: {
        color: 'white',
    },
}));


const ItemList = () => {
    const classes = useStyles();

  return(
      <div className={classes.root}>
          <ImageList rowHeight={200} gap={1} className={classes.imageList}>
              {productData.map((item) => (
                  <ImageListItem key={item.img} cols={item.featured ? 2 : 1} rows={item.featured ? 2 : 1}>
                      <img src={item.img} alt={item.title} />
                      <ImageListItemBar
                          title={item.title}
                          position="top"
                          actionIcon={
                              <IconButton aria-label={`star ${item.title}`} className={classes.icon}>
                                  <StarBorderIcon />
                              </IconButton>
                          }
                          actionPosition="left"
                          className={classes.titleBar}
                      />
                  </ImageListItem>
              ))}
          </ImageList>
      </div>
  );
};

export default ItemList;