const urlParams = new URLSearchParams(window.location.search);
const modelPath = urlParams.get('model');

if (modelPath) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add Lighting
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    let model; // Declare model globally to access it in the animate function

const loader = new THREE.GLTFLoader();
loader.load(
    modelPath,
    (gltf) => {
        model = gltf.scene; // Assign the model to the global variable
        scene.add(model);

        // Center the model in the scene
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        // Adjust the camera distance based on the model size
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        camera.position.z = maxDim * 1.5;

        animate();
    },
    undefined,
    (error) => {
        console.error('Error loading model:', error);
    }
);

function animate() {
    requestAnimationFrame(animate);

    // Rotate the model if it's loaded
    if (model) {
        model.rotation.y += 0.01; // Rotate the model around the Y-axis
    }

    renderer.render(scene, camera);
}}
