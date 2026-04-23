const ImageKit = require('@imagekit/nodejs');

const imagekit = new ImageKit({
    privateKey: 'private_XT+SAz5J8vVCBrzOEpqSq4A9AJ8=',
});

async function uploadFile(buffer) {

    console.log(buffer)

    const result = await imagekit.files.upload({
        file: buffer.toString('base64'),
        fileName: 'image.jpg'
    })

    return result;
}

module.exports = uploadFile;