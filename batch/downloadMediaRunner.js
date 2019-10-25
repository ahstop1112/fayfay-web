const axios = require('axios/index');
const config = require('../config');
const fs = require('fs');
const path = require('path');
var mkdirp = require('mkdirp');
const del = require('del');


async function downloadImages() {
    const subFolder = 'images';
    del(subFolder);
    mkdirp(subFolder);

    try {
        const loginResponse = await axios.post(`${config.api.defaultApiUrl}/api/auth/login`, {
            'username': config.api.username,
            'password': config.api.password
        }, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'x-site': 'admin'
            }
        });

        const token = loginResponse.data.token;

        try {
            const cloudinaryHost = config.cloudinary.imageUrlPrefix;

            const limit = 50;
            let offset = 0;

            while (true) {
                const getResponse = await axios.get(`${config.api.defaultApiUrl}/api/images?limit=${limit}&offset=${offset}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                const images = getResponse.data;

                if (images == null || images.length === 0) {
                    break;
                }

                for (let index = 0; index < images.length; index++) {
                    const image = images[index];

                    const fileName = path.basename(image.key);
                    let folderPath = image.key.replace(fileName, '');
                    if (path.isAbsolute(folderPath)) {
                        folderPath = folderPath.substring(1);
                    }

                    mkdirp(`${subFolder}/${folderPath}`, async function (err) {
                        if (err) {
                            console.error(err);
                        }
                        else {
                            const url = `${cloudinaryHost}/${image.key}.${image.format}`;

                            try {
                                const response = await axios({
                                    method: 'GET',
                                    url: url,
                                    responseType: 'stream'
                                });

                                response.data.pipe(fs.createWriteStream(path.resolve(__dirname, subFolder, folderPath, `${fileName}.${image.format}`)));

                                // return a promise and resolve when download finishes
                                new Promise((resolve, reject) => {
                                    response.data.on('end', () => {
                                        resolve()
                                    });

                                    response.data.on('error', () => {
                                        reject()
                                    })
                                });
                            }

                            catch (e) {
                                console.log(`CAN NOT DOWNLOAD IMAGE: ${url}`);
                            }
                        }
                    });
                }

                offset += limit;
            }
        }
        catch (e) {
            console.log('DOWNLOAD FAILED');
            console.log(e);
        }
    }
    catch (e) {
        console.log('LOGIN FAILED');
        console.log(e);
    }
}

(async () => {
    console.log('CALLING API');

    await downloadImages();

})().catch(err => {
    console.error(err);

    process.exit();
});

process.on('exit', (code) => {
    console.log('END');
});

process.on('uncaughtException', (err) => {
    console.log(err);
});

