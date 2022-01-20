import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import {Link} from 'react-router-dom';
export default function GsHome() {
    return (
        <div>
            <Button component={Link} exact="true" to={"/lalith"}>Lalith</Button>
            <p>Home Page</p>
        </div>
    )
}
