<h1>3D House Design Recommendation System</h1>
        <h2>Introduction</h2>
        <p>Welcome to the 3D House Design Recommendation System, a web-based application that leverages AI to provide personalized 3D house design recommendations. This project integrates a Python backend, HTML/CSS frontend, and interactive 3D visualizations using .glb files stored in the <code>static/3d_models</code> folder, with a map interface powered by Leaflet and Geopy for location-based features.</p>
        <h2>Features</h2>
        <ul>
            <li><strong>AI-Powered Recommendations</strong>: Utilizes machine learning to suggest house designs based on user preferences.</li>
            <li><strong>3D Visualization</strong>: Displays house designs in 3D using .glb files stored in the <code>static/3d_models</code> folder for an immersive experience.</li>
            <li><strong>Map Interface</strong>: Integrates Leaflet and Geopy to provide location-based design recommendations and visualizations.</li>
            <li><strong>Responsive Frontend</strong>: Built with HTML, CSS, and JavaScript for a user-friendly interface.</li>
            <li><strong>Python Backend</strong>: Handles data processing, AI model integration, and API endpoints.</li>
        </ul>
        <h2>Tech Stack</h2>
        <ul>
            <li><strong>Python</strong>: Backend logic, AI model implementation, and data processing.</li>
            <li><strong>HTML/CSS/JavaScript</strong>: Frontend interface for user interaction.</li>
            <li><strong>.glb Files</strong>: 3D models stored in the <code>static/3d_models</code> folder for house design visualizations.</li>
            <li><strong>Leaflet</strong>: Interactive map interface for location-based features.</li>
            <li><strong>Geopy</strong>: Geocoding and location data processing.</li>
            <li><strong>Three.js</strong>: Rendering 3D models in the browser.</li>
        </ul>
        <h2>Installation</h2>
        <p>To set up and run the project locally, follow these steps:</p>
        <ol>
            <li><strong>Clone the Repository</strong>:
                <pre><code>git clone https://github.com/Dharaneesh05/3D-House-Design-Recommendation-System.git
cd 3D-House-Design-Recommendation-System</code></pre>
            </li>
            <li><strong>Install Python Dependencies</strong>:
                <p>Navigate to the project directory and install dependencies:</p>
                <pre><code>pip install -r requirements.txt</code></pre>
            </li>
            <li><strong>Run the Application</strong>:
                <p>Start the Python backend:</p>
                <pre><code>python main.py</code></pre>
            </li>
            <li><strong>Access the Application</strong>:
                <p>Open your browser and navigate to <a href="http://localhost:5000">http://localhost:5000</a> (or the port specified in your configuration).</p>
            </li>
        </ol>
        <h2>Usage</h2>
        <ol>
            <li><strong>Launch the Application</strong>:
                <p>Open the application in your browser.</p>
            </li>
            <li><strong>Input Preferences</strong>:
                <p>Enter your preferences (e.g., location, design style, budget) through the frontend.</p>
            </li>
            <li><strong>Explore Recommendations</strong>:
                <p>View AI-generated house design recommendations displayed in 3D using .glb files from the <code>static/3d_models</code> folder.</p>
            </li>
            <li><strong>Use the Map Interface</strong>:
                <p>Utilize the Leaflet-based map to view location-specific design suggestions.</p>
            </li>
            <li><strong>Save Designs</strong>:
                <p>Save or export your favorite designs for further review.</p>
            </li>
        </ol>
        <h2>Project Structure</h2>
        <pre><code>3D-House-Design-Recommendation-System/
├── static/
│   └── 3d_models/          # .glb files for 3D house models
├── frontend/               # HTML, CSS, JavaScript files
├── backend/                # Python scripts for backend logic
├── models/                 # AI model files and scripts
├── requirements.txt        # Python dependencies
├── README.html             # This file
└── main.py                 # Main application script
</code></pre>
        <h2>Contributing</h2>
        <p>Contributions are welcome! To contribute:</p>
        <ol>
            <li>Fork the repository.</li>
            <li>Create a new branch (<code>git checkout -b feature-branch</code>).</li>
            <li>Make your changes and commit (<code>git commit -m "Add feature"</code>).</li>
            <li>Push to the branch (<code>git push origin feature-branch</code>).</li>
            <li>Open a pull request with a detailed description of your changes.</li>
        </ol>
        <p>Please ensure your code follows the project’s coding standards and includes appropriate documentation.</p>
        <h2>License</h2>
        <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
        <h2>Acknowledgments</h2>
        <ul>
            <li><a href="https://github.com/Dharwin77">Dharwin77</a> for the project foundation.</li>
            <li>Inspired by interactive design and AI recommendation projects on GitHub.</li>
        </ul>
    </div>
</body>
</html>
