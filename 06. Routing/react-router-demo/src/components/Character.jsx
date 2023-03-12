import { Link } from 'react-router-dom';

const Character = ({
    character,
}) => {
    return (
        <div>
            <Link to={`/characters/${character.id}`}>{character.name}</Link>
        </div>
    );
}

export default Character;