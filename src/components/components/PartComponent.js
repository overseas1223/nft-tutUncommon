const PartComponent = (props) => {
    return (
        <div className="cat-part">
            <img src={props.img} alt="trait" />
            <h5 className="trait-name">{props.name}</h5>
            <h6>{props.count} traits</h6>
        </div>
    );
}

export default PartComponent;