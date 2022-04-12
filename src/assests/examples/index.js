const detected_images_example = [];
const importAll = require => {
    require.keys().forEach(key => {
        detected_images_example.push({image: require(key), text: "violenta"})
    });
}
importAll(require.context("./", false, /\.(jpe?g)$/))


export default detected_images_example;



