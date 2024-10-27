// Load joystick library and set up controls
document.addEventListener('DOMContentLoaded', () => {
    const model = document.querySelector("#astronaut");

    // Initialize joystick
    const joystick = new VirtualJoystick({
        container: document.getElementById('joystickContainer'),
        mouseSupport: true,
    });

    // Rotate model based on mouse movement
    document.addEventListener('mousemove', (event) => {
        model.object3D.rotation.y += event.movementX * 0.005;
        model.object3D.rotation.x += event.movementY * 0.005;
    });

    // Zoom in/out on the model with mouse wheel
    document.addEventListener('wheel', (event) => {
        const scale = model.getAttribute('scale');
        const newScale = {
            x: scale.x + event.deltaY * -0.001,
            y: scale.y + event.deltaY * -0.001,
            z: scale.z + event.deltaY * -0.001,
        };
        model.setAttribute('scale', newScale);
    });

    // Update model position based on joystick input
    function updatePosition() {
        if (joystick.deltaX() || joystick.deltaY()) {
            const position = model.object3D.position;
            position.x += joystick.deltaX() * 0.001; // Adjust movement speed
            position.z += joystick.deltaY() * 0.001; // Adjust movement speed
        }
        requestAnimationFrame(updatePosition);
    }
    updatePosition();
});
