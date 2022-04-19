import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Slider from 'react-slick';
class HomeFooter extends Component {
    render() {
        return (
            <div className='home-footer'>
                <p>&copy; 2021 Hoi Dan It voi Khanh Long, More Infomation, Please visit my youtube channel.<a target="_blank" href='https://www.youtube.com/watch?v=XMEQO6kpYPA'> &#8594; Click here.&#8592;</a></p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

export default connect(mapStateToProps)(HomeFooter);
