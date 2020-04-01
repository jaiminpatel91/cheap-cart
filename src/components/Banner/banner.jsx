import React, {Component} from 'react';
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Banner extends Component {

    render() {
        return (
            <div>
                <FontAwesomeIcon icon={faBalanceScale} />
            </div>
        )
    }
}