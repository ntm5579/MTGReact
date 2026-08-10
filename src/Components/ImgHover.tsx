import Hover from "../Models/Hover";
import "../Components/tooltip.css"

function ImgHover({ src, hovers, width, height, tooltipLocation = "above"}: { src: string; hovers: Hover[]; width?: string | number; height?: string | number; tooltipLocation?: string }) {
    return (
        <div
            className="img-hover-content"
            style={{
                backgroundImage: `url(${src})`,
                height: height || "auto",
                width: width || "auto",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }}>
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
                        border: `3px dashed ${hover.color || "blue"}`,
                        borderRadius: "1vh",
                    }}>
                    <span 
                        className={tooltipLocation === "above" ? "tooltiptext" : "tooltiptext-right"}
                        style={{width: "25vw"}}
                    >
                        {hover.title && <h5>{hover.title}:</h5>}
                        <p style={{overflow: "wrap"}}>{hover.description}</p>
                    </span>
                </div>
            ))}
        </div>
    );
}

export default ImgHover;