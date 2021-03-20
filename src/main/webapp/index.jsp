<!doctype html>
<html lang="en">
<head>
    <%@ page contentType="text/html;charset=UTF-8" %>
    <style><%@include file="css/style.css"%></style>
    <script src="js/fetch.js"></script>
    <title>Ucode_Pixelizator</title>
</head>
<body>
    <input type="file" id="upfile"/>
    <button type="submit" onclick="upload_image_js()"></button>
    <img id="img-preview" alt="Your image here"/>
</body>
</html>