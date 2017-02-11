
## This project will read images from a directory and upload them to mongo. Then we will Display the image at routes

-----
```
conn is the `mongoose.connection`
```
```
./images is the directory for the images to save to the DB
```
`uploadImages(conn, "./images");`

####first you want to run this function to make sure you have the images in the `fs.files`
uploadImages(conn, "./images"); // uncomment it.
then comment it out so you don't create unwanted files in the DB

##Then we display the images on the route

This is where you can see the individual image. so you can see the image at `http://localhost:3000/girl1.jpg`
```
app.get("/:img"
```


This is where we render all the images.
```
app.get("/",
```

The image below show what `/` looks like.

![alt text](https://github.com/jack2ky/setup-gridfs-stream-to-view-multiple-images-in-screen/blob/master/indexRoute.png "view of page")
