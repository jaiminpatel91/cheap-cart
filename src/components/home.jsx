import React, {Component} from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Home extends Component {

    render() {
        return (
            <div>
                <FontAwesomeIcon icon={faHome} />
            </div>
        )
    }
}