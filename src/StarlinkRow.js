

function StarlinkRow({starlink}){
    
    return(
        <tr>
            <td>{starlink.spaceTrack.OBJECT_NAME}</td> <td>{starlink.spaceTrack.CENTER_NAME}</td> <td>{starlink.height_km}</td>
        </tr>
    );
}


export default StarlinkRow;