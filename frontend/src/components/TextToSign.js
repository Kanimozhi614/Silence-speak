import React, { useState } from 'react';
import './TextToSign.css'; // Optional: for styling
const signLanguageMapping = {
    a: '/sign_images/A_test.jpg',
    b: '/sign_images/B_test.jpg',
    c: '/sign_images/C_test.jpg',
    d: '/sign_images/D_test.jpg',
    e: '/sign_images/E_test.jpg',
    f: '/sign_images/F_test.jpg',
    g: '/sign_images/G_test.jpg',
    h: '/sign_images/H_test.jpg',
    i: '/sign_images/I_test.jpg',
    j: '/sign_images/J_test.jpg',
    k: '/sign_images/K_test.jpg',
    l: '/sign_images/L_test.jpg',
    m: '/sign_images/M_test.jpg',
    n: '/sign_images/N_test.jpg',
    o: '/sign_images/O_test.jpg',
    p: '/sign_images/P_test.jpg',
    q: '/sign_images/Q_test.jpg',
    r: '/sign_images/R_test.jpg',
    s: '/sign_images/S_test.jpg',
    t: '/sign_images/T_test.jpg',
    u: '/sign_images/U_test.jpg',
    v: '/sign_images/V_test.jpg',
    w: '/sign_images/W_test.jpg',
    x: '/sign_images/X_test.jpg',
    y: '/sign_images/Y_test.jpg',
    z: '/sign_images/Z_test.jpg'
  };
  const TextToSign = () => {
    const [text, setText] = useState('');
    const [signImages, setSignImages] = useState([]);
    const [zoomedImage, setZoomedImage] = useState(null);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const convertTextToSign = () => {
        const characters = text.toLowerCase().split('');
        const images = characters.map(char => signLanguageMapping[char] || null);
        setSignImages(images);
    };

    const handleImageClick = (image) => {
        setZoomedImage(image);
    };

    const handleCloseZoom = () => {
        setZoomedImage(null);
    };

    return (
        <div className="text-to-sign-container">
            <h2>Text to Sign Language</h2>
            <input 
                type="text" 
                value={text} 
                onChange={handleTextChange} 
                placeholder="Enter text" 
                className="text-input"
            />
            <button onClick={convertTextToSign} className="convert-button">Convert to Sign</button>
            <div className="sign-images">
                {signImages.map((image, index) => 
                    image ? 
                    <img 
                        key={index} 
                        src={image} 
                        alt={`Sign for ${text[index]}`} 
                        className="sign-image" 
                        onClick={() => handleImageClick(image)} // Zoom on click
                    /> 
                    : null
                )}
            </div>
            
            {zoomedImage && (
                <div className="zoomed-image-overlay" onClick={handleCloseZoom}>
                    <img src={zoomedImage} alt="Zoomed Sign" className="zoomed-image" />
                </div>
            )}
        </div>
    );
};

export default TextToSign;