const PersonComponent = (props) => {
    return (
        <div class="cat-part">
            <img src={props.img} alt="trait" />
            <h5 className="trait-name">{props.name}</h5>
        </div>
    );
}

export default PersonComponent;