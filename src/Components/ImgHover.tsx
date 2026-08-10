import Hover from "../Models/Hover";
import "../Components/tooltip.css"

function ImgHover({ src, hovers, width, height, tooltipLocation = "above"}: { src: string; hovers: Hover[]; width?: any; height?: any, tooltipLocation?: string }) {
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
                        className={"hover-item " + (tooltipLocation === "above" ? "tooltip" : "tooltip-right")}
                        style={{ 
                            display: "flex",
                            position: "relative",
                            top: hover.startingCoordinates.y, 
                            left: hover.startingCoordinates.x, 
                            width: hover.width, 
                            height: hover.height, 
                            border:`3px dashed ${hover.color || "blue"}`,
                            borderRadius: "1vh",
                        }}>
                        {<span className={tooltipLocation === "above" ? "tooltiptext" : "tooltiptext-right"}>
                            {hover.title && <h5>{hover.title}:</h5>}
                            <p>{hover.description}</p>
                        </span>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImgHover;