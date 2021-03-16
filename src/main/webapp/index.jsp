<!doctype html>
<html lang="en">
<head>
    <%@ page contentType="text/html;charset=UTF-8" %>
    <style><%@include file="css/style.css"%></style>
    <title>Ucode_Pixelizator</title>
</head>
<body>
    <header>
        <div class="top-header">
            <p>PIXELIZATOR</p>
        </div>
    </header>

    <div class="file-input">
        <form action="download-image" method="POST">
            <p>Load image to server</p>
            <p>
                <input type="file" name="photo" multiple accept="image/*,image/jpeg">
                <input type="submit" name="Submit">
            </p>
        </form>
    </div>

    <div class="loaded-img">
        <p>image</p>
    </div>

    <div class="options">
        <p>options</p>
    </div>

    <div class="preview">
        <p>image</p>
    </div>

    <div class="download">
        <input type="button"/>
    </div>
</body>
</html>