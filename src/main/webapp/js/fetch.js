function upload_image_js() {
    console.log("im in js")
    fetch("http://localhost:8081/upload-servlet", {
        method: 'POST'
    })
}