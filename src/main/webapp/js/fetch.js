let file;
let range;
let fformat;
let fsize;

async function pixelate_post() {
    const url = "http://localhost:8081/upload-servlet";
    const form_data = new FormData();

    if (file && check_format()) {
        form_data.append('file', file);
        form_data.set('fname', file.name);
        form_data.set('fformat', fformat);
        form_data.set('fsize', fsize);
        form_data.set('range', range.value);

        try {
            let resp = await fetch(url, {
                method: 'POST',
                body: form_data,
                enctype: 'multipart/form-data'
            });
            const data = await resp.text();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
}

function check_format() {
    fformat = file.name.substr(file.name.lastIndexOf('.', file.name.length) + 1);
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
    const num = document.getElementById("range-num");

    if (from === "range") {
        num.value = range.value;

        range.oninput = function() {
            num.innerHTML = this.value;
        }
        pixelate_post();
    } else {
        if (num.value <= 100 && num.value >= 0) {
            range.value = num.value;
            num.oninput = function() {
                range.innerHTML = this.value;
            }
            pixelate_post();
        }
    }
}
