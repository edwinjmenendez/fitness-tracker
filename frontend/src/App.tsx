
import * as React from 'react';
import { hot } from "react-hot-loader/root";
import Button from '@material-ui/core/Button';
import './index.css';
import { Landing } from './pages/Landing/Landing';

interface Props {
    name:
    string
}

function App({ name }: Props) {
    return (
        <div>
            <Landing />
        </div>
    )
}

export default hot(App);
