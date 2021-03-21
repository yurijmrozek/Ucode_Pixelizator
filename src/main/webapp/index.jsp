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
    <input type="range" id="range" min="0" max="100" step="1" value="0" onchange="range_changed('range')">
    <input type="number" id="range-num" size="3" min="0" max="100" value="0" onchange="range_changed('num')"><br><br><br>
    <img src="" style="max-width: 450px; max-height: 450px"  alt="Image preview"><br><br><br>
    <p id="error-text"></p>
</body>
</html>