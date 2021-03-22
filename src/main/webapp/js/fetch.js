let file;
let range;
let range_num;
let fformat;
let fname;
let fsize;

async function pixelate_post() {
    const url = "http://localhost:8080/Ucode_Pixelizator_war/upload-servlet";
    const formData = new FormData();

    if (file && check_format()) {
        try {
            formData.append('file', file);
            let response = await fetch(url, {
                method: 'POST',
                body: formData,
                enctype: "multipart/form-data",
                headers: {
                    'range': range.value,
                    'format': fformat
                }
            });
            let blob = await response.blob();
            let reader = new FileReader();
            reader.onloadend = function() { document.querySelector('img').src = reader.result; }
            reader.readAsDataURL(blob);
        } catch(error) {
            console.log(error);
        }
    }
}

function check_format() {
    fformat = file.name.substr(file.name.lastIndexOf('.', file.name.length) + 1);
    fname = file.name.slice(file.name.start, file.name.lastIndexOf('.'));
    fformat = fformat.toLowerCase();
    const document_error = document.getElementById('error-text');
    if (fformat === 'png'
        || fformat === 'bmp'
        || fformat === 'jpeg'
        || fformat === 'jpg') {
        if (fsize > 1024) {
            document_error.textContent = "";
            return true;
        } else {
            document_error.textContent = "File corrupted.";
            return false;
        }
    } else {
        document_error.textContent = "Wrong file format. Choose other.";
        return false;
    }
}

function preview_file() {
    document.getElementById("range-num").value = 1;
    document.getElementById("range").value = 1;
    document.getElementById('error-text').textContent = "";

    file = document.querySelector('input[type=file]').files[0];
    if (file)
        fsize = document.querySelector('input[type=file]').files[0].size;
    const preview = document.querySelector('img');
    const reader = new FileReader();

    reader.onloadend = function() { preview.src = reader.result; }
    if (file && check_format())
        reader.readAsDataURL(file);
    else
        preview.src = "";
}

function range_changed(from) {
    range = document.getElementById("range");
    range_num = document.getElementById("range-num");

    if (from === "range") {
        range_num.value = range.value;

        range.oninput = function() {
            range_num.innerHTML = this.value;
        }
        pixelate_post();
    } else {
        if (range_num.value <= 100 && range_num.value >= 1) {
            range.value = range_num.value;
            range_num.oninput = function() {
                range.innerHTML = this.value;
            }
            pixelate_post();
        }
    }
}
