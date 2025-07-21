import "./ChangeAddress.css";

function ChangeAddress(){
    return(
        <div>
            <div class="modal" role="dialog" aria-labelledby="location-title">
                <span class="close" aria-label="Close dialog" onclick="alert('Close clicked')">&times;</span>
                    <h3 id="location-title">Change Location</h3>
                    <button class="btn" type="button">Detect my location</button>
                    <span class="divider">— OR —</span>
                    <input type="text" placeholder="search delivery location" aria-label="Search delivery location" />
            </div>
        </div>
    );
}

export default ChangeAddress;