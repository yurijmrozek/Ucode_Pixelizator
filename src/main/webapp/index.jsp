<!doctype html>
<html lang="en">
<head>
    <%@ page contentType="text/html;charset=UTF-8" %>
    <style><%@include file="css/style.css"%></style>
    <script src="js/fetch.js"></script>
    <title>Ucode_Pixelizator</title>
</head>
<body>
    <input type="file" accept="image/png, image/bmp, image/jpeg, image/jpg" onchange="preview_file()"><br><br><br>
    <input type="range" id="range" min="1" max="100" step="1" value="1" onchange="range_changed('range')">
    <input type="number" id="range-num" size="3" min="1" max="100" value="1" onchange="range_changed('num')"><br><br><br>
    <img src="" id="image-res" style="max-width: 450px; max-height: 450px"  alt="Image preview"><br><br><br>
    <p id="file-size"></p><br>
    <button onclick="download_image('png')">png</button>
    <button onclick="download_image('bmp')">bmp</button>
    <button onclick="download_image('jpeg')">jpeg</button>
    <button onclick="download_image('jpg')">jpg</button>

    <p id="error-text"></p><br><br>
</body>
</html>