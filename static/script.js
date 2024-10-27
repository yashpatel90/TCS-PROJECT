// script.js
document.addEventListener('DOMContentLoaded', () => {
    const model = document.querySelector("a-entity[gltf-model]");

    // Rotate model on mouse move
    document.addEventListener('mousemove', (event) => {
        model.object3D.rotation.y += event.movementX * 0.005;
        model.object3D.rotation.x += event.movementY * 0.005;
    });

    // Zoom model with mouse wheel
    document.addEventListener('wheel', (event) => {
        const scale = model.getAttribute('scale');
        const newScale = {
            x: scale.x + event.deltaY * -0.001,
            y: scale.y + event.deltaY * -0.001,
            z: scale.z + event.deltaY * -0.001,
        };
        model.setAttribute('scale', newScale);
    });
});
