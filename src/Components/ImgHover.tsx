import Hover from "../Models/Hover";

function ImgHover({ src, hovers, width, height }: { src: string; hovers: Hover[]; width?: any; height?: any }) {
    return (
        <div 
            className="img-hover-content" 
            style = {{ 
                backgroundImage: `url(${src})`, 
                height: height || 'auto',
                width: width || 'auto',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
            <div style={{ width: "100%", height: "100%" }}>
                {hovers.map((hover, index) => (
                    <div 
                        key={index} 
                        className="hover-item" 
                        style={{ 
                            display: "flex",
                            position: "relative",
                            top: hover.startingCoordinates.y, 
                            left: hover.startingCoordinates.x, 
                            width: hover.width, 
                            height: hover.height, 
                            border:"3px solid black"  
                        }}>
                        {/*hover.text*/}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImgHover;