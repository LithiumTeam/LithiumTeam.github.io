let profileImageUrl = [
    ['ShayanCoder710','https://avatars.githubusercontent.com/u/222996328?v=4'],
    ['MACsepehri','https://avatars.githubusercontent.com/u/223106221?v=4'],
    ['artin231','https://avatars.githubusercontent.com/u/286941337?v=4'],
    ['nima2025ne-glitch','https://avatars.githubusercontent.com/u/227001760?v=4'],
    ['Sepehrkarimi1390','https://avatars.githubusercontent.com/u/195758769?v=4'],
    ['codeplus819-ah','https://avatars.githubusercontent.com/u/109726336?v=4']
];

const update_profiles = async () => {
    for (const data of profileImageUrl) {
        let imageId = data[0];
        let imageUrl = data[1];

        try {
            let first_req = await fetch(imageUrl);

            if (!first_req.ok) continue;

            let image_blob = await first_req.blob();
            let image_object = URL.createObjectURL(image_blob);

            document.getElementById(imageId).src = image_object;
        } catch (error) {
            console.error(error);
        }
    }
};

update_profiles();